import React from "react";
import {
  Container,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  List,
  Box,
  Link,
  Card,
  CardActions,
  CardContent,
  Button,
  makeStyles,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { CardCarousel } from "./components/CardCarousel";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
  },
}));

export const PurpleCircles = () => {
  const classes = useStyles();
  return (
    <PurpleContainer>
      <div className="container">
        <div className="headerTitle">
          {/* Typography overwritten on app.js  */}
          <Typography variant="h1" gutterBottom>
            Purple Circles
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ fontStyle: "italic" }}
            gutterBottom
          >
            Purple is closely associated with violet. In optics, purple and
            violet refer to colors that look similar, but purples are mixtures
            of red and blue or violet light.
          </Typography>
        </div>
      </div>
      {/* Start of avatar details */}
      <Container className="container" maxWidth="sm">
        <List className="avatar">
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={require("./assets/Images/avatar.png")}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Jane Doe"
              secondary="Project Manager, Dekode - 2 June"
            />
            <ListItemSecondaryAction>
              <Link
                className="circleLink"
                href="https://www.facebook.com/dekode.interaktiv"
              >
                <FacebookIcon />
              </Link>
              <Link
                className="circleLink"
                href="https://www.instagram.com/dekodeno/"
              >
                <InstagramIcon />
              </Link>
              <Link className="circleLink" href="https://twitter.com/">
                <TwitterIcon />
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/* end of avatar details*/}
        <div className="container">
          <Typography variant="body1" gutterBottom>
            Purple is closely associated with violet. In common usage, both
            refer to colors that are between red and blue in hue, with purples
            closer to red and violets closer to blue. Similarly, in the
            traditional painters'{" "}
            <Link className="circleLink" href="/circles/purpleCircles">
              color wheel
            </Link>
            , purple and violet are both placed between red and blue, with
            purple is closer to red.
          </Typography>
        </div>
      </Container>
      {/* end */}
      {/*  Typography Overlay Image  starts here */}
      <div className="container grid">
        <img
          src={require("./assets/Images/beach.jpeg")}
          className="img-fluid"
          alt=""
        />
        <Typography className="grid-caption" variant="caption">
          {" "}
          In humans, the L (red) cone in the eye is primarily sensitive to long
          wavelength light in the yellow-red region of the spectrum, but is also
          somewhat sensitive to the shorter wavelength violet light that
          primarily stimulates the S (blue) cone.
        </Typography>
        <Typography className="grid-content">
          {" "}
          "The process of making dye was long, difficult and expensive"
        </Typography>
      </div>
      {/* end of typography Overlay Image */}
      <Container className="container" maxWidth="sm">
        <Typography variant="body1" component="div" className="container">
          <Box>
            In humans, the L (red) cone in the eye is primarily sensitive to
            long wavelength light in the yellow-red region of the spectrum, but
            is also somewhat sensitive to the shorter wavelength violet light
            that primarily stimulates the S (blue) cone.
          </Box>
          <Box fontSize="h4.fontSize" fontWeight="bold">
            As a result
          </Box>
          <Box>
            As a result, when violet light strikes the eye, the S-cone is
            stimulated strongly and the L-cone is stimulated weakly.
            Accordingly, strong blue light mixed with weaker red light can mimic
            this pattern of stimulation, causing humans to perceive colors that
            the same hue as violet, but with lower saturation.
          </Box>
        </Typography>
      </Container>
      {/* Carousel imported from CardCarousel.js */}
      <div className="container">
        <CardCarousel />
      </div>
      {/* end */}
      {/* Card section starts*/}
      <Container className="container" maxWidth="sm">
        <Card
          border="light"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <CardContent>
            <Typography variant="h2" gutterBottom>
              Teft?
            </Typography>
            <Typography variant="body2" component="p">
              As a result, when violet light strikes the eye, the S-cone is
              stimulated strongly and the L-cone is stimulated weakly.
            </Typography>
          </CardContent>
          <CardActions className={classes.root}>
            <Button variant="outlined" color="primary">
              Why Teft?
            </Button>
          </CardActions>
        </Card>
      </Container>
    </PurpleContainer>
  );
};

export default withRouter(PurpleCircles);

const PurpleContainer = styled.footer`
  .avatar {
    color: var(--mainViolet);
  }
  .circleLink {
    color: var(--mainViolet);
  }
  .circleLink:hover {
    color: var(--mainLightViolet);
  }
`;
