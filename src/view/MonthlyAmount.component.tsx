import styled from 'styled-components';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import getMonthlyAmount from '../application/getMonthlyAmount';
import { BREAKPOINTS, COLORS } from '../constants';

interface Props {
  totalAmount: string;
  reachDate: Date;
}

export function MonthlyAmount({ totalAmount, reachDate }: Props): JSX.Element {
  const totalMonths = differenceInCalendarMonths(reachDate, new Date());
  const totalAmountNumber = parseFloat(totalAmount.replace(/,/g, ''));
  const formattedTotalAmount = (
    isNaN(totalAmountNumber) ? 0 : totalAmountNumber
  ).toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedMonthlyAmount = getMonthlyAmount(
    totalAmountNumber,
    totalMonths
  ).toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <StyledMothlyAmount className="monthly-amount">
      <div className="result">
        <div className="label">Monthly amount</div>
        <div className="amount" data-testid="monthly-amount">
          {formattedMonthlyAmount}
        </div>
      </div>
      <div className="description">
        You’re planning{' '}
        <strong data-testid="monthly-deposits">
          {totalMonths} monthly deposits
        </strong>{' '}
        to reach your <strong>{formattedTotalAmount}</strong> goal by{' '}
        <strong>
          {reachDate.toLocaleString('default', { month: 'long' })}{' '}
          {reachDate.toLocaleString('default', { year: 'numeric' })}
        </strong>
        .
      </div>
    </StyledMothlyAmount>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledMothlyAmount = styled.div`
  border: 1px solid ${COLORS.blueGray50};
  box-sizing: border-box;
  border-radius: 8px;

  .result {
    padding: 1.6em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      font-family: Work Sans;
      font-size: 1.125em;
      line-height: 120%;
      color: ${COLORS.blueGray900};

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        font-size: 1.25em;
      }
    }

    .amount {
      font-family: Rubik;
      font-weight: 500;
      font-size: 1.5em;
      line-height: 120%;
      color: ${COLORS.brandColorSecondary};

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        font-size: 2em;
      }
    }
  }

  .description {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75em;
    line-height: 16px;
    text-align: center;
    color: ${COLORS.blueGray900};
    padding: 2em 2.5em;

    @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
      text-align: left;
    }

    strong {
      font-weight: bold;
    }

    background-color: ${COLORS.blueGray10};
  }
`;
