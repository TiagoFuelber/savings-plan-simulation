import styled from 'styled-components';
import buyAHouse from '../assets/icons/buy-a-house.svg';
import { BREAKPOINTS, COLORS } from '../constants';

export function Goal(): JSX.Element {
  return (
    <StyledGoal>
      <img src={buyAHouse} alt="" />
      <div className="goal">
        <div className="goal-name">Buy a house</div>
        <div className="goal-subtitle">Saving goal</div>
      </div>
    </StyledGoal>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledGoal = styled.div`
  display: flex;

  .goal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1em;

    &-name,
    &-subtitle {
      font-style: normal;
    }

    &-name {
      font-size: 1.25em;
      color: ${COLORS.blueGray900};
      font-family: Rubik;
      font-weight: 500;
      line-height: 120%;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        font-size: 1.5em;
      }
    }

    &-subtitle {
      font-family: Work Sans;
      color: ${COLORS.blueGray400};
      font-weight: normal;
      font-size: 0.875em;
      line-height: 150%;

      @media screen and (min-width: ${BREAKPOINTS.desktop}px) {
        font-size: 1em;
      }
    }
  }
`;
