import { render } from '@testing-library/react';

import SharedSearchUi from './SharedSearchUi';

describe('SharedSearchUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSearchUi />);
    expect(baseElement).toBeTruthy();
  });
});
