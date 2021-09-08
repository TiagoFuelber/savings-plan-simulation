import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { BREAKPOINTS, COLORS } from '../constants';
import dollarSign from '../assets/icons/dollar.svg';

const currencyMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 9,
  allowNegative: false,
  allowLeadingZeroes: false,
});

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function AmountInput({ value, onChange }: Props): JSX.Element {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <StyledAmountInput className="amount-input">
      <label className="input-label" htmlFor="amount">
        Total amount
        <div className="input-container">
          <img className="dollar-icon" src={dollarSign} alt="" />
          <MaskedInput
            id="amount"
            className="amount-input"
            data-testid="amount-input"
            type="tel"
            value={value}
            placeholder="0"
            onChange={onChangeInput}
            mask={currencyMask}
          />
        </div>
      </label>
    </StyledAmountInput>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledAmountInput = styled.div`
  width: 100%;

  .input-container {
    position: relative;
    width: 100%;

    .input-label {
      color: ${COLORS.blueGray900};
      font-family: Work Sans;
      font-size: 0.8em;
      line-height: 150%;
    }

    .dollar-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-40%);
    }

    .amount-input {
      color: ${COLORS.blueGray600};
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25em;
      line-height: 120%;

      -webkit-appearance: none;
      outline: none;
      border-style: solid;
      border: 1px solid ${COLORS.blueGray50};
      box-sizing: border-box;
      border-radius: 4px;
      padding: 14px;
      padding-left: 42px;
      margin-top: 0.3em;
      width: 100%;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        font-size: 1.5em;
      }
    }
  }
`;
