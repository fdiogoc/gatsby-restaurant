import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../../utils";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Icons } from "../../utils";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div className="title">eatery</div>
        <Icons />
        <p className="copyright"> copyright &copy; 2018 eatery</p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;

    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`;
