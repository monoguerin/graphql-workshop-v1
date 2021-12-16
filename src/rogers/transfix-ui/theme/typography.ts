/**
 * Returns rem value for px input
 * @example const remVal = calcRem('14') // `0.875rem`
 */
export const calcRem = (pxValue: string | number, baseRemValue: number = 16): string => {
  const sanitizedVal = `${pxValue}`.replace('px', '')
  const remVal = parseFloat(sanitizedVal) / baseRemValue
  return `${remVal}rem`
}
