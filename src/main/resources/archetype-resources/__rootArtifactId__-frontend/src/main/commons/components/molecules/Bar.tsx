import {Flex, FlexProps} from 'indoqa-react-fela'
import {CSSProperties} from 'react'
import {createComponent} from 'react-fela'
import Types from 'Types'

const Bar = ({theme}: Types.FelaProps): CSSProperties => ({
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.bgLight,
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export default createComponent<Types.WithChildren, FlexProps, HTMLDivElement>(Bar, Flex)
