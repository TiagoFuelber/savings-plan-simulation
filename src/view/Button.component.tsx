import styled from 'styled-components';
import { COLORS } from '../constants';

export function Button(): JSX.Element {
  return <StyledButton className="button">Confirm</StyledButton>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const StyledButton = styled.button`
  font-family: Work Sans;
  color: #fff;
  cursor: pointer;
  border-radius: 2em;
  border: none;
  outline: none;
  padding: 1.125em;
  background-color: ${COLORS.brandColorPrimary};
  font-size: 1em;
  margin: 0 auto;
  width: 100%;
  max-width: 20em;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: ${COLORS.brandColorSecondary};
  }
`;
