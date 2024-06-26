import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';
import * as TimeSpanHook from './../hooks/useTimeSpan';


// Mock the useTimeSpan hook before the test runs
jest.mock('./../hooks/useTimeSpan', () => ({
    useTimeSpan: () => ({ timeSpan: ['17:00', '18:30', '19:00', '20:00'] }),
  }));

describe('BookingForm Validation', () => {
  test('validates guests input is a positive number', async () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    // Assuming there's an input for guests and a submit button you interact with
    // Replace 'guestsInput' and 'submitButton' with the actual selectors
    const guestsInput = screen.getByLabelText(/guests/i); // Adjust based on your actual label
    await userEvent.type(guestsInput, '-1'); // Simulate entering an invalid number

    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);

    // Use findByText with a regex to account for flexible matching
    // The 'i' flag makes the match case-insensitive
    const errorMessage = await screen.findByText(/Number of guests is required/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test('validates time input is selected', async () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    // Assuming there's an input for guests and a submit button you interact with
    // Replace 'guestsInput' and 'submitButton' with the actual selectors
    const guestsInput = screen.getByLabelText(/time/i); // Adjust based on your actual label
    await userEvent.type(guestsInput, ''); // Simulate entering an invalid number

    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);

    // Use findByText with a regex to account for flexible matching
    // The 'i' flag makes the match case-insensitive
    const errorMessage = await screen.findByText(/Time is required/i);

    expect(errorMessage).toBeInTheDocument();
  });
});