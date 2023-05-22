import { styled } from './styled';

export const Box = styled('div', {
  padding: 'small',
  color: 'none',

  variants: {
    foo: {
      error: { background: 'error' },
      success: { background: 'success' },
      info: { background: 'info' },
    },
    ghost: {
      true: {
        opacity: .5,
      }
    }
  },
  defaultVariants: {
    foo: 'error'
  }
})
