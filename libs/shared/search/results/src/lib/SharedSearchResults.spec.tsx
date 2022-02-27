import { render } from '@testing-library/react';

import SharedSearchResults from './SharedSearchResults';

describe('SharedSearchResults', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSearchResults />);
    expect(baseElement).toBeTruthy();
  });
});
