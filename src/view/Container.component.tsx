import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../constants';

type ElemProps = { children: React.ReactNode };

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Container = ({ children }: ElemProps): JSX.Element => (
  <StyledContainer>{children}</StyledContainer>
);

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    max-width: 560px;
    margin: 0 auto;
  }
`;
