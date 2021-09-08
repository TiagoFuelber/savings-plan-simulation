import { App } from './App';
import { render, fireEvent } from '@testing-library/react';

describe('App', () => {
  describe('calculating the saving goal', () => {
    let component;
    let amountInput: Node | Window;
    let increaseButton: Node | Window;
    let decreaseButton: Node | Window;
    let monthlyAmount: HTMLElement;
    let monthlyDeposits: HTMLElement;

    beforeEach(() => {
      component = render(<App />);
      amountInput = component.getByTestId('amount-input');
      increaseButton = component.getByTestId('increase-date-input');
      decreaseButton = component.getByTestId('decrease-date-input');
      monthlyAmount = component.getByTestId('monthly-amount');
      monthlyDeposits = component.getByTestId('monthly-deposits');
    });

    it('returns the monthly amount when total amount input changes', () => {
      fireEvent.change(amountInput, { target: { value: '2300' } });
      expect(monthlyAmount.innerHTML).toBe('$2,300.00');
    });

    it('returns the monthly amount when date input increases', () => {
      fireEvent.change(amountInput, { target: { value: '9000' } });
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      expect(monthlyAmount.innerHTML).toBe('$3,000.00');
    });

    it('returns the monthly amount when date input decreases', () => {
      fireEvent.change(amountInput, { target: { value: '3000' } });
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(decreaseButton);
      expect(monthlyAmount.innerHTML).toBe('$1,000.00');
    });

    it('correctly displays the quantity of montly deposits', () => {
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      expect(monthlyDeposits.innerHTML).toBe('6 monthly deposits');
    });
  });
});
