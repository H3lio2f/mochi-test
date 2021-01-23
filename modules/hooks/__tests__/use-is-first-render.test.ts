/* eslint-disable simple-import-sort/sort */
import { act, renderHook } from '@testing-library/react-hooks';
import useIsFirstRender from '../use-is-first-render';

describe('hooks/useIsFirstRender', () => {
  test('should ref initialized with true value and result with false value', () => {
    const { result, rerender } = renderHook(() => useIsFirstRender());
    expect(result.current).toBe(true);
    act(() => rerender());
    expect(result.current).toBe(false);
  });
});
