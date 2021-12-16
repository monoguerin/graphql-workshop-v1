import { createTheme } from "@material-ui/core/styles";
import { FormHelperTextProps } from "@material-ui/core";

import {
  greenlightHover,
  brandColors,
  errorHover,
  getBrandColor,
} from "./colors";
import { breakpoints } from "./breakpoints";
import { shadows } from "./shadows";
import { calcRem } from "./typography";

/**
 * Canonical theme for Transfix UI
 */
const theme = createTheme({
  /**
   * Copies the z index values from the scss master list. This is necessary for
   * Material UI components to be compatible with some of our old DPL components
   * (i.e. rendering a material UI Select within a legacy Modal).
   *
   * @see assets/scss/1_settings/_variables.scss
   * @note we're not currently using material UI tooltip, but when we do, we
   * must configure the tooltip value to be higher than both modal and
   * snackbar as it is in the defaults.
   */
  zIndex: {
    modal: 99999,
    snackbar: 100000,
  },
  /**
   * Material-UI uses a recommended 8px scaling factor by default.
   * @see https://material-ui.com/customization/spacing/
   */
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  /**
   * API that enables the use of breakpoints in a wide variety of contexts.
   * @see https://material-ui.com/customization/breakpoints/
   */
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
  /**
   * The palette enables you to modify the color of the components to suit your brand.
   * @see https://material-ui.com/customization/palette/
   */
  palette: {
    primary: {
      main: brandColors.greenlight,
      dark: brandColors.pineDark,
      contrastText: brandColors.shoulder,
    },
    secondary: {
      main: brandColors.white,
      dark: brandColors.pineLight,
      contrastText: brandColors.pine,
    },
    error: {
      main: brandColors.error,
    },
    type: "light",
    divider: brandColors.steelLight,
  },
  shadows,
  /**
   * Props key enables you to change the default value(s) of a component's props.
   * @see https://material-ui.com/customization/globals/
   */
  props: {
    MuiAppBar: {
      color: "default",
      elevation: 2,
    },
    MuiButtonBase: {
      disableRipple: true, // Disables the ripple effect globally for buttons
    },
    MuiDialogActions: {
      disableSpacing: false,
    },
    MuiAvatar: {
      variant: "circle",
    },
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      disableFocusRipple: false,
      variant: "contained",
      color: "secondary",
      size: "small",
    },
    MuiCheckbox: {
      disableRipple: false,
    },
    /**
     * This casted typed is necessary because there
     * seems to be an error/omission in MUI's types.
     *
     * All base MUI components can receive a 'component' prop
     * and in this case we need this to be rendered as a <span />
     */
    MuiFormHelperText: {
      component: "span",
    } as FormHelperTextProps,
    /**
     * @see https://material-ui.com/api/input-label/
     */
    MuiInputLabel: {
      shrink: true,
    },
    MuiFormControl: {
      fullWidth: true,
    },
    /**
     * @name Radio
     * @see https://material-ui.com/api/radio/
     */
    MuiRadio: {
      color: "primary",
      disableRipple: true,
      size: "small",
    },
    /**
     * @see https://material-ui.com/api/select/
     */
    MuiSelect: {
      fullWidth: true,
      variant: "outlined",
      displayEmpty: true,
    },
    /**
     * @name Switch
     * @see https://material-ui.com/api/switch/
     */
    MuiSwitch: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: "outlined",
      InputProps: {
        notched: false,
      },
      InputLabelProps: {
        shrink: true,
        disableAnimation: true,
      },
    },
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
      },
    },
  },
  transitions: {},
});

const rogersFontFamily = [
  '"Nunito Sans"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"avenir next"',
  "avenir",
  "helvetica",
  "helvetica neue",
  "ubuntu",
  "roboto",
  "noto",
  '"segoe ui"',
  "arial",
  "sans-serif",
].join(",");

/**
 * The theme provides a set of type sizes that work well together, and
 * also with the layout grid.
 * @see https://material-ui.com/customization/typography/
 */
theme.typography = {
  ...theme.typography,
  fontFamily: rogersFontFamily,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  /** Mobile */
  h1: {
    fontFamily: rogersFontFamily,
    fontWeight: 300,
    letterSpacing: 0,
    fontSize: calcRem(48), // 48px
    lineHeight: calcRem(65),
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      letterSpacing: calcRem(-0.5),
      fontWeight: 300,
      fontSize: calcRem(60),
      lineHeight: calcRem(82),
    },
  },
  /** Mobile */
  h2: {
    fontFamily: rogersFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    fontSize: calcRem(24), // 24px
    lineHeight: calcRem(33),
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(34), // 34px
      letterSpacing: calcRem(0.25),
      lineHeight: calcRem(46),
    },
  },
  /** Mobile */
  h3: {
    fontFamily: rogersFontFamily,
    fontWeight: 600,
    letterSpacing: calcRem(0.15),
    fontSize: calcRem(24),
    lineHeight: calcRem(33),
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(20), // 20px
      lineHeight: calcRem(27),
    },
  },
  h4: {
    fontFamily: rogersFontFamily,
    fontWeight: 400,
    fontSize: calcRem(20), // 20px
    color: brandColors.pavement,
  },
  h5: {
    fontFamily: rogersFontFamily,
  },
  h6: {
    fontFamily: rogersFontFamily,
  },
  /** Mobile */
  subtitle1: {
    fontFamily: rogersFontFamily,
    fontWeight: 600,
    letterSpacing: calcRem(0.15),
    fontSize: calcRem(18),
    lineHeight: calcRem(25),
    fontStyle: "normal",

    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(16),
      lineHeight: calcRem(22),
    },
  },
  /** Mobile */
  subtitle2: {
    fontFamily: rogersFontFamily,
    fontWeight: 600,
    fontSize: calcRem(16), // 16px
    lineHeight: calcRem(22),
    letterSpacing: calcRem(0.1),
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(14), // 14px
      lineHeight: calcRem(19),
    },
  },
  /** Mobile */
  body1: {
    fontFamily: rogersFontFamily,
    fontWeight: 400,
    fontSize: calcRem(18), // 18px,
    lineHeight: calcRem(25),
    letterSpacing: 0,
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(16),
      lineHeight: calcRem(22),
    },
  },
  /** Mobile */
  body2: {
    fontFamily: rogersFontFamily,
    fontWeight: 400,
    fontSize: calcRem(16),
    lineHeight: calcRem(22),
    letterSpacing: 0,
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(14),
      lineHeight: calcRem(19),
    },
  },
  /** Mobile */
  button: {
    fontFamily: rogersFontFamily,
    fontWeight: 700,
    fontSize: calcRem(16),
    lineHeight: calcRem(22),
    letterSpacing: 0,
    textTransform: "none",
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontSize: calcRem(14),
      lineHeight: calcRem(19),
    },
  },
  /** Mobile */
  caption: {
    fontFamily: rogersFontFamily,
    fontWeight: 400,
    fontSize: calcRem(14),
    letterSpacing: calcRem(0.25),
    lineHeight: calcRem(19),
    fontStyle: "normal",
    /** Desktop */
    [theme.breakpoints.up("md")]: {
      fontWeight: 600,
      fontSize: calcRem(12),
      lineHeight: calcRem(16),
      letterSpacing: calcRem(0.2),
    },
  },
  /** Mobile and Desktop */
  overline: {
    fontFamily: rogersFontFamily,
    fontWeight: 600,
    fontSize: calcRem(12),
    letterSpacing: calcRem(1.5),
    textTransform: "uppercase",
    fontStyle: "normal",
    lineHeight: calcRem(16),
  },
};

/**
 * The overrides key enables you to customize the appearance of all
 * instances of a component type.
 *
 * By declaring this separately, and by using a composed `baseTheme` object,
 * we can utilize breakpoint/spacing utility functions from `createMuiTheme` output
 *
 * @see https://material-ui.com/customization/globals/
 */
theme.overrides = {
  MuiAppBar: {
    colorDefault: {
      color: brandColors.shoulder,
      backgroundColor: brandColors.pavement,
    },
  },
  /**
   * @name Avatar
   * @see https://material-ui.com/api/avatar/
   */
  MuiAvatar: {
    root: {
      fontSize: calcRem(14),
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  /**
   * @name Button
   * @see https://material-ui.com/api/button/
   */
  MuiButton: {
    root: {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: "none",
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      fontSize: calcRem(16),
      lineHeight: calcRem(22),
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "transparent",
      transition: "none",

      "&:focus": {
        boxShadow: `0 0 0 3px rgb(0 165 121 / 50%)`,
        transition: "none",
      },

      "&:hover:focus": {
        boxShadow: `0 0 0 3px rgb(0 165 121 / 50%)`,
        transition: "none",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: calcRem(14),
        lineHeight: calcRem(19),
      },
    },
    sizeSmall: {
      fontSize: calcRem(14),
      lineHeight: calcRem(22),
      paddingTop: theme.spacing(0.5) + 1,
      paddingBottom: theme.spacing(0.5) + 1,
      paddingLeft: theme.spacing(1) + 2,
      paddingRight: theme.spacing(1) + 2,
    },
    /**
     * This is for 'default' or 'tertiary' color
     */
    contained: {
      backgroundColor: brandColors.white,
      color: brandColors.pine,
      borderColor: brandColors.white,

      "&:hover": {
        color: brandColors.pineDark,
        backgroundColor: brandColors.pineLight,
      },

      "&:focus": {
        color: brandColors.pineDark,
        backgroundColor: brandColors.pineLight,
        borderColor: "rgb(0 165 121 / 50%)",
      },
    },
    /**
     * This is for 'secondary' color
     */
    containedSecondary: {
      borderColor: brandColors.pine,
      "&:hover": {
        color: brandColors.pineDark,
        background: brandColors.pineLight,
      },
      "&:focus": {
        color: brandColors.pineDark,
        background: brandColors.pineLight,
        borderColor: "rgb(0 165 121 / 50%)",

        "&:hover": {
          color: brandColors.pineDark,
          background: brandColors.pineLight,
        },
      },
    },
    /**
     * This is for 'primary' color
     */
    containedPrimary: {
      borderColor: brandColors.greenlight,
      "&:active": {
        color: brandColors.white,
        backgroundColor: brandColors.pine,
      },
      "&:focus": {
        borderColor: brandColors.greenlight,
        backgroundColor: brandColors.greenlight,
        color: brandColors.white,

        "&:hover": {
          borderColor: brandColors.pineDark,
          backgroundColor: brandColors.pineDark,
        },
      },
      "&:hover": {
        borderColor: brandColors.pine,
        color: brandColors.white,
      },
    },
    /**
     * This is the same size as our "medium" size
     * until we need to customize this further
     */
    containedSizeLarge: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      fontSize: calcRem(16),
      lineHeight: calcRem(22),

      [theme.breakpoints.up("md")]: {
        fontSize: calcRem(14),
        lineHeight: calcRem(19),
      },
    },
  },
  MuiButtonBase: {
    root: {
      "&.Mui-disabled": {
        cursor: "no-drop",

        "&:hover": {
          cursor: "no-drop !important",
        },
      },
    },
  },
  MuiCard: {
    root: {
      borderRadius: theme.shape.borderRadius,
    },
  },
  MuiCheckbox: {
    root: {
      color: brandColors.white,
      "&:focus": {
        boxShadow: `0 0 0 2px ${brandColors.pineLight}`,
        borderRadius: "2px",
      },
      borderRadius: "50%",
    },
    indeterminate: {
      color: brandColors.greenlight,
    },
    colorPrimary: {
      "&$disabled": {
        color: brandColors.steelLight,
      },
      "&$checked": {
        "&:hover": {
          backgroundColor: brandColors.shoulder,
        },
      },
    },
  },
  MuiIconButton: {
    root: {
      borderRadius: theme.shape.borderRadius,
    },
    label: {
      color: "inherit",
    },
  },
  /**
   * @name DialogActions
   * @see https://material-ui.com/api/dialog-actions/
   */
  MuiDialogActions: {
    spacing: {
      padding: theme.spacing(3),
    },
  },
  /**
   * @name Fab
   * @see https://material-ui.com/api/fab/
   */
  MuiFab: {
    root: {
      position: "fixed",
      bottom: theme.spacing(3), // 24px
      right: theme.spacing(3), // 24px

      // Sets icon height/width default
      "& .icon": {
        height: "20px",
        width: "20px",
      },
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      "&:hover, &:focus, &:active": {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      },
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      color: theme.palette.primary.dark,

      "&:hover, &:focus, &:active": {
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
  MuiFormLabel: {
    root: {
      position: "relative",
      "&.Mui-error": { color: "inherit" },
      "&.Mui-focused": { color: "inherit" },
    },
    asterisk: {
      display: "none",
    },
  },
  /**
   * @name FormControlLabel
   * @see https://material-ui.com/api/form-control-label/
   */
  MuiFormControlLabel: {
    root: {
      display: "flex",
      "&$disabled": {
        cursor: "not-allowed",
      },
    },
    label: {
      flex: "1 1 auto",
      fontSize: calcRem(14),
      marginTop: "1px",

      ".MuiFormControlLabel-root &.MuiTypography-body1": {
        fontSize: calcRem(14),
      },
    },
  },
  MuiFormHelperText: {
    root: {
      color: brandColors.pavement,
      paddingLeft: 2,
      fontWeight: theme.typography.fontWeightRegular,
      letterSpacing: 0,

      [theme.breakpoints.up("md")]: {
        fontWeight: theme.typography.fontWeightRegular,
        letterSpacing: 0,
      },
    },
    contained: {
      marginLeft: 2,
      marginRight: 0,
    },
  },
  /**
   * @name InputAdornment
   * @see https://material-ui.com/api/input-adornment/
   */
  MuiInputAdornment: {
    root: {
      /**
       * Removes extra spacing on right, before input starts
       */
      marginRight: 0,
    },
    positionStart: {
      marginRight: 0,
    },
  },
  /**
   * @name InputBase
   * @see https://material-ui.com/api/input-base/
   */
  MuiInputBase: {
    root: {
      "&.Mui-disabled": {
        background: brandColors.shoulder,
      },
    },
    input: {
      "&.Mui-disabled::placeholder": {
        color: brandColors.concrete,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  /**
   * @name InputLabel
   * @see https://material-ui.com/api/input-label/
   */
  MuiInputLabel: {
    /**
     * Overrides transform and animations for 'shrink' state
     */
    shrink: {
      lineHeight: "1.6",
      fontSize: "0.75rem",
      transform: "none",
    },
    formControl: {
      fontWeight: theme.typography.fontWeightRegular,
      position: "relative",
      lineHeight: 1.6,
      color: "rgb(33,37,41)",
      margin: 0,
    },
    outlined: {
      "&$shrink": {
        transform: "translate(0px, 0px) scale(1)",
        fontSize: "0.8rem",
        margin: "0 0 1px",
      },
    },
  },
  /**
   * @name Link
   * @see https://material-ui.com/api/menu-item/
   */
  MuiLink: {
    root: {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  MuiListItem: {
    button: {
      transition: "none",

      "&:hover": {
        transition: "none",
      },

      "&.Mui-selected": {
        backgroundColor: getBrandColor("pineLight")
          .mix(getBrandColor("shoulder"), 0.5)
          .hex(),
        color: brandColors.pine,

        "&:hover": {
          backgroundColor: getBrandColor("pineLight")
            .mix(getBrandColor("shoulder"), 0.3)
            .hex(),
          color: getBrandColor("pineDark").hex(),
        },
      },
    },
  },
  MuiListSubheader: {
    root: {
      color: brandColors.concrete,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  /**
   * @name MenuItem
   * @see https://material-ui.com/api/menu-item/
   */
  MuiMenuItem: {
    root: {
      [theme.breakpoints.up("md")]: {
        fontSize: 14,
      },
    },
  },
  /**
   * @name OutlinedInput
   * @see https://material-ui.com/api/outlined-input/
   */
  MuiOutlinedInput: {
    notchedOutline: {
      borderColor: brandColors.steelDark,
    },
    root: {
      "& $notchedOutline": {
        borderWidth: 1,
      },
      /**
       * @summary :focused .MuiOutlinedInput-notchedOutline
       */
      "&:hover $notchedOutline": {
        borderWidth: 1,
        borderColor: theme.palette.primary.main,
      },
      /**
       * This syntax enables targeting child elements and two classes
       * @see https://stackoverflow.com/questions/58113579/how-do-i-override-hover-notchedoutline-for-outlinedinput
       * @summary .Mui-focused .MuiOutlinedInput-notchedOutline
       */
      "&$focused $notchedOutline": {
        borderWidth: 1,
        borderColor: brandColors.greenlight,
        boxShadow: `0 0 0 3px ${greenlightHover}`,
      },
      /**
       * Targets an input that is a descendent of focused/error
       * @summary .Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline
       */
      "&$focused&$error $notchedOutline": {
        boxShadow: `0 0 0 3px ${errorHover}`,
      },
    },
    input: {
      fontSize: calcRem(16),
      lineHeight: calcRem(25.1),

      // Overrides the styles found in _form.scss for input[type="text"] padding
      padding: `${theme.spacing(1) + 1} !important`,
      paddingLeft: `${theme.spacing(1.5)} !important`,
      paddingRight: `${theme.spacing(1.5)} !important`,
      boxShadow: "none",
      backgroundColor: brandColors.white,
      border: `1px solid ${brandColors.steelDark}`,
      color: brandColors.pavement,
      borderRadius: theme.shape.borderRadius,

      [theme.breakpoints.up("md")]: {
        fontSize: calcRem(14),
        lineHeight: calcRem(22),
      },
    },
    adornedStart: {
      paddingLeft: 10,
    },
    adornedEnd: {
      paddingRight: 10,
    },
    inputAdornedStart: {
      borderLeft: "none !important",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    inputAdornedEnd: {
      borderRight: "none !important",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  /**
   * @name Select
   * @see https://material-ui.com/api/select/
   */
  MuiSelect: {
    root: {
      /**
       * Override makes sure that some styles that bled over
       * from native input stylings don't interfere and make
       * the select div too wide
       */
      "& + .MuiSelect-nativeInput": {
        position: "absolute",
      },
      /**
       * Custom className to set the text as gray when empty
       * @note .MuiSelect-empty is not an official className
       */
      "& > .MuiSelect-empty": {
        color: brandColors.steelDark,
      },
      "&.Mui-disabled": {
        backgroundColor: brandColors.shoulder,
        cursor: "no-drop !important",
      },
    },
    icon: {
      color: theme.palette.primary.main,
      /**
       * Use parent FormControl status to determine
       * color of svg icon
       */
      ".Mui-error &": {
        color: theme.palette.error.main,
      },
    },
  },
  /**
   * @name Switch
   * @see https://material-ui.com/api/switch/
   */
  MuiSwitch: {
    root: {
      width: "28px",
      height: "16px",
      paddingLeft: "4px",
      paddingRight: 0,
      marginRight: "10px",
      overflow: "visible",
      left: "-2px",
    },
    switchBase: {
      color: "#ced4da",
      padding: 0,
      left: 2,
      "&:hover": {
        backgroundColor: "inherit",
      },
      "&$checked": {
        transform: "translateX(12px)",
        color: brandColors.greenlight,
        "& + $track": {
          borderColor: brandColors.greenlight,
          backgroundColor: brandColors.greenlight,
          opacity: 1,
        },
        "& $thumb": {
          color: brandColors.greenlight,
          borderColor: brandColors.greenlight,
        },
        "&$disabled + $track": {
          borderColor: brandColors.steelLight,
        },
        "&$disabled $thumb": {
          borderColor: brandColors.steelLight,
          backgroundColor: brandColors.steelLight,
        },
      },
      "&:focus-within:not(:disabled) + $track": {
        boxShadow: `0 0 0 2px ${brandColors.pineLight}`,
      },
      "&$disabled": {
        "& + $track": {
          borderColor: brandColors.steelLight,
          backgroundColor: brandColors.steelLight,
          opacity: 1,
        },
        "& $thumb": {
          borderColor: brandColors.steelLight,
        },
      },
    },
    colorSecondary: {
      "&$checked": {
        "& + $track": {
          backgroundColor: brandColors.greenlight,
        },
      },
    },
    thumb: {
      color: brandColors.shoulder,
      border: `2px solid ${brandColors.steelDark}`,
      height: "16px",
      width: "16px",
      boxShadow: "none",
      marginTop: "4px",
    },
    track: {
      backgroundColor: brandColors.steelDark,
      border: `1px solid ${brandColors.steelDark}`,
      borderRadius: "14px",
      width: "26px",
      opacity: 1,
    },
    input: {
      "&:focus:not(:disabled) + $thumb": {
        boxShadow: `0 0 0 2px ${brandColors.pineLight}`,
      },
    },
  },
  /**
   * @name Tab
   * @see https://material-ui.com/api/tab/
   */
  MuiTab: {
    root: {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: "none",
    },
  },
  MuiTypography: {
    colorPrimary: {
      color: brandColors.pine,
    },
  },
  /**
   * @name DatePicker
   * @see https://material-ui-pickers.dev/api/DatePicker
   */
  // @ts-ignore
  MuiPickersCalendarHeader: {
    iconButton: {
      borderRadius: theme.shape.borderRadius,
      color: brandColors.greenlight,
      "&.Mui-disabled, &:active, &:focus": {
        backgroundColor: "transparent !important",
        border: 0,
        boxShadow: "none",
      },
      "&:focus": {
        color: brandColors.greenlight,
      },
      "&:hover": {
        backgroundColor: `${brandColors.shoulder} !important`,
        boxShadow: "none",
        color: brandColors.pineDark,
      },
    },
    transitionContainer: {
      height: "35px",
      "& p": {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },
  /**
   * @name DatePicker
   * @see https://material-ui-pickers.dev/api/DatePicker
   */
  // @ts-ignore
  MuiPickersDay: {
    current: {
      color: brandColors.pavement,
      "& p": {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    day: {
      borderRadius: theme.shape.borderRadius,
      "&:focus, &:hover": {
        border: `1px solid ${brandColors.greenlight}`,
        boxShadow: "none",
      },
      "&:hover": {
        backgroundColor: "transparent !important",
      },
      "&:active": {
        backgroundColor: `${brandColors.greenlight} !important`,
        color: brandColors.white,
      },
    },
    daySelected: {
      borderRadius: theme.shape.borderRadius,
      color: brandColors.white,
      "&:active, &:focus, &:hover": {
        backgroundColor: `${brandColors.greenlight} !important`,
        color: brandColors.white,
      },
    },
  },
  MuiPickersBasePicker: {
    container: {
      padding: "10px",
    },
  },
};

export default theme;
