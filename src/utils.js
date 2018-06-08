import { BREAKPOINTS, LANDSCAPE, PORTRAIT, SMALL, MEDIUM, LARGE } from '@/constants';

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
      (orientation === LANDSCAPE && window.innerHeight <= BREAKPOINTS.SMALL) ||
      (orientation === PORTRAIT && window.innerWidth <= BREAKPOINTS.SMALL)
    ) {
      return SMALL;
    } else if (
      (orientation === LANDSCAPE &&
        window.innerHeight > BREAKPOINTS.SMALL &&
        window.innerHeight <= BREAKPOINTS.MEDIUM) ||
      (orientation === PORTRAIT &&
        window.innerWidth > BREAKPOINTS.SMALL &&
        window.innerWidth <= BREAKPOINTS.MEDIUM)
    ) {
      return MEDIUM;
    }
    return LARGE;
  }

  throw new Error('windows.screen is not compatible in this browser');
};
