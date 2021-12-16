import Color from 'color'

export const brandColors = {
  black: '#000',
  white: '#fff',
  transparent: 'rgba(0, 0, 0, 0)',
  transparentWhite: 'rgba(255, 255, 255, 0)',
  defaultPurple: '#800080',
  lightPurple: '#925EB1',
  greenlight: '#00A579',
  pavement: '#212529',
  concrete: '#444f56',
  shoulder: '#f1f3f5',
  centerline: '#ffc72c',
  pine: '#14845f',
  pineDark: '#004632',
  pineLight: '#b4ecdc',
  steelDark: '#868e96',
  steelLight: '#ced4da',
  activeBlue: '#2298fe',
  error: '#bd1a1d',
  errorLight: '#fce8e8',
  info: '#005cb2',
  infoLight: '#eef7ff',
  infoDark: '#003b72',
  infoMedium: '#cfe8ff',
  warning: '#d76106',
  warningLight: '#fff5de',
}

export type TBrandColor = keyof typeof brandColors

export const avatarColors = {
  orange: '#e5ae65',
  salmonRed: '#e38e76',
  roseRed: '#cc7c7d',
  bubblegumPink: '#d688a2',
  plumPurple: '#a46fad',
  lavenderPurple: '#8e7bb2',
  steelBlue: '#7d86b0',
  iceBlue: '#74aedb',
  spruceGreen: '#569c95',
  artichokeGreen: '#84ad86',
}

/**
 * Returns a Color object based on the brandColor
 */
export const getBrandColor = (colorName: TBrandColor): Color<string> => {
  return Color(brandColors[colorName])
}

export const greenlightHover = getBrandColor('greenlight').mix(getBrandColor('white'), 0.5).hex()
export const errorHover = getBrandColor('error').mix(getBrandColor('white'), 0.75).hex()
