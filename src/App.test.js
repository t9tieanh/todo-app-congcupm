import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders greeting text "Hello I am Pham Tien Anh - 22110282"', () => {
    render(<App />);

    const fullGreeting = screen.getByText((content, element) =>
      element?.textContent === 'Hello I am Pham Tien Anh - 22110282'
    );

    expect(fullGreeting).toBeInTheDocument();
  });

  test('renders role text "I am a Frontend Developer"', () => {
    render(<App />);

    const roleText = screen.getByText((content, element) =>
      element?.textContent === 'I am a Frontend Developer'
    );

    expect(roleText).toBeInTheDocument();
  });

  test('renders logo image with alt="logo"', () => {
    render(<App />);

    const logoImg = screen.getByAltText(/logo/i);
    expect(logoImg).toBeInTheDocument();
  });
});