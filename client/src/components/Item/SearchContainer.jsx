import {
  alpha,
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {},
  searchContainer: {
    display: "flex",
    justifycontent: "space-between",
    alignItems: "center",
    padding: spacing(0.5, 3),
    borderRadius: spacing(4),
    backgroundColor: alpha(palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: palette.common.white,
    },
    width: "100%",
  },
  searchItemLeft: {
    display: "flex",
    flexGrow: 1,
  },
  searchItemRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  searchIcon: {
    // pointerEvents: "none",
  },
  inputRoot: {
    flexGrow: 1,
    color: "inherit",
  },
  inputInput: {
    padding: spacing(1, 1, 1, 0),
  },
  divider: {
    height: 28,
    margin: 4,
  },
  select: {
    minWidth: spacing(10.5),
    [breakpoints.up("sm")]: {
      minWidth: spacing(15),
    },
  },
}));
const searchType = [
  {
    value: "name",
    label: "Nombre",
  },
  {
    value: "number",
    label: "Numero",
  },
  {
    value: "provider",
    label: "Proveedor",
  },
];
const SearchContainer = () => {
  const classes = useStyle();
  const [searchCards, setSearchCards] = useState({
    search: "",
    typeCards: "number",
  });
  const navigate = useNavigate();
  const handleChange = (prop) => (event) => {
    if (searchCards.hasOwnProperty(prop)) {
      setSearchCards({ ...searchCards, [prop]: event.target.value });
    } else {
      console.log("Propiedad no valido");
    }
  };
  /*  useEffect(() => {
    handleSubmit();
  }, [searchTerm]); */

  const handleSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    if (event.target.value === "") {
      return navigate("/");
    }
    return navigate(`/search/${searchCards.typeCards}/${searchCards.search}`);
  };

  return (
    <Paper component="form" className={classes.searchContainer}>
      <div className={classes.searchItemLeft}>
        <IconButton className={classes.searchIcon} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          onKeyPress={handleSubmit}
          onKeyUp={handleChange("search")}
          placeholder="Buscar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.searchItemRight}>
        <Divider className={classes.divider} orientation="vertical" />
        <TextField
          className={classes.select}
          id="typeCards"
          select
          label="Buscar por:"
          size="small"
          value={searchCards.typeCards}
          onChange={handleChange("typeCards")}
          // helperText="Por favor elija una opción"
        >
          {searchType.map((event) => (
            <MenuItem key={event.value} id={event.value} value={event.value}>
              {event.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Paper>
  );
};
export default SearchContainer;
