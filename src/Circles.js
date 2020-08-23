import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import { Typography } from "@material-ui/core";

export const Circles = () => {
  return (
    <div class="container">
      <div className="headerTitle">
        <Typography variant="h1" gutterBottom>
          Circles
        </Typography>
        <CardDeck className="m-3">
          <Card border="light" style={{ backgroundColor: "transparent" }}>
            <Card.Img
              variant="top"
              style={{ width: "28rem%", height: "20rem" }}
              src={require("./assets/Images/purple.jpg")}
            />
            <Card.Body>
              <Card.Title>Purple Circles </Card.Title>
              <Card.Text>
                Purple is closely associated with violet. In optics, purple and
                violet refer to colors that look similar, but purples are
                mixtures of red and blue or violet light.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* Link tag With out parameter */}
              {/* <Link to="/about">About</Link> */}
              <Link
                className="link"
                to={{
                  pathname: "circles/purplecircles",
                }}
              >
                Read More
              </Link>
            </Card.Footer>
          </Card>
          <Card border="light" style={{ backgroundColor: "transparent" }}>
            <Card.Img
              variant="top"
              style={{ width: "28rem%", height: "20rem" }}
              src={require("./assets/Images/blue.jpg")}
            />
            <Card.Body>
              <Card.Title>Blue Circles</Card.Title>
              <Card.Text>
                Blue is closely associated with violet. In optics, blue and
                violet refer to colors that look similar, but purples are
                mixtures of red and blue or violet light.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* Link tag With out parameter */}
              {/* <Link to="/about">About</Link> */}
              <Link
                className="link"
                to={{
                  pathname: "circles/purplecircles",
                }}
              >
                Read More
              </Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Circles;
