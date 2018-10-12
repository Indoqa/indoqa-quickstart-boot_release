import {BaseColors, BaseFonts, BaseFontSizes, BaseTheme, typeScale} from 'indoqa-react-fela'

interface FontSizes extends Partial<BaseFontSizes> {
  readonly extraBig: number | string,
}

interface Colors extends Partial<BaseColors> {
  readonly disabled: string,
  readonly bgLight: string,
}

interface Fonts extends Partial<BaseFonts> {
  readonly special: string,
}

interface Layout {
  readonly actionBarHeight: number,
  readonly menuWidth: number,
}

export declare interface Theme extends BaseTheme {
  readonly fontSizes: FontSizes,
  readonly colors: Colors,
  readonly fonts: Fonts,
  readonly layout: Layout,
}

const theme: Theme = {
  fontSizes: {
    extraBig: typeScale(3),
  },
  fonts: {
    text: 'sans-serif',
    special: 'serif',
  },
  colors: {
    text: '#121',
    disabled: '#727272',
    bgLight: '#d5d5d5',
  },
  spacing: {},
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
}

export default theme
