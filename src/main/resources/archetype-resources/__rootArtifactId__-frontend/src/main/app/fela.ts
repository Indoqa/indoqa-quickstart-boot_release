import extend from 'fela-plugin-extend'
import prefixer from 'fela-plugin-prefixer'
import fallbackValue from 'fela-plugin-fallback-value'
import unit from 'fela-plugin-unit'
import namedMediaQuery from 'fela-plugin-named-media-query'
import monolithic from 'fela-monolithic'

import {BREAKPOINT_DESKTOP, BREAKPOINT_TABLET} from './breakpoints'

const init = (renderer: any) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}

const namedMediaQueryPlugin = namedMediaQuery({
  desktop: `@media (min-width: ${BREAKPOINT_DESKTOP}px)`,
  tablet: `@media (min-width: ${BREAKPOINT_TABLET}px)`,
})

const config: any = {
  plugins: [
    extend(),
    prefixer(),
    fallbackValue(),
    unit(),
    namedMediaQueryPlugin,
  ],
  enhancers: [],
}


if (process.env.NODE_ENV !== 'production') {
  config.enhancers = [monolithic({prettySelectors: true})]
}

export default {
  init,
  config,
}
