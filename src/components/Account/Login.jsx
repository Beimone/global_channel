import {
  Button,
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
const useStyle = makeStyles(({ palette, spacing }) => ({
  root: {
    maxWidth: "550px",
  },
  title: {
    fontWeight: "500",
    marginBottom: spacing(0.8),
  },
  textWarning: {
    color: palette.warning.main,
  },

  formLogin: {
    paddingTop: spacing(3),
  },
  formField: {
    display: "flex",
    flexWrap: "wrap",
  },
  formButton: {
    padding: spacing(7, 0, 2),
    display: "flex",
    justifyContent: "center",
  },
  formButtonSend: {
    maxWidth: "70%",
    width: "100%",
    borderRadius: spacing(2.5),
  },
  margin: {
    flexGrow: "1",
    margin: spacing(1),
  },
  textField: {
    width: "25ch",
  },
}));

const typeUser = [
  {
    value: "admin",
    label: "Administrador",
  },
  {
    value: "user",
    label: "Usuario",
  },
];

const Login = (isUser, setIsUser) => {
  console.log(isUser, setIsUser);
  const classes = useStyle();

  const [user, setUser] = useState({
    email: "",
    typeUser: "",
    password: "",
  });
  const [isShowPassword, setShowPassword] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);

  const handleChange = (prop) => (event) => {
    if (user.hasOwnProperty(prop)) {
      setUser({ ...user, [prop]: event.target.value });
    } else {
      console.log("Propiedad no valido");
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setPasswordError(true);
  };

  return (
    <article className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Iniciar sesión
      </Typography>
      <Typography variant="body1">
        ¿Nuevo Usuario? <Link component="button">Crear cuenta</Link>
      </Typography>

      <form className={classes.formLogin} onSubmit={handlOnSubmit}>
        <div className={classes.formField}>
          <TextField
            className={(classes.textField, classes.margin)}
            fullWidth
            required
            id="email"
            label="E-mail"
            type="email"
            onChange={handleChange("email")}
          />
          <FormControl className={(classes.textField, classes.margin)}>
            <InputLabel required htmlFor="password">
              Contraseña
            </InputLabel>
            <Input
              id="password"
              type={isShowPassword ? "text" : "password"}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            className={(classes.textField, classes.margin)}
            id="typeUser"
            select
            label="Seleccionar"
            size="small"
            value={user.typeUser}
            onChange={handleChange("typeUser")}
            helperText="Por favor elija una opción"
            variant="outlined"
          >
            {typeUser.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormHelperText id="errorConfirmation" error>
            {isPasswordError
              ? "Esa es una contraseña incorrecta. Intentar otra vez."
              : ""}
          </FormHelperText>
        </div>
        <div className={classes.formButton}>
          <Button
            className={classes.formButtonSend}
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            size="large"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </article>
  );
};
export default Login;
