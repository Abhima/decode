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
} from "@material-ui/core";
import { Card, Button } from "react-bootstrap";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { CardCarousel } from "./components/CardCarousel";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

export const PurpleCircles = () => {
  return (
    <PurpleContainer>
      <div className="container">
        <div className="headerTitle">
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
      <div className="container">
        <Container maxWidth="sm">
          <div className="avatar">
            <List>
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
          </div>
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
      </div>
      {/*    Jumbotron image  */}

      <div className="content">
        <div class="contentBlock">
          <Typography variant="body1">
            The process of making dye was long, difficult and expensive.
          </Typography>
        </div>
        <div class="imgBg">
          <img
            src={require("./assets/Images/beach.jpeg")}
            class="img-fluid"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <Container maxWidth="sm">
          <Typography variant="body1" component="div">
            <Box>
              In humans, the L (red) cone in the eye is primarily sensitive to
              long wavelength light in the yellow-red region of the spectrum,
              but is also somewhat sensitive to the shorter wavelength violet
              light that primarily stimulates the S (blue) cone.
            </Box>
            <Box fontSize="h4.fontSize" fontWeight="bold">
              As a result
            </Box>
            <Box>
              As a result, when violet light strikes the eye, the S-cone is
              stimulated strongly and the L-cone is stimulated weakly.
              Accordingly, strong blue light mixed with weaker red light can
              mimic this pattern of stimulation, causing humans to perceive
              colors that the same hue as violet, but with lower saturation.
            </Box>
          </Typography>
        </Container>
      </div>
      {/* Carousel import from CardCarousel.js */}
      <div className="container">
        <CardCarousel />
      </div>
      <div className="container">
        <Container maxWidth="sm">
          <Card border="light" style={{ backgroundColor: "transparent" }}>
            <Card.Body>
              <Card.Title>Teft? </Card.Title>
              <Card.Text>
                As a result, when violet light strikes the eye, the S-cone is
                stimulated strongly and the L-cone is stimulated weakly.
              </Card.Text>
              <Button variant="outline-dark">Why teft?</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
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
