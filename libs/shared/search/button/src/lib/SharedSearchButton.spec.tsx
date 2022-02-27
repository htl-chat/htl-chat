import { render } from '@testing-library/react';

import SharedSearchButton from './SharedSearchButton';

describe('SharedSearchButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSearchButton />);
    expect(baseElement).toBeTruthy();
  });
});
