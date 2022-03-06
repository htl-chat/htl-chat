import { render } from '@testing-library/react';

import HomeMain from './HomeMain';

describe('HomeMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeMain />);
    expect(baseElement).toBeTruthy();
  });
});
