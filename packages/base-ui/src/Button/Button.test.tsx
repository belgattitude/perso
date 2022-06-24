import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button test', () => {
  it('should render', async () => {
    render(
      <Button variant="outlined" color="neutral" size="sm" role="button">
        Click me
      </Button>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
