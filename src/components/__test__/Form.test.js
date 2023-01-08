/* eslint-disable testing-library/no-render-in-setup */
 import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '../Form';

beforeEach(() => {
    render(<Form />);
})

test('Form component renders correctly', () => {
    const { container } = render(<Form />);

    expect(container).toBeInTheDocument();
});

test('Secret message is initially empty', () => {
    const input = screen.getByLabelText(/secret/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
});

test('Input Change works correctly', () => {
    const input = screen.getByLabelText(/secret/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    // Change on input
    userEvent.type(input, 'secret');

    expect(input).toHaveValue('secret');
});

test('Checkbox is initially not checked', () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
});

test('Checkbox works correctly', () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // Change on checkbox
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked(); 

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
})