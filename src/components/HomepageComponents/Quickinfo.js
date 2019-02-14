import React, { Component } from "react";
import { Section, Title, SectionButton } from "../../utils";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../utils";

export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in non
            voluptas culpa reprehenderit quam, placeat voluptatem, ducimus
            eligendi sed unde voluptate pariatur expedita, odio eius ab! Fuga,
            saepe laboriosam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Praesentium eligendi vel, hic dolores perferendis
            autem molestias facere aut officiis quod.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-widht: 768px) {
    width: 70%;
  }
  @media (min-widht: 992px) {
    width: 60%;
  }
`;
