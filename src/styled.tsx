import { addFunctionSerializer } from '@vanilla-extract/css/functionSerializer'
import { recipe } from '@vanilla-extract/recipes'
import { styledRuntime } from './styled.runtime'

export function styled(
  element: keyof JSX.IntrinsicElements,
  styles: any
) {
  const {
    variants,
    compoundVariants,
    defaultVariants,
    ...base
  } = styles

  const recipeFn = recipe({
    base,
    variants,
    compoundVariants,
    defaultVariants,
  })

  const args = [element, recipeFn]

  // First we call our runtime function at build time
  // @ts-ignore
  const Component = styledRuntime.apply(...args)

  // Then we tell vanilla-extract how to serialize the previous
  // function call by annotating its return value
  addFunctionSerializer(Component, {
    importPath: './styled.runtime',
    importName: 'styledRuntime',
    // @ts-ignore
    args
  })

  // Return the result of calling the runtime function
  return Component
}
