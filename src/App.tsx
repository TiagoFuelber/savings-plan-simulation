import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { AmountInput } from './view/AmountInput.component';
import { Box } from './view/Box.component';
import { Button } from './view/Button.component';
import { Container } from './view/Container.component';
import { DateInput } from './view/DateInput.component';
import { Goal } from './view/Goal.component';
import { Header } from './view/Header.component';
import { MonthlyAmount } from './view/MonthlyAmount.component';
import { Title } from './view/Title.component';

export function App(): JSX.Element {
  return (
    <>
      <Reset />
      <StyledApp data-testid="greetings-container">
        <Header />
        <Container>
          <Title />
          <Box>
            <Goal />
            <AmountInput />
            <DateInput />
            <MonthlyAmount />
            <Button />
          </Box>
        </Container>
      </StyledApp>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledApp = styled.div`
  background: grey;
  box-sizing: border-box;
  min-height: 100vh;
  font-family: 'Work Sans', sans-serif;
`;
