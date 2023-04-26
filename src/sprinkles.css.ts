import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const space = vars.space

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': '(min-width: 768px)' },
    desktop: { '@media': '(min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space
  },
  shorthands: {
    margin: [
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight'
    ],
    marginX: ['marginLeft', 'marginRight'],
  }
})

const colors = vars.colors

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors
  }
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
)


export type Sprinkles = Parameters<typeof sprinkles>[0]
