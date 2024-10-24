import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import List from './List';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  http.get('http://localhost:3001/users', (req, res, ctx) => {
    return HttpResponse.json([
      {
        id: '1',
        firstname: 'John',
        lastname: 'Doe',
      },
      {
        id: '2',
        firstname: 'Jane',
        lastname: 'Smith',
      },
    ]);
  })
);

describe('List Component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders List component correctly', async () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // Wait for the text "John Doe" to appear
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    // Check if the list items are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
