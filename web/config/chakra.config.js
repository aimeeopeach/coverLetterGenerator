// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const tokens = {
  colors: {
    primary: {
      900: '#2C518C',
      800: '#2C518C',
      700: '#355EAC',
      600: '#355EAC',
      500: '#3A71DF',
      400: '#3A71DF',
      300: '#6EA0F9',
      200: '#6EA0F9',
      100: '#D7E5FF',
      50: '#D7E5FF',
    },
    secondary: {
      900: '#066858',
      800: '#066858',
      700: '#027D69',
      600: '#027D69',
      500: '#259C72',
      400: '#259C72',
      300: '#69C085',
      200: '#69C085',
      100: '#A8E2AB',
      50: '#A8E2AB',
    },
    error: {
      default: 'error.500',
      900: '#9D091E',
      800: '#9D091E',
      700: '#BF0711',
      600: '#BF0711',
      500: '#DE360B',
      400: '#DE360B',
      300: '#F66161',
      200: '#F66161',
      100: '#FDAAAA',
      50: '#FDAAAA',
    },
    background: {
      700: '#000000',
      600: '#161616',
      500: '#2C2C2C',
      400: '#393939',
      300: '#BDBDBD',
      200: '#E0E0E0',
      100: '#EEEEEE',
      50: '#FFFFFF',
    },
    overlay: {
      100: 'rgba(0, 0, 0, 0.55)',
      200: 'rgba(0, 0, 0, 0.32)',
    },
    diet: {
      green: '#799F2D',
      yellow: '#EAAF00',
      orange: '#FF774B',
    },
    information: '#F8CBFF',
    hightlight: '#FFF2B6',
    light: {
      100: 'rgba(0, 0, 0, 0.88)',
      200: 'rgba(0, 0, 0, 0.5)',
      300: 'rgba(0, 0, 0, 0.38)',
      400: 'rgba(0, 0, 0, 0.12)',
    },
    dark: {
      100: 'rgba(255, 255, 255, 0.88)',
      200: 'rgba(255, 255, 255, 0.5)',
      300: 'rgba(255, 255, 255, 0.38)',
      400: 'rgba(255, 255, 255, 0.12)',
    },
  },

  fontSizes: {
    xs: {
      caption: '12px',
      caption2: '11px',
    },
    sm: {
      footnote: '13px',
    },
    md: {
      body: '17px',
      callout: '16px',
      subhead: '15px',
    },
    lg: {
      h4: '17px',
      h3: '20px',
      h2: '22px',
      h1: '28px',
    },
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': { largeText: '34px' },
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
}

const semanticTokens = {
  colors: {
    'bg-default': {
      default: tokens.colors.dark[100],
      _dark: tokens.colors.light[100],
    },
    text: {
      default: tokens.colors.light[100],
      _dark: tokens.colors.dark[100],
    },
    link: {
      default: tokens.colors.primary[500],
      _dark: tokens.colors.primary[900],
    },
    action: {
      default: tokens.colors.light[100],
      _dark: tokens.colors.hightlight,
    },
    textarea: {
      default: tokens.colors.dark[100],
      _dark: tokens.colors.dark[400],
    },
  },
}

const globalStyle = {
  styles: {
    global: {
      body: {
        background: 'bg-default',
      },
    },
  },
}

const theme = extendTheme({ ...tokens, semanticTokens })

export default theme
