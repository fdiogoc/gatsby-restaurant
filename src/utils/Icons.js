import React, { Component } from "react";
import styled from "styled-components";

import { styles } from "../utils";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com"
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com"
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com"
      }
    ]
  };

  render() {
    return (
      <IconWrapper className="icon">
        {this.state.icons.map(item => {
          return (
            <a href={item.path} key={item.id} target="blank">
              {item.icon}
            </a>
          );
        })}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transition({})};
    color: ${styles.colors.mainWhite};
  }

  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: flex;
  width: 10rem;
  justify-content: space-between;
  margin: 0 auto;
`;
