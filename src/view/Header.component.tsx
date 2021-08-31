import React from 'react';
import styled from 'styled-components';
import logo from '../assets/origin-logo.svg';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Header = (): JSX.Element => (
  <StyledHeader>
    <img src={logo} alt="Origin logotype" />
  </StyledHeader>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledHeader = styled.div`
  background: #fff;
  padding: 1em;

  @media screen and (min-width: 600px) {
    padding-left: 2.3em;
  }
`;
