import { styled } from './styled';
import { sprinkles } from './sprinkles.css'

export const Box = styled('div', {
  padding: 'small',
  color: 'none',

  variants: {
    foo: {
      error: sprinkles({ background: 'error' }),
      success: sprinkles({ background: 'success' }),
      info: sprinkles({ background: 'info' }),
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

export const Box2 = styled('div', {
  padding: 'small',
  variants: {
    foo: {
      error: sprinkles({
        background: 'error',
        color: 'none'
      }),
    },
  },
  defaultVariants: {
    foo: 'error'
  }
})
