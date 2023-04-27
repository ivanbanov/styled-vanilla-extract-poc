import {
  createGlobalThemeContract,
  createGlobalTheme
} from '@vanilla-extract/css'


export const vars = createGlobalThemeContract(
  {
    colors: {
      error: null,
      success: null,
      info: null,
      warning: null,
      off: null,
      none: null,
    },
    space: {
      small: null,
      medium: null,
      large: null,
    }
  },
  // add global css vars without hashes
  (_value, path) => `${path.join('-')}`
);

createGlobalTheme(':root', vars, {
  colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'gold',
    off: 'pink',
    none: 'white'
  },
  space: {
    small: '5px',
    medium: '15px',
    large: '25px'
  }
})

