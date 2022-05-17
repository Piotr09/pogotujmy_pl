import type {
  BreakpointsProps,
  FontsProps,
  MediaProps,
  PaletteProps,
} from './theme.types'

export interface Theme {
  palette: PaletteProps
  breakpoints: BreakpointsProps
  fonts: FontsProps
  media: MediaProps
}

const breakpoints = {
  maxWidth: 1172,
  desktop: 992,
  tablet: 768,
  mobile: 320,
}

const theme: Theme = {
  palette: {
    blue: '#b4d4ec',
    lightblue: '#b4d4ec5e',
    beige: '#cbbcb8',
    lightbeige: '#ded1ca52',
    sandy: '#f7f3ef',
    ecru: '#FCF1F1',
    lightPink: '#fdf3f4',
    pink: '#fce2e1',
    peach: '#FFDDCC',
    lightgray: '#ECECEC',
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    primary: `'Sanchez Regular', sans-serif`,
  },
  media: {
    smallMobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    mobile: `screen and (max-width: ${breakpoints.tablet}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    maxWidth: `screen and (min-width: ${breakpoints.maxWidth}px)`,
  },
  breakpoints,
}

export default theme
