import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import home from "./home";
import members from "./members";
import news from "./news";
import signin from "./signin";

const useStyles = makeStyles({
  link: {
    color: "white",
    marginRight: 20,
    textDecoration: "none"
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: 48,
    padding: "0 30px"
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" className={classes.link}>
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link to="/news" className={classes.link}>
            <Typography variant="h6">News</Typography>
          </Link>
          <Link to="/signin" className={classes.link}>
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <home.List />
        </Route>

        <Route exact path="/news">
          <news.List />
        </Route>

        <Route exact path="/signin">
          <signin.New />
        </Route>

        <Route exact path="/members">
          <members.List />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
