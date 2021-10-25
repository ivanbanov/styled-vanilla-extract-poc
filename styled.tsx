// @ts-nocheck

import { addFunctionSerializer } from '@vanilla-extract/css/functionSerializer'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { styledRuntime } from './styled.runtime'

export function styled(element, styles) {
  const { variants, compoundVariants, defaultVariants, ...base } = styles

  const recipeFn = recipe({
    base,
    variants,
    compoundVariants,
    defaultVariants,
  })

  const args = [element, recipeFn]

  // First we call our runtime function at build time
  const Component = styledRuntime(...args)

  // Then we tell vanilla-extract how to serialize the previous
  // function call by annotating its return value
  addFunctionSerializer(Component, {
    importPath: './styled.runtime',
    importName: 'styledRuntime',
    args
  })

  // Return the result of calling the runtime function
  return Component
}
