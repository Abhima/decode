import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Teft = () => {
  const classes = useStyles();
  return (
    <div className="headerTitle">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom className={classes.paper}>
            The beauty of colors and figures.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={require("./assets/Images/see.png")}
            className="img-fluid"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Teft;
