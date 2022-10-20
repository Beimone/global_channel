import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
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
    padding: spacing(0, 2),
  },
  title: {
    fontWeight: "500",
    marginBottom: spacing(0.8),
  },
  textWarning: {
    color: palette.warning.main,
  },
  textSecondary: {
    color: palette.text.secondary,
    paddingBottom: spacing(1),
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

const SignUp = () => {
  const classes = useStyle();

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    typeUser: "user",
    phone: "",
    password: "",
    confimPassword: "",
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
    if (user.password !== user.confimPassword) {
      setPasswordError(true);
      return;
    }
    console.log(user);
  };

  return (
    <article className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Crear una cuenta
      </Typography>
      <Typography variant="body2" className={classes.textSecondary}>
        <em className={classes.textWarning}>Importante* </em>
        Por seguridad de los datos, tendrá acceso limitado hasta que su cuenta
        sea verificada por el administrador.
      </Typography>
      <Typography variant="body1">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" component="button">
          Iniciar sesión
        </Link>
      </Typography>

      <form className={classes.formLogin} onSubmit={handlOnSubmit}>
        <div className={classes.formField}>
          <TextField
            className={(classes.textField, classes.margin)}
            required
            id="name"
            label="Nombre"
            onChange={handleChange("name")}
          />
          <TextField
            className={(classes.textField, classes.margin)}
            required
            id="lastName"
            label="Apellidos"
            onChange={handleChange("lastName")}
          />
          <TextField
            className={(classes.textField, classes.margin)}
            fullWidth
            required
            id="email"
            label="E-mail"
            type="email"
            onChange={handleChange("email")}
          />
          <TextField
            className={(classes.textField, classes.margin)}
            required
            id="phone"
            label="Telefono"
            type="tel"
            onChange={handleChange("phone")}
          />
          <TextField
            className={(classes.textField, classes.margin)}
            id="typeUser"
            disabled
            select
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
                    {isShowPassword ? (
                      // {isShowPassword.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={(classes.textField, classes.margin)}>
            <InputLabel
              required
              error={isPasswordError}
              htmlFor="confimPassword"
            >
              Confirmación
            </InputLabel>
            <Input
              error={isPasswordError}
              id="confimPassword"
              type={isShowPassword ? "text" : "password"}
              onChange={handleChange("confimPassword")}
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
            <FormHelperText id="errorConfirmation" error>
              {isPasswordError
                ? "Las contraseñas no coinciden. Vuelve a intentarlo."
                : ""}
            </FormHelperText>
          </FormControl>
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
export default SignUp;
