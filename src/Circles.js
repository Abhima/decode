import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
}));

export const Circles = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="headerTitle">
        <Typography variant="h1" gutterBottom>
          Circles
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Card border="light" style={{ boxShadow: "none" }}>
              <CardContent>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./assets/Images/purple.jpg")}
                  title="Contemplative Reptile"
                />
                <Typography gutterBottom variant="h2">
                  Purple Circles{" "}
                </Typography>
                <Typography variant="body2" component="p">
                  Purple is closely associated with violet. In common usage,
                  both refer to colors that are between red and blue in hue,
                  with purples closer to red and violets closer to blue.
                  Similarly, in the traditional painters
                </Typography>
              </CardContent>
              <CardActions className={classes.root}>
                <Link
                  className="link"
                  to={{
                    pathname: "circles/purplecircles",
                  }}
                >
                  Read More
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card border="light" style={{ boxShadow: "none" }}>
              <CardContent>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./assets/Images/blue.jpg")}
                  title="Contemplative Reptile"
                />
                <Typography gutterBottom variant="h2">
                  Blue Circles
                </Typography>
                <Typography variant="body2" component="p">
                  Purple is closely associated with violet. In common usage,
                  both refer to colors that are between red and blue in hue,
                  with purples closer to red and violets closer to blue.
                  Similarly, in the traditional painters
                </Typography>
              </CardContent>
              <CardActions className={classes.root}>
                <Link
                  className="link"
                  to={{
                    pathname: "/circles",
                  }}
                >
                  Read More
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Circles;
