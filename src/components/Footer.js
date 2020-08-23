import React from "react";
import styled from "styled-components";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <hr />
        <div className="container">
          <div className="footer-image">
            <a href="/">
              <img
                src={require("../assets/Images/logo.png")}
                width="70"
                alt="Teft logo"
              />
            </a>
          </div>
          <div className="row">
            <div className="col-4">
              <ul className="list-unstyled">
                <li>Decode As</li>
                <li>Tlf: 23 08 00 00</li>
                <li>E-post: info@dekode.no</li>
                <li>Tollbugata 11, Oslo</li>
                <li>Postboks 489 Sentrum, 0105 Oslo</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Tjenester</a>
                </li>
                <li>
                  <a href="/">Produkter</a>
                </li>
                <li>
                  <a href="/">Kontakt</a>
                </li>
                <li>
                  <a href="/">Abonnement</a>
                </li>
                <li>
                  <a href="/">Logg inn</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Personvernerklæring</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
                <li>
                  <a href="/">Language: En</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/dekode.interaktiv">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/dekodeno/">
                    <InstagramIcon />
                  </a>
                  <a href="https://twitter.com/">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    font-family: var(--fontFamily);
    padding-top: 3rem;
    padding-bottom: 2rem;
    bottom: 0;
    position: relative;
    width: 100%;
  }
  .footer-image {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  li {
    margin: 10px 0;
  }
  ul li a {
    color: var(--mainViolet);
  }
  ul li a:hover {
    color: var(--mainLightViolet);
  }
`;
