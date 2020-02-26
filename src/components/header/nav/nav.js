import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/abyabrkal/gatsby-cicd">GitHub</a>
      </li>
      <li>
        <div>Version: %%VERSION%%</div>
      </li>
      <li>
      <a href="https://gitlab.com/abykal/gatsby-cicd/-/commits/master"><img alt="pipeline status" src="https://gitlab.com/abykal/gatsby-cicd/badges/master/pipeline.svg" /></a>
      </li>
    </ul>
  </Container>
);

export default Nav;
