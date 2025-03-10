import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import iconChannel from "../../img/iconChannel.svg";
import IOSSwitch from "./IOSSwicth";

const useStyles = makeStyles(({ palette, spacing, shadows, breakpoints }) => ({
  cardContainer: {
    maxWidth: "810px",
    width: "80%",
    backgroundColor: palette.common.white,
    boxShadow: shadows[5],
    padding: spacing(2, 1),
    borderRadius: spacing(2),
    [breakpoints.up("sm")]: {
      padding: spacing(4, 2),
    },
  },
  imgLog: {
    maxHeight: "100%",
    maxWidth: "100%",
    [breakpoints.up("sm")]: {
      maxHeight: "50%",
    },
  },
  imgChann: {
    width: "100%",
  },
  cardSection: {
    display: "grid",
    gridTemplateColumns: "0.5fr 1fr 0.5fr 0.5fr",
    gridTemplateRows: "64px 60px 60px 1fr",
    gridTemplateAreas: `
    "cardLogo cardLogo . cardChannelType"
    "cardTitle cardTitle cardTitle cardTitle"
    ".  . . cardSwitch"
    " cardPaper cardPaper  cardPaper cardPaper"
    `,
    [breakpoints.up("sm")]: {
      gridTemplateColumns: "0.7fr 0.3fr 3fr 0.5fr",
      gridTemplateRows: "70px 35px 35px 2fr",
      gridTemplateAreas: `
    "cardLogo cardLogo cardTitle cardChannelType"
    "cardLogo cardLogo . ."
    ". cardPaper cardPaper cardSwitch"
    ". cardPaper  cardPaper cardSwitch"
    `,
    },
  },

  cardLogo: {
    gridArea: "cardLogo",
  },
  cardTitle: {
    gridArea: "cardTitle",
  },
  cardChannelType: {
    gridArea: "cardChannelType",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardSwitch: {
    gridArea: "cardSwitch",
    alignItems: "center",
    justifyContent: "center",
    margin: spacing(0),
  },
  cardPaper: {
    gridArea: "cardPaper",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fef",
    padding: spacing(2, 1, 3),
    [breakpoints.up("sm")]: {
      padding: spacing(2, 4, 5),
    },
  },
  cardFooter: {
    padding: spacing(2, 1, 0),
    display: "flex",
    flexDirection: "column",
    rowGap: spacing(2),
  },
  imgChannelType: {
    maxWidth: "32px",
  },
  imgLogo: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    columnGap: spacing(1),
    alignItems: "center",
    [breakpoints.up("sm")]: {
      objectFilt: "contain",
      flexDirection: "column",
      rowGap: spacing(1),
    },
  },
  rowGap: {
    display: "flex",
    flexDirection: "column",
    rowGap: spacing(2),
    padding: spacing(1),
  },

  itemsContain: {
    paddingLeft: spacing(0),
    columnGap: spacing(1),
    [breakpoints.up("sm")]: {
      paddingLeft: spacing(3),
      columnGap: spacing(3),
    },
  },
  divider: {
    margin: spacing(4, 0, 2),
  },
}));

const CardDetails = ({ id }) => {
  const [channelId, setChannelId] = useState([]);

  const getCanal = async () => {
    const res = await axios.get(`http://localhost:5001/api/channel/${id}`);

    setChannelId(res.data);
  };
  useEffect(() => {
    getCanal();
  }, [id]);

  const classes = useStyles();
  const [details, setDetails] = useState(true);
  const handleChange = () => {
    setDetails(!details);
  };

  const cartTrue = (
    <>
      <Typography align="right" variant="subtitle1">
        <b>{channelId.proveedor}</b>
      </Typography>
      <Box className={classes.rowGap}>
        <Typography variant="h5">Contacto:</Typography>
        <Grid container direction="row" className={classes.itemsContain}>
          <Typography variant="subtitle1">
            <b>Jorge Sepúlveda{/* {channelId.nombre} */}</b> +00123456789
          </Typography>
          {/* <Typography variant="subtitle1">
                  <b>Jorge Sepúlveda:</b> +00123456789
                </Typography>
                <Typography variant="subtitle1">
                  <b>Jorge Sepúlveda:</b> +00123456789
                </Typography> */}
        </Grid>
      </Box>
    </>
  );
  const cartFalse = (
    <>
      <Typography align="right" variant="subtitle1">
        bandwidth: <b>{channelId.bw}mb</b>
      </Typography>
      <Box className={classes.rowGap}>
        <Typography variant="h5">Criticidad:</Typography>
        <Grid direction="row" className={classes.itemsContain}>
          <Typography variant="subtitle1">
            <b>{channelId.criticidad}</b>
          </Typography>
        </Grid>
      </Box>
    </>
  );

  return (
    <Card variant="outlined" className={classes.cardContainer}>
      <CardContent>
        <Box container className={classes.cardSection}>
          <picture className={classes.cardLogo}>
            <div className={classes.imgLogo}>
              <img
                className={classes.imgLog}
                src={channelId.imagen}
                alt={channelId.nombre}
              />
              <Typography variant="h5">
                <figcaption>
                  {" "}
                  <b>{channelId.numero}</b>
                </figcaption>
              </Typography>
            </div>
          </picture>
          <Typography className={classes.cardTitle} variant="h3" align="center">
            {channelId.nombre}
          </Typography>
          <picture className={classes.cardChannelType}>
            <div className={classes.imgChannelType}>
              <img
                className={classes.imgChann}
                src={iconChannel}
                alt="Icon Channel"
              />
            </div>
            <figcaption>{channelId.tipo}</figcaption>
          </picture>

          <Paper className={classes.cardPaper} variant="outlined">
            {details ? cartTrue : cartFalse}
          </Paper>
          <FormControlLabel
            className={classes.cardSwitch}
            control={
              <IOSSwitch
                checked={details}
                onChange={handleChange}
                name="checkedB"
              />
            }
            // label="Más"
          />
        </Box>
        <Divider className={classes.divider} />
        <Grid className={classes.cardFooter}>
          <Typography variant="h5">Multicast:</Typography>
          <Grid direction="row" container className={classes.itemsContain}>
            <Typography variant="subtitle1">
              <b>adsl: </b>239.255.2.79
              {/* adsl: `${channelId.multicast[0].adsl}` */}
              {/* {` adsl: ${channelId.multicast[0].adsl} `} */}
            </Typography>
            <Typography variant="subtitle1">
              <b>fca: </b>239.255.5.79
              {/*  {` fca: ${channelId.multicast[1]}`} */}
            </Typography>
            <Typography variant="subtitle1">
              <b>mpeg4: </b>239.255.3.47
              {/* {` mpeg4: ${channelId.multicast[2]}`} */}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CardDetails;
