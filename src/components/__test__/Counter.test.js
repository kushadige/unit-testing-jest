/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

beforeEach(() => {
    render(<Counter />)
});

test('Counter compontent renders correctly', () => {
    const { container } = render(<Counter />);

    expect(container).toBeInTheDocument();
});

test('Increment Button runs correctly', () => {
    const incrementBtn = screen.getByRole('button', {
        name: /increment/i,
    });
    const counter = screen.getByTestId('counter');

    expect(incrementBtn).toBeInTheDocument();
    expect(counter).toHaveTextContent(0);

    // Click on increment button
    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);

    expect(counter).toHaveTextContent(2);
});

test('Decrement Button runs correctly', () => {
    const decrementBtn = screen.getByRole('button', {
        name: /decrement/i,
    });
    const counter = screen.getByTestId('counter');

    expect(decrementBtn).toBeInTheDocument();
    expect(counter).toHaveTextContent(0);

    // Click on decrement button
    userEvent.click(decrementBtn);
    userEvent.click(decrementBtn);

    expect(counter).toHaveTextContent(-2);
});

test('Counter is initially 0', () => {
    const counter = screen.getByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(0);
});