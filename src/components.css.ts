import { styled } from './styled';

export const Box = styled('div', {
  padding: {
    mobile: 200,
    tablet: 300,
    desktop: 400,
  },
  color: 'white',

  variants: {
    foo: {
      success: {
        background: 'green-600',
        marginX: {
          desktop: 200,
        },
      },
      error: {
        background: 'background-danger-prominent',
        marginX: {
          desktop: 400,
        },
      },
      info: {
        background: 'background-primary-prominent',
        marginX: {
          desktop: 600,
        }
      },
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
