import React, { useState, useEffect } from "react";
import JsCookie from "js-cookie";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const Component = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (username === "username" && password === "password") {
      JsCookie.set("authorized", "yes");

      const delay = Math.floor(Math.random() * Math.floor(9)) * 1000;
      console.log("delay", delay);

      // Simulating randomely slow API connection here.
      window.setTimeout(() => (window.location.href = "/members"), delay);
      return;
    }

    setUsername("");
    setPassword("");

    window.alert("Try again!");
  };

  useEffect(() => {
    if (JsCookie.get("authorized") === "yes") {
      window.location.href = "/members";
    }
  });

  return (
    <Container>
      <h1>Sign In</h1>

      <h3>
        Enter <code>username</code> and <code>password</code> to continue.
      </h3>

      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />

      <hr />

      <Button variant="contained" color="primary" onClick={() => submit()}>
        Sign In
      </Button>
    </Container>
  );
};

export default Component;
