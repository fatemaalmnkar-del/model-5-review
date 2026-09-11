import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders initial App', () => {
    render(<App />);

    expect(screen.getByTestId('message')).toHaveTextContent('');
  });

  it('test api', async () => {

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        message: 'server is running!'
      })
    });

    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByTestId('test-api'));

    await waitFor(() => {
      expect(screen.getByTestId('message'))
        .toHaveTextContent('server is running!');
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:5000/api/server'
    );
  });

  it('test api-2', async () => {

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        message: 'Hello from the server express!'
      })
    });

    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByTestId('test-api2'));

    await waitFor(() => {
      expect(screen.getByTestId('message'))
        .toHaveTextContent('Hello from the server express!');
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:5000/api/'
    );
  });

});