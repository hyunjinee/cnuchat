import Media from 'styled-components';

import Breakpoints from 'constants/breakpoints';

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const { xlarge, large, medium, small, xSmall } = Breakpoints;

const media = {
  xSmall: mediaQuery(xSmall),
  small: mediaQuery(small),
  mobile: mediaQuery(medium),
  tablet: mediaQuery(large),
  desktop: mediaQuery(xlarge),
  custom: mediaQuery,
};

export default media;
