import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { CardDeck, Card } from "react-bootstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const CardCarousel = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <CardDeck>
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Img
                variant="top"
                src={require("../assets/Images/pink.jpeg")}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                  In optics, violet is a spectral color: It refers to the color
                  of any different single wavelength of light on the short
                  wavelength end of the visible spectrum.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Item>
        <Item>
          <CardDeck>
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Img
                variant="top"
                src={require("../assets/Images/pink.jpeg")}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                  In optics, violet is a spectral color: It refers to the color
                  of any different single wavelength of light on the short
                  wavelength end of the visible spectrum.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Item>
        <Item>
          <CardDeck>
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Img
                variant="top"
                src={require("../assets/Images/pink.jpeg")}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                  In optics, violet is a spectral color: It refers to the color
                  of any different single wavelength of light on the short
                  wavelength end of the visible spectrum.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Item>
        <Item>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src={require("../assets/Images/pink.jpeg")}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                  In optics, violet is a spectral color: It refers to the color
                  of any different single wavelength of light on the short
                  wavelength end of the visible spectrum.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Item>
      </Carousel>
    </div>
  );
};
export default CardCarousel;
