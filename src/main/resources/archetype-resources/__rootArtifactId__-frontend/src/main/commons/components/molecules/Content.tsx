import {Box} from 'indoqa-react-fela'
import {BoxStyleProps} from 'indoqa-react-fela/dist/components/base'
import {createComponent} from 'react-fela'
import Types from 'Types'

const Content = ({theme}: Types.FelaProps): Types.CSSPropertiesWithBreakpointExtensions => ({
  display: 'table-cell',
  padding: theme.spacing.space2,
  width: '100%',
  desktop: {
    marginLeft: theme.layout.menuWidth,
  },
  tablet: {
    marginLeft: theme.layout.menuWidth,
  },
})

export default createComponent<Types.WithChildren, BoxStyleProps, HTMLDivElement>(Content, Box)
