import { addFunctionSerializer } from '@vanilla-extract/css/functionSerializer'
import { recipe } from '@vanilla-extract/recipes' // stitces variants
import { styledRuntime } from './styled.runtime'
import { sprinkles } from './sprinkles.css' // media and design token access

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

  const variantsWithSprinkles = Object.entries(variants)
    .reduce((resultVariant, [variant, option]) => ({
      ...resultVariant,
      // @ts-expect-error
      [variant]: Object.entries(option).reduce((resultOption, [key, style]) => ({
        ...resultOption,
        // @ts-expect-error
        [key]: sprinkles(style)
      }), {})
    }), {})

  const recipeFn = recipe({
    base: sprinkles(base),
    variants: variantsWithSprinkles,
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
