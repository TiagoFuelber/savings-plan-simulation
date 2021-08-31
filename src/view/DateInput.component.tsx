import styled from 'styled-components';
import { COLORS } from '../constants';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

export function DateInput(): JSX.Element {
  return (
    <StyledDateInput className="date-input">
      <label className="input-label" htmlFor="date">
        Reach goal by
        <div className="input-container">
          <div className="date-input">
            <button className="control decrease">
              <img src={arrowLeft} alt="" />
            </button>
            <div className="date">
              <div className="month">October</div>
              <div className="year">2021</div>
            </div>
            <button className="control increase">
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </label>
    </StyledDateInput>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledDateInput = styled.div`
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
      transform: translateY(-35%);
    }

    .date-input {
      color: ${COLORS.blueGray600};
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 1.5em;
      line-height: 120%;

      -webkit-appearance: none;
      outline: none;
      border-style: solid;
      border: 1px solid ${COLORS.blueGray50};
      box-sizing: border-box;
      border-radius: 4px;
      padding: 7px 14px;
      margin-top: 0.3em;
      width: 100%;

      display: flex;
      justify-content: space-between;

      .date {
        font-family: Work Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: ${COLORS.blueGray900};

        .month {
        }

        .year {
          color: ${COLORS.blueGray400};
          font-weight: normal;
        }
      }

      .control {
        background: none;
        border: none;
        -webkit-appearance: none;
        outline: none;
      }
    }
  }
`;
