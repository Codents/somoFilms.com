import { BREAKPOINTS, LANDSCAPE, PORTRAIT, MOBILE, DESKTOP } from '@/constants';

export const getOrientation = () => {
  if (window.innerWidth > window.innerHeight) {
    return LANDSCAPE;
  }
  return PORTRAIT;
};

export const responsive = () => {
  if ('screen' in window) {
    const orientation = getOrientation();
    if (
      (orientation === LANDSCAPE && window.innerHeight < BREAKPOINTS.MOBILE) ||
      (orientation === PORTRAIT && window.innerWidth < BREAKPOINTS.MOBILE)
    ) {
      return MOBILE;
    }
    return DESKTOP;
  }

  throw new Error('windows.screen is not compatible in this browser');
};
