import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Wrap App component with BrowserRouter to handle routes
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('App Component', () => {
  test('checks if the "Reserve a Table" button exists', async () => {
    renderWithRouter(<App />);

    const reserveButton = await screen.findByRole('button', { name: /Reserve a Table/i });
    expect(reserveButton).toBeInTheDocument();
  });
});