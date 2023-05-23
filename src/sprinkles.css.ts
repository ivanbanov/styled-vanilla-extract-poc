import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const {
  'border-widths': borderWidths,
  'colors': colors,
  'font-sizes': fontSizes,
  'radii': radii,
  'shadows': shadows,
  'sizes': sizes,
  'space-inset': spaceInset,
  'space-offset': spaceOffset,
  'z-indices': zIndices,
} = vars

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': '(min-width: 768px)' },
    desktop: { '@media': '(min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    background: colors,
    borderRadius: radii,
    borderWidth: borderWidths,
    boxShadow: shadows,
    color: colors,
    fontSize: fontSizes,
    height: sizes,
    margin: spaceOffset,
    marginBottom: spaceOffset,
    marginLeft: spaceOffset,
    marginRight: spaceOffset,
    marginTop: spaceOffset,
    opacity: [0, .25, .5, .75, 1],
    padding: spaceInset,
    paddingBottom: spaceInset,
    paddingLeft: spaceInset,
    paddingRight: spaceInset,
    paddingTop: spaceInset,
    width: sizes,
    zIndex: zIndices,
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingLeft', 'paddingRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginLeft', 'marginRight'],
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
