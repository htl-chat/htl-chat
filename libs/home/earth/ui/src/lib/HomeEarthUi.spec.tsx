import { render } from '@testing-library/react';

import HomeEarthUi from './HomeEarthUi';

describe('HomeEarthUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeEarthUi />);
    expect(baseElement).toBeTruthy();
  });
});
