// eslint-disable-next-line simple-import-sort/sort
import { act, renderHook } from '@testing-library/react-hooks';
import useWindowSize from '../use-window-size';

describe('hooks/useWindowSize', () => {
  test('should useWindowSize Hooks runs successfully', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result).toBeTruthy();
  });

  it('should reads initial innerWidth and innerHeight values from window', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  test('should useWindowSize resize the screen', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      result.current.width = 432;
      result.current.height = 768;
    });

    expect(result.current.width).toBe(432);
    expect(result.current.height).toBe(768);
  });
});
