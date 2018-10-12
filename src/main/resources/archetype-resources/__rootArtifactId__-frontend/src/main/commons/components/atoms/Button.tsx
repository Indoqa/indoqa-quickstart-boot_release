import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

const Button = ({theme}: Types.FelaProps): CSSProperties => ({
  color: theme.colors.text,
})

export default createComponentWithProxy<Types.WithChildren>(Button, 'button')

