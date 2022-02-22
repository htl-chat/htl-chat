import { render } from '@testing-library/react';

import HomeHeaderUi from './HomeHeaderUi';

describe('HomeHeaderUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeHeaderUi />);
    expect(baseElement).toBeTruthy();
  });
});
