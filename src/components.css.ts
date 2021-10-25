import { styled } from './styled';

export const Box = styled('div', {
  padding: 5,
  fontSize: 16,
  color: 'white',

  variants: {
    foo: {
      error: { background: 'red' },
      success: { background: 'green' },
      info: { background: 'blue' },
    },
    ghost: {
      true: {
        border: 'none',
        opacity: .3,
      }
    }
  },
  
  defaultVariants: {
    foo: 'error'
  }
})
