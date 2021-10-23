import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Anywhere Fitness</StyledHeaderTitle>
      <StyledUl>
        <li>
          <Styledlink to='/client'>Dashboard</Styledlink>
        </li>
        <li>
          <Styledlink to='/client/classes/current'>Current Classes</Styledlink>
        </li>
        <li>
          <Styledlink to='/client/classes/available'>
            Available Classes
          </Styledlink>
        </li>
        <li>
          <Styledlink to='/#contact'>Contact Us</Styledlink>
        </li>
        <li>
          <Styledlink to='#'>Log Out</Styledlink>
        </li>
      </StyledUl>
    </StyledHeader>
  );
}

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 5px;
  @media (min-width: 769px) {
    display: flex;
    display: none;
  }
`;

const Styledlink = styled(Link)`
  font-size: 0.99em;
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
`;

const StyledHeader = styled.div`
  background-color: #15171c;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: fixed;
    z-index: 1000;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledHeaderTitle = styled.span`
  font-size: 2rem;
  color: white;
  text-align: center;
  display: block;
`;
