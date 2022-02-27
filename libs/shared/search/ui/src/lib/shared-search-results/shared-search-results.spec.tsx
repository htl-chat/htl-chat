import { render } from '@testing-library/react';

import SharedSearchResults from './shared-search-results';

describe('SharedSearchResults', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSearchResults />);
    expect(baseElement).toBeTruthy();
  });
});
