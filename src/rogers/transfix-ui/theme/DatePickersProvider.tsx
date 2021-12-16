import React, { FC } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import MomentUtils from '@date-io/moment'

/**
 * This component takes a utils prop, and makes it available
 * down the React tree with React Context.
 *
 * @note This is required to use @material-ui/pickers components
 * @see https://material-ui-pickers.dev/getting-started/installation
 */
export const DatePickersProvider: FC = ({ children }) => {
  return <MuiPickersUtilsProvider utils={MomentUtils}>{children}</MuiPickersUtilsProvider>
}
