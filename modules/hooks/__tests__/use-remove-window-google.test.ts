// eslint-disable-next-line simple-import-sort/sort
import { renderHook } from '@testing-library/react-hooks';
import useRemoveWindowGoogle from '../use-remove-window-google';

describe('hooks/useRemoveWindowGoogle', () => {
  test('should useRemoveWindowGoogle Hooks runs successfully', () => {
    const { result } = renderHook(() => useRemoveWindowGoogle());
    expect(result).toBeTruthy();
  });
  it('should empty the object of google maps', () => {
    expect(window.google.maps).toEqual({});
  });
});
