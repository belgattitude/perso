import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Avatar } from '../avatar';

describe('Avatar tests', () => {
  it('should set a correct src image', () => {
    render(<Avatar src={'/image/test.jpg'} alt={'cool'} />);
    expect(screen.getByAltText('cool')).toHaveAttribute(
      'src',
      'http://localhost/image/test.jpg'
    );
  });
});
