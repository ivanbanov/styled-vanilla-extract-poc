import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const space = vars.space
const colors = vars.colors

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': '(min-width: 768px)' },
    desktop: { '@media': '(min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    opacity: [0, .25, .5, .75, 1],
    color: colors,
    background: colors
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
  }
})


// const colorProperties = defineProperties({
//   conditions: {
//     lightMode: {},
//     darkMode: { '@media': '(prefers-color-scheme: dark)' }
//   },
//   defaultCondition: 'lightMode',
//   properties: {
//     color: colors,
//     background: colors
//   }
// })

export const sprinkles = createSprinkles(
  responsiveProperties,
  // colorProperties
)


export type Sprinkles = Parameters<typeof sprinkles>[0]
