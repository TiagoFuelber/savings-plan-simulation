import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../constants';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Title = (): JSX.Element => (
  <StyledTitle>
    Let&apos;s plan your <strong>saving goal.</strong>
  </StyledTitle>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledTitle = styled.h1`
  font-size: 1.125em;
  color: ${COLORS.brandColorPrimary};
  text-align: center;
  margin: 2em 0 1.5em;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 1.25em;
    margin-top: 3em;
  }

  strong {
    font-weight: 800;
  }
`;
