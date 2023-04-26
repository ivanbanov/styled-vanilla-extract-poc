import { styled } from './styled';
import { sprinkles } from './sprinkles.css'

export const Box = styled('div', {
  padding: 5,
  fontSize: 16,
  color: 'white',

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
