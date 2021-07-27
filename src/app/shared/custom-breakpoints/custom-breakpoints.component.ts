import {BreakPoint, DEFAULT_BREAKPOINTS} from '@angular/flex-layout';

const CUSTOM = {
  xs: 'screen and (max-width: 575px)',
  sm: 'screen and (min-width: 576px) and (max-width: 767px)',
  md: 'screen and (min-width: 768px) and (max-width: 991px)',
  lg: 'screen and (min-width: 992px) and (max-width: 1199px)',
  xl: 'screen and (min-width: 1200px) and (max-width: 5000px)',
  'lt-sm': 'screen and (max-width: 575px)',
  'lt-md': 'screen and (max-width: 767px)',
  'lt-lg': 'screen and (max-width: 991px)',
  'lt-xl': 'screen and (max-width: 1199px)',
  'gt-xs': 'screen and (min-width: 576px)',
  'gt-sm': 'screen and (min-width: 768px)',
  'gt-md': 'screen and (min-width: 992px)',
  'gt-lg': 'screen and (min-width: 1200px)',
};

// tslint:disable-next-line: typedef
function updateMediaQuery(it: BreakPoint) {
  const mq = CUSTOM[it.alias];
  if (!!mq) {
    it.mediaQuery = mq;
  }
  return it;
}

// tslint:disable-next-line: typedef
export function CUSTOM_BREAKPOINT_FACTORY() {
  return DEFAULT_BREAKPOINTS.map(updateMediaQuery);
}

