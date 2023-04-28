import { styled } from './styled';
import { sprinkles } from './sprinkles.css'

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
        // opacity: .3,
      }
    }
  },
  defaultVariants: {
    foo: 'error'
  }
})

export const Box2 = styled('div', {
  padding: 'small',
  variants: {
    foo: {
      error: {
        background: 'error',
        color: 'none'
      },
    },
  },
  defaultVariants: {
    foo: 'error'
  }
})
