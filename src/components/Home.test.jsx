import { render, screen } from '@testing-library/react';
import Home from './Home';
import { vi } from 'vitest'; 

test('renders Home component with welcome message', () => {
    global.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ message: 'Test Message' }),
        })
    );

  render(<Home />);
  
  const headingElement = screen.getByText(/Home/i);
  expect(headingElement).toBeInTheDocument();
  
  const welcomeMessage = screen.getByText(/Welcome to my portfolio!/i);
  expect(welcomeMessage).toBeInTheDocument();
  
  const description = screen.getByText(/This portfolio showcases my skills and projects./i);
  expect(description).toBeInTheDocument();
});
