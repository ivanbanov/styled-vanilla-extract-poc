import React from 'react'
import type { PropsWithChildren } from 'react'

export function styledRuntime(
  element: keyof JSX.IntrinsicElements,
  recipe: any
) {
  return function Component(
    { children, ...props }: PropsWithChildren<any>
  ) {
    return React.createElement(
      element,
      {
        ...props,
        className: recipe(props)
      },
      children
    )
  };
}
