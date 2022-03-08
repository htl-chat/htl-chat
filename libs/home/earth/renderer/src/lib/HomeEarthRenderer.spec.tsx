import { render } from '@testing-library/react';

import HomeEarthRenderer from './HomeEarthRenderer';

describe('HomeEarthRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeEarthRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
