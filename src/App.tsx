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
import { BREAKPOINTS, COLORS } from './constants';

export function App(): JSX.Element {
  return (
    <>
      <Reset />
      <StyledApp data-testid="greetings-container">
        <Header />
        <Container>
          <Title />
          <Box className="content-container">
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
  font-size: 16px;
  background: ${COLORS.blueGray10};
  box-sizing: border-box;
  min-height: 100vh;
  font-family: 'Work Sans', sans-serif;

  @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
    font-size: 24px;
  }

  .content-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;

    .goal {
      grid-column: 1 / 4;
    }

    .amount-input {
      grid-column: 1 / 4;
    }

    .date-input {
      grid-column: 1 / 4;
    }

    .monthly-amount {
      grid-column: 1 / 4;
    }

    .button {
      grid-column: 1 / 4;
    }

    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      .amount-input {
        grid-column: 1 / 3;
      }

      .date-input {
        grid-column: 3 / 4;
      }
    }
  }
`;
