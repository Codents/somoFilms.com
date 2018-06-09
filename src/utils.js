import {
  BREAKPOINTS,
  LANDSCAPE,
  PORTRAIT,
  SMALL,
  MEDIUM,
  LARGE,
  BIG,
  HUGE
} from '@/constants';

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
        window.innerWidth > BREAKPOINTS.SMALL &&
        window.innerWidth <= BREAKPOINTS.MEDIUM) ||
      (orientation === PORTRAIT &&
        window.innerHeight > BREAKPOINTS.SMALL &&
        window.innerHeight <= BREAKPOINTS.MEDIUM)
    ) {
      return MEDIUM;
    } else if (
      (orientation === LANDSCAPE &&
        window.innerWidth > BREAKPOINTS.MEDIUM &&
        window.innerWidth <= BREAKPOINTS.LARGE) ||
      (orientation === PORTRAIT &&
        window.innerHeight > BREAKPOINTS.MEDIUM &&
        window.innerHeight <= BREAKPOINTS.LARGE)
    ) {
      return LARGE;
    } else if (
      (orientation === LANDSCAPE &&
        window.innerWidth > BREAKPOINTS.LARGE &&
        window.innerWidth <= BREAKPOINTS.BIG) ||
      (orientation === PORTRAIT &&
        window.innerHeight > BREAKPOINTS.LARGE &&
        window.innerHeight <= BREAKPOINTS.BIG)
    ) {
      return BIG;
    }
    return HUGE;
  }

  throw new Error('windows.screen is not compatible in this browser');
};
