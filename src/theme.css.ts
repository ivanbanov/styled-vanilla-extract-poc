import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'gold',
    off: 'pink',
  },
  space: {
    small: '5px',
    medium: '15px',
    large: '25px'
  }
})

