import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../constants';

type ElemProps = { children: React.ReactNode; className: string };

export function Box({ children, className }: ElemProps): JSX.Element {
  return <StyledBox {...{ className }}>{children}</StyledBox>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  padding: 2.2em 1.5em 2.5em;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 2.2em 2.5em 2.5em;
  }
`;
