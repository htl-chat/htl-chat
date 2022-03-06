import { render } from '@testing-library/react';

import HomeSection1Ui from './HomeSection1Ui';

describe('HomeSection1Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeSection1Ui />);
    expect(baseElement).toBeTruthy();
  });
});
