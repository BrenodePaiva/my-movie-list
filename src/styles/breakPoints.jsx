const size = {
  Xsmall: '320px',
  small: '354px',
  smallPlus: '477px',
  medium: '500px',
  mediumPlus: '560px',
  big: '687px',
  Xbig: '950px'
}

const breakPoints = {
  Xsmall: `(max-width: ${size.Xsmall})`,
  small: `(max-width:${size.small})`,
  smallPlus: `(max-width: ${size.smallPlus})`,
  medium: `(max-width: ${size.medium})`,
  mediumPlus: `(max-width: ${size.mediumPlus})`,
  big: `(max-width: ${size.big})`,
  Xbig: `(max-width: ${size.Xbig})`
}

export default breakPoints
