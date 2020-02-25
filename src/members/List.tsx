import React from "react";
import JsCookie from "js-cookie";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Component = () => {
  const reset = () => {
    JsCookie.remove("authorized");
    window.location.href = "/signin";
  };

  return (
    <Container>
      <h1>Members</h1>

      <p>This page is only for authorized members.</p>

      <hr />

      <Button variant="contained" color="primary" onClick={() => reset()}>
        Sign Out
      </Button>
    </Container>
  );
};

export default Component;
