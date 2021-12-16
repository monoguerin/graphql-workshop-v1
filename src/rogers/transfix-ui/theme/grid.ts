/**
 * Calculates percentage width based on number of columns
 * @example const colWidth = calcGrid(2) // '16.66%'
 */
export const calcGrid = (columns: number, gridColumns: number = 12): string => {
  return `${(100 / gridColumns) * columns}%`
}
