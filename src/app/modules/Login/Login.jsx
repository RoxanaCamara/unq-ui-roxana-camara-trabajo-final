import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import LoginCard from "../../components/LoginCard/LoginCard";
import './Styles.css'
import { connect } from "react-redux";
import { login } from  '../../reducers/Auth'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  loginButton: {
    padding: "2% 35%",
  },  
  textField: {
    width: "25ch",
  },
  title: {
    fontSize: 14,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginCard>
      <TextField id="input-with-icon-grid" label="Email or name user" />
      <FormControl className={classes.textField}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        variant="contained"
        size="small"
        color="primary"
        className={clsx(classes.loginButton, classes.marginTop)}
      >
        Login
      </Button>
      <Typography variant="body2" component="p">
        Forgot password?
      </Typography>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Or log with:
      </Typography>
      
      <div className="iconsRedesSociales">
      <FacebookIcon />
      <InstagramIcon />
      <EmailIcon />
      </div>
      <Typography variant="body2" component="p">
        Don't have an account? <b>Sign up</b>
      </Typography>
    </LoginCard>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  loginError: auth.loginError,
  showModal: auth.showModalLogin,
  isError: auth.errorMessage
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
