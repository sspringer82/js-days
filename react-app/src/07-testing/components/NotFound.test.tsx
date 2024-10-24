import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders the correct headline', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent('Not Found');
  });
});
