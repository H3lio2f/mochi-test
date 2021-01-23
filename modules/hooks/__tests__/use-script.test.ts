// eslint-disable-next-line simple-import-sort/sort
import { act } from '@testing-library/react-hooks';

describe('hooks/useScript', () => {
  test('should load script once when the component mounted', () => {
    const loadScript = jest.fn();
    act(() => {
      loadScript();
    });
    expect(loadScript).toHaveBeenCalledTimes(1);
  });
});
