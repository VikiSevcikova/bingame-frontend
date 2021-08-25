import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, CssBaseline } from "@material-ui/core";
import clsx from "clsx";

function ForgotPassword({history}) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) history.push("/menu");
  }, [history]);

  const loginHandler = async (e) => {};
  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <form onSubmit={loginHandler} className={classes.form}>
            <Typography variant="h5" gutterBottom className={classes.formTitle}>
              Forgot your password?
            </Typography>

            <Typography variant="body2">
              If you've forgotten your password, enter and submit your email
              address below. We'll email you a link to a page where you can
              easily create a new password.
            </Typography>
            {error && <span>{error}</span>}
            <TextField
              fullWidth
              margin="normal"
              required
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={clsx(classes.btn, classes.margin)}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default ForgotPassword;
