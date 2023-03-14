import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007FFF',
    },
    secondary: {
      main: '#F5F5DC',
    },
    background: {
      default: '#f3f6f9',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#172A4E',
    },
    secondary: {
      main: '#D15B00',
    },
    background: {
      default: '#001e3c',
      paper: '#001e3c'
    },
  },
});

const muiTheme = {
  "breakpoints": {
    "keys": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "values": {
      "xs": 0,
      "sm": 600,
      "md": 900,
      "lg": 1200,
      "xl": 1536
    },
    "unit": "px"
  },
  "direction": "ltr",
  "components": {
    "MuiCssBaseline": {
      "defaultProps": {
        "enableColorScheme": true
      }
    },
    "MuiButtonBase": {
      "defaultProps": {
        "disableTouchRipple": true
      }
    },
    "MuiButton": {
      "defaultProps": {
        "disableElevation": true
      },
      "styleOverrides": {},
      "variants": [
        {
          "props": {
            "variant": "code"
          }
        },
        {
          "props": {
            "variant": "link"
          }
        }
      ]
    },
    "MuiIconButton": {
      "variants": [
        {
          "props": {
            "color": "primary"
          }
        }
      ]
    },
    "MuiMenu": {
      "styleOverrides": {}
    },
    "MuiPopover": {
      "styleOverrides": {}
    },
    "MuiDivider": {
      "styleOverrides": {}
    },
    "MuiLink": {
      "defaultProps": {
        "underline": "none"
      },
      "styleOverrides": {
        "root": {
          "fontWeight": 700,
          "display": "inline-flex",
          "alignItems": "center",
          "&.MuiTypography-body1 > svg": {
            "marginTop": 2
          },
          "& svg:last-child": {
            "marginLeft": 2
          }
        }
      },
      "variants": [
        {
          "props": {
            "color": "primary"
          }
        }
      ]
    },
    "MuiChip": {
      "styleOverrides": {}
    },
    "MuiList": {
      "styleOverrides": {
        "root": {
          "padding": 0
        }
      }
    },
    "MuiListItemButton": {
      "styleOverrides": {}
    },
    "MuiSelect": {
      "defaultProps": {
        "IconComponent": {
          "type": {},
          "compare": null
        }
      },
      "styleOverrides": {
        "iconFilled": {
          "top": "calc(50% - .25em)"
        }
      }
    },
    "MuiTab": {
      "defaultProps": {
        "disableTouchRipple": true
      }
    },
    "MuiPaper": {
      "styleOverrides": {}
    },
    "MuiTableCell": {
      "styleOverrides": {}
    },
    "MuiToggleButtonGroup": {
      "styleOverrides": {}
    },
    "MuiToggleButton": {
      "styleOverrides": {}
    },
    "MuiTooltip": {
      "styleOverrides": {
        "tooltip": {
          "padding": "5px 9px"
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "root": {
          "width": 32,
          "height": 20,
          "padding": 0,
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              "transform": "translateX(11px)",
              "color": "#fff"
            }
          }
        },
        "switchBase": {
          "height": 20,
          "width": 20,
          "padding": 0,
          "color": "#fff",
          "&.Mui-checked + .MuiSwitch-track": {
            "opacity": 1
          }
        },
        "thumb": {
          "flexShrink": 0,
          "width": "14px",
          "height": "14px"
        }
      }
    },
    "MuiPaginationItem": {
      "styleOverrides": {}
    }
  },
  "palette": {
    "mode": "dark",
    "primary": {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "200": "#90caf9",
      "300": "#64b5f6",
      "400": "#42a5f5",
      "500": "#2196f3",
      "600": "#1e88e5",
      "700": "#1976d2",
      "800": "#1565c0",
      "900": "#0d47a1",
      "main": "#172A4E",
      "A100": "#82b1ff",
      "A200": "#448aff",
      "A400": "#2979ff",
      "A700": "#2962ff",
      "light": "#64b5f6",
      "dark": "#1976d2",
      "contrastText": "#fff"
    },
    "divider": "rgba(194, 224, 255, 0.08)",
    "primaryDark": {
      "50": "#E2EDF8",
      "100": "#CEE0F3",
      "200": "#91B9E3",
      "300": "#5090D3",
      "400": "#265D97",
      "500": "#1E4976",
      "600": "#173A5E",
      "700": "#132F4C",
      "800": "#001E3C",
      "900": "#0A1929",
      "main": "#5090D3"
    },
    "background": {
      "default": "#001E3C",
      "paper": "#0A1929"
    },
    "common": {
      "black": "#1D1D1D",
      "white": "#fff"
    },
    "text": {
      "primary": "#fff",
      "secondary": "#B2BAC2",
      "disabled": "rgba(255, 255, 255, 0.5)",
      "icon": "rgba(255, 255, 255, 0.5)"
    },
    "grey": {
      "50": "#F3F6F9",
      "100": "#E7EBF0",
      "200": "#E0E3E7",
      "300": "#CDD2D7",
      "400": "#B2BAC2",
      "500": "#A0AAB4",
      "600": "#6F7E8C",
      "700": "#3E5060",
      "800": "#2D3843",
      "900": "#1A2027",
      "main": "#132F4C",
      "contrastText": "#6F7E8C",
      "A100": "#f5f5f5",
      "A200": "#eeeeee",
      "A400": "#bdbdbd",
      "A700": "#616161"
    },
    "error": {
      "50": "#FFF0F1",
      "100": "#FFDBDE",
      "200": "#FFBDC2",
      "300": "#FF99A2",
      "400": "#FF7A86",
      "500": "#FF505F",
      "600": "#EB0014",
      "700": "#C70011",
      "800": "#94000D",
      "900": "#570007",
      "main": "#EB0014",
      "light": "#FF99A2",
      "dark": "#C70011",
      "contrastText": "#fff"
    },
    "success": {
      "50": "#E9FBF0",
      "100": "#C6F6D9",
      "200": "#9AEFBC",
      "300": "#6AE79C",
      "400": "#3EE07F",
      "500": "#21CC66",
      "600": "#1DB45A",
      "700": "#1AA251",
      "800": "#178D46",
      "900": "#0F5C2E",
      "main": "#1DB45A",
      "light": "#6AE79C",
      "dark": "#1AA251",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "warning": {
      "50": "#FFF9EB",
      "100": "#FFF3C1",
      "200": "#FFECA1",
      "300": "#FFDC48",
      "400": "#F4C000",
      "500": "#DEA500",
      "600": "#D18E00",
      "700": "#AB6800",
      "800": "#8C5800",
      "900": "#5A3600",
      "main": "#DEA500",
      "light": "#FFDC48",
      "dark": "#AB6800",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "secondary": {
      "50": "#fce4ec",
      "100": "#f8bbd0",
      "200": "#f48fb1",
      "300": "#f06292",
      "400": "#ec407a",
      "500": "#e91e63",
      "600": "#d81b60",
      "700": "#c2185b",
      "800": "#ad1457",
      "900": "#880e4f",
      "A100": "#ff80ab",
      "A200": "#ff4081",
      "A400": "#f50057",
      "A700": "#c51162",
      "main": "#D15B00",
      "light": "#ff4081",
      "dark": "#c51162",
      "contrastText": "#fff"
    },
    "info": {
      "main": "#29b6f6",
      "light": "#4fc3f7",
      "dark": "#0288d1",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "contrastThreshold": 3,
    "tonalOffset": 0.2,
    "action": {
      "active": "#fff",
      "hover": "rgba(255, 255, 255, 0.08)",
      "hoverOpacity": 0.08,
      "selected": "rgba(255, 255, 255, 0.16)",
      "selectedOpacity": 0.16,
      "disabled": "rgba(255, 255, 255, 0.3)",
      "disabledBackground": "rgba(255, 255, 255, 0.12)",
      "disabledOpacity": 0.38,
      "focus": "rgba(255, 255, 255, 0.12)",
      "focusOpacity": 0.12,
      "activatedOpacity": 0.24
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "typography": {
    "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
    "fontFamilyCode": "Menlo,Consolas,\"Droid Sans Mono\",monospace",
    "fontFamilyTagline": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
    "fontFamilySystem": "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
    "fontWeightSemiBold": 600,
    "fontWeightExtraBold": 800,
    "h1": {
      "fontFamily": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      "fontWeight": 800,
      "lineHeight": 1.1142857142857143,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "h2": {
      "fontFamily": "\"PlusJakartaSans-ExtraBold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      "fontWeight": 800,
      "lineHeight": 1.2222222222222223,
      "color": "#E7EBF0",
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "h3": {
      "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "2.25rem",
      "lineHeight": 1.2222222222222223,
      "letterSpacing": 0.2,
      "fontWeight": 400,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "h4": {
      "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "1.75rem",
      "lineHeight": 1.5,
      "letterSpacing": 0.2,
      "fontWeight": 400,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "h5": {
      "fontFamily": "\"PlusJakartaSans-Bold\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "1.5rem",
      "lineHeight": 1.5,
      "letterSpacing": 0.1,
      "color": "#66B2FF",
      "fontWeight": 400,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "h6": {
      "fontSize": "1.25rem",
      "lineHeight": 1.5,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontWeight": 500,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "button": {
      "textTransform": "initial",
      "fontWeight": 700,
      "letterSpacing": 0,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontSize": "0.875rem",
      "lineHeight": 1.75,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "subtitle1": {
      "fontSize": "1.125rem",
      "lineHeight": 1.3333333333333333,
      "letterSpacing": 0,
      "fontWeight": 500,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "body1": {
      "fontSize": "1rem",
      "lineHeight": 1.5,
      "letterSpacing": 0,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontWeight": 400,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "body2": {
      "fontSize": "0.875rem",
      "lineHeight": 1.5,
      "letterSpacing": 0,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontWeight": 400,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "caption": {
      "display": "inline-block",
      "fontSize": "0.75rem",
      "lineHeight": 1.5,
      "letterSpacing": 0,
      "fontWeight": 700,
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "allVariants": {
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "htmlFontSize": 16,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
    "subtitle2": {
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.57,
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    },
    "overline": {
      "fontFamily": "\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 2.66,
      "textTransform": "uppercase",
      "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
    }
  },
  "props": {
    "MuiBadge": {
      "overlap": "rectangular"
    }
  },
  "unstable_sxConfig": {
    "border": {
      "themeKey": "borders"
    },
    "borderTop": {
      "themeKey": "borders"
    },
    "borderRight": {
      "themeKey": "borders"
    },
    "borderBottom": {
      "themeKey": "borders"
    },
    "borderLeft": {
      "themeKey": "borders"
    },
    "borderColor": {
      "themeKey": "palette"
    },
    "borderTopColor": {
      "themeKey": "palette"
    },
    "borderRightColor": {
      "themeKey": "palette"
    },
    "borderBottomColor": {
      "themeKey": "palette"
    },
    "borderLeftColor": {
      "themeKey": "palette"
    },
    "borderRadius": {
      "themeKey": "shape.borderRadius"
    },
    "color": {
      "themeKey": "palette"
    },
    "bgcolor": {
      "themeKey": "palette",
      "cssProperty": "backgroundColor"
    },
    "backgroundColor": {
      "themeKey": "palette"
    },
    "p": {},
    "pt": {},
    "pr": {},
    "pb": {},
    "pl": {},
    "px": {},
    "py": {},
    "padding": {},
    "paddingTop": {},
    "paddingRight": {},
    "paddingBottom": {},
    "paddingLeft": {},
    "paddingX": {},
    "paddingY": {},
    "paddingInline": {},
    "paddingInlineStart": {},
    "paddingInlineEnd": {},
    "paddingBlock": {},
    "paddingBlockStart": {},
    "paddingBlockEnd": {},
    "m": {},
    "mt": {},
    "mr": {},
    "mb": {},
    "ml": {},
    "mx": {},
    "my": {},
    "margin": {},
    "marginTop": {},
    "marginRight": {},
    "marginBottom": {},
    "marginLeft": {},
    "marginX": {},
    "marginY": {},
    "marginInline": {},
    "marginInlineStart": {},
    "marginInlineEnd": {},
    "marginBlock": {},
    "marginBlockStart": {},
    "marginBlockEnd": {},
    "displayPrint": {
      "cssProperty": false
    },
    "display": {},
    "overflow": {},
    "textOverflow": {},
    "visibility": {},
    "whiteSpace": {},
    "flexBasis": {},
    "flexDirection": {},
    "flexWrap": {},
    "justifyContent": {},
    "alignItems": {},
    "alignContent": {},
    "order": {},
    "flex": {},
    "flexGrow": {},
    "flexShrink": {},
    "alignSelf": {},
    "justifyItems": {},
    "justifySelf": {},
    "gap": {},
    "rowGap": {},
    "columnGap": {},
    "gridColumn": {},
    "gridRow": {},
    "gridAutoFlow": {},
    "gridAutoColumns": {},
    "gridAutoRows": {},
    "gridTemplateColumns": {},
    "gridTemplateRows": {},
    "gridTemplateAreas": {},
    "gridArea": {},
    "position": {},
    "zIndex": {
      "themeKey": "zIndex"
    },
    "top": {},
    "right": {},
    "bottom": {},
    "left": {},
    "boxShadow": {
      "themeKey": "shadows"
    },
    "width": {},
    "maxWidth": {},
    "minWidth": {},
    "height": {},
    "maxHeight": {},
    "minHeight": {},
    "boxSizing": {},
    "fontFamily": {
      "themeKey": "typography"
    },
    "fontSize": {
      "themeKey": "typography"
    },
    "fontStyle": {
      "themeKey": "typography"
    },
    "fontWeight": {
      "themeKey": "typography"
    },
    "letterSpacing": {},
    "textTransform": {},
    "lineHeight": {},
    "textAlign": {},
    "typography": {
      "cssProperty": false,
      "themeKey": "typography"
    }
  },
  "mixins": {
    "toolbar": {
      "minHeight": 56,
      "@media (min-width:0px)": {
        "@media (orientation: landscape)": {
          "minHeight": 48
        }
      },
      "@media (min-width:600px)": {
        "minHeight": 64
      }
    }
  },
  "shadows": [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  "transitions": {
    "easing": {
      "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
      "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    "duration": {
      "shortest": 150,
      "shorter": 200,
      "short": 250,
      "standard": 300,
      "complex": 375,
      "enteringScreen": 225,
      "leavingScreen": 195
    }
  },
  "zIndex": {
    "mobileStepper": 1000,
    "fab": 1050,
    "speedDial": 1050,
    "appBar": 1100,
    "drawer": 1200,
    "modal": 1300,
    "snackbar": 1400,
    "tooltip": 1500
  }
}



// {
//   --muidocs-palette-primary-50: #F0F7FF;
//   --muidocs-palette-primary-100: #C2E0FF;
//   --muidocs-palette-primary-200: #99CCF3;
//   --muidocs-palette-primary-300: #66B2FF;
//   --muidocs-palette-primary-400: #3399FF;
//   --muidocs-palette-primary-500: #007FFF;
//   --muidocs-palette-primary-600: #0072E5;
//   --muidocs-palette-primary-700: #0059B2;
//   --muidocs-palette-primary-800: #004C99;
//   --muidocs-palette-primary-900: #003A75;
//   --muidocs-palette-primary-main: #3399FF;
//   --muidocs-palette-primary-light: #66B2FF;
//   --muidocs-palette-primary-dark: #0059B2;
//   --muidocs-palette-primary-contrastText: rgba(0, 0, 0, 0.87);
//   --muidocs-palette-primary-mainChannel: 51 153 255;
//   --muidocs-palette-primary-lightChannel: 102 178 255;
//   --muidocs-palette-primary-darkChannel: 0 89 178;
//   --muidocs-palette-primary-contrastTextChannel: 0 0 0;
//   --muidocs-palette-divider: rgba(194, 224, 255, 0.08);
//   --muidocs-palette-primaryDark-50: #E2EDF8;
//   --muidocs-palette-primaryDark-100: #CEE0F3;
//   --muidocs-palette-primaryDark-200: #91B9E3;
//   --muidocs-palette-primaryDark-300: #5090D3;
//   --muidocs-palette-primaryDark-400: #265D97;
//   --muidocs-palette-primaryDark-500: #1E4976;
//   --muidocs-palette-primaryDark-600: #173A5E;
//   --muidocs-palette-primaryDark-700: #132F4C;
//   --muidocs-palette-primaryDark-800: #001E3C;
//   --muidocs-palette-primaryDark-900: #0A1929;
//   --muidocs-palette-primaryDark-main: #5090D3;
//   --muidocs-palette-primaryDark-mainChannel: 80 144 211;
//   --muidocs-palette-background-default: #001E3C;
//   --muidocs-palette-background-paper: #0A1929;
//   --muidocs-palette-background-defaultChannel: 0 30 60;
//   --muidocs-palette-common-black: #1D1D1D;
//   --muidocs-palette-common-white: #fff;
//   --muidocs-palette-common-background: #000;
//   --muidocs-palette-common-onBackground: #fff;
//   --muidocs-palette-common-backgroundChannel: 0 0 0;
//   --muidocs-palette-common-onBackgroundChannel: 255 255 255;
//   --muidocs-palette-text-primary: #fff;
//   --muidocs-palette-text-secondary: #B2BAC2;
//   --muidocs-palette-text-disabled: rgba(255, 255, 255, 0.5);
//   --muidocs-palette-text-icon: rgba(255, 255, 255, 0.5);
//   --muidocs-palette-text-primaryChannel: 255 255 255;
//   --muidocs-palette-text-secondaryChannel: 178 186 194;
//   --muidocs-palette-grey-50: #F3F6F9;
//   --muidocs-palette-grey-100: #E7EBF0;
//   --muidocs-palette-grey-200: #E0E3E7;
//   --muidocs-palette-grey-300: #CDD2D7;
//   --muidocs-palette-grey-400: #B2BAC2;
//   --muidocs-palette-grey-500: #A0AAB4;
//   --muidocs-palette-grey-600: #6F7E8C;
//   --muidocs-palette-grey-700: #3E5060;
//   --muidocs-palette-grey-800: #2D3843;
//   --muidocs-palette-grey-900: #1A2027;
//   --muidocs-palette-grey-main: #132F4C;
//   --muidocs-palette-grey-contrastText: #6F7E8C;
//   --muidocs-palette-grey-A100: #f5f5f5;
//   --muidocs-palette-grey-A200: #eeeeee;
//   --muidocs-palette-grey-A400: #bdbdbd;
//   --muidocs-palette-grey-A700: #616161;
//   --muidocs-palette-grey-mainChannel: 19 47 76;
//   --muidocs-palette-grey-contrastTextChannel: 111 126 140;
//   --muidocs-palette-error-50: #FFF0F1;
//   --muidocs-palette-error-100: #FFDBDE;
//   --muidocs-palette-error-200: #FFBDC2;
//   --muidocs-palette-error-300: #FF99A2;
//   --muidocs-palette-error-400: #FF7A86;
//   --muidocs-palette-error-500: #FF505F;
//   --muidocs-palette-error-600: #EB0014;
//   --muidocs-palette-error-700: #C70011;
//   --muidocs-palette-error-800: #94000D;
//   --muidocs-palette-error-900: #570007;
//   --muidocs-palette-error-main: #EB0014;
//   --muidocs-palette-error-light: #FF99A2;
//   --muidocs-palette-error-dark: #C70011;
//   --muidocs-palette-error-contrastText: #fff;
//   --muidocs-palette-error-mainChannel: 235 0 20;
//   --muidocs-palette-error-lightChannel: 255 153 162;
//   --muidocs-palette-error-darkChannel: 199 0 17;
//   --muidocs-palette-error-contrastTextChannel: 255 255 255;
//   --muidocs-palette-success-50: #E9FBF0;
//   --muidocs-palette-success-100: #C6F6D9;
//   --muidocs-palette-success-200: #9AEFBC;
//   --muidocs-palette-success-300: #6AE79C;
//   --muidocs-palette-success-400: #3EE07F;
//   --muidocs-palette-success-500: #21CC66;
//   --muidocs-palette-success-600: #1DB45A;
//   --muidocs-palette-success-700: #1AA251;
//   --muidocs-palette-success-800: #178D46;
//   --muidocs-palette-success-900: #0F5C2E;
//   --muidocs-palette-success-main: #1DB45A;
//   --muidocs-palette-success-light: #6AE79C;
//   --muidocs-palette-success-dark: #1AA251;
//   --muidocs-palette-success-contrastText: rgba(0, 0, 0, 0.87);
//   --muidocs-palette-success-mainChannel: 29 180 90;
//   --muidocs-palette-success-lightChannel: 106 231 156;
//   --muidocs-palette-success-darkChannel: 26 162 81;
//   --muidocs-palette-success-contrastTextChannel: 0 0 0;
//   --muidocs-palette-warning-50: #FFF9EB;
//   --muidocs-palette-warning-100: #FFF3C1;
//   --muidocs-palette-warning-200: #FFECA1;
//   --muidocs-palette-warning-300: #FFDC48;
//   --muidocs-palette-warning-400: #F4C000;
//   --muidocs-palette-warning-500: #DEA500;
//   --muidocs-palette-warning-600: #D18E00;
//   --muidocs-palette-warning-700: #AB6800;
//   --muidocs-palette-warning-800: #8C5800;
//   --muidocs-palette-warning-900: #5A3600;
//   --muidocs-palette-warning-main: #DEA500;
//   --muidocs-palette-warning-light: #FFDC48;
//   --muidocs-palette-warning-dark: #AB6800;
//   --muidocs-palette-warning-contrastText: rgba(0, 0, 0, 0.87);
//   --muidocs-palette-warning-mainChannel: 222 165 0;
//   --muidocs-palette-warning-lightChannel: 255 220 72;
//   --muidocs-palette-warning-darkChannel: 171 104 0;
//   --muidocs-palette-warning-contrastTextChannel: 0 0 0;
//   --muidocs-palette-secondary-main: #ce93d8;
//   --muidocs-palette-secondary-light: #f3e5f5;
//   --muidocs-palette-secondary-dark: #ab47bc;
//   --muidocs-palette-secondary-contrastText: rgba(0, 0, 0, 0.87);
//   --muidocs-palette-secondary-mainChannel: 206 147 216;
//   --muidocs-palette-secondary-lightChannel: 243 229 245;
//   --muidocs-palette-secondary-darkChannel: 171 71 188;
//   --muidocs-palette-secondary-contrastTextChannel: 0 0 0;
//   --muidocs-palette-info-main: #29b6f6;
//   --muidocs-palette-info-light: #4fc3f7;
//   --muidocs-palette-info-dark: #0288d1;
//   --muidocs-palette-info-contrastText: rgba(0, 0, 0, 0.87);
//   --muidocs-palette-info-mainChannel: 41 182 246;
//   --muidocs-palette-info-lightChannel: 79 195 247;
//   --muidocs-palette-info-darkChannel: 2 136 209;
//   --muidocs-palette-info-contrastTextChannel: 0 0 0;
//   --muidocs-palette-action-active: #fff;
//   --muidocs-palette-action-hover: rgba(255, 255, 255, 0.08);
//   --muidocs-palette-action-hoverOpacity: 0.08;
//   --muidocs-palette-action-selected: rgba(255, 255, 255, 0.16);
//   --muidocs-palette-action-selectedOpacity: 0.16;
//   --muidocs-palette-action-disabled: rgba(255, 255, 255, 0.3);
//   --muidocs-palette-action-disabledBackground: rgba(255, 255, 255, 0.12);
//   --muidocs-palette-action-disabledOpacity: 0.38;
//   --muidocs-palette-action-focus: rgba(255, 255, 255, 0.12);
//   --muidocs-palette-action-focusOpacity: 0.12;
//   --muidocs-palette-action-activatedOpacity: 0.24;
//   --muidocs-palette-action-activeChannel: 255 255 255;
//   --muidocs-palette-action-selectedChannel: 255 255 255;
//   --muidocs-palette-Alert-errorColor: rgb(255, 214, 217);
//   --muidocs-palette-Alert-infoColor: rgb(184, 231, 251);
//   --muidocs-palette-Alert-successColor: rgb(195, 245, 215);
//   --muidocs-palette-Alert-warningColor: rgb(255, 241, 181);
//   --muidocs-palette-Alert-errorFilledBg: var(--muidocs-palette-error-dark, #C70011);
//   --muidocs-palette-Alert-infoFilledBg: var(--muidocs-palette-info-dark, #0288d1);
//   --muidocs-palette-Alert-successFilledBg: var(--muidocs-palette-success-dark, #1AA251);
//   --muidocs-palette-Alert-warningFilledBg: var(--muidocs-palette-warning-dark, #AB6800);
//   --muidocs-palette-Alert-errorFilledColor: #fff;
//   --muidocs-palette-Alert-infoFilledColor: #fff;
//   --muidocs-palette-Alert-successFilledColor: #fff;
//   --muidocs-palette-Alert-warningFilledColor: #fff;
//   --muidocs-palette-Alert-errorStandardBg: rgb(25, 15, 16);
//   --muidocs-palette-Alert-infoStandardBg: rgb(7, 19, 24);
//   --muidocs-palette-Alert-successStandardBg: rgb(10, 23, 15);
//   --muidocs-palette-Alert-warningStandardBg: rgb(25, 21, 7);
//   --muidocs-palette-Alert-errorIconColor: var(--muidocs-palette-error-main, #EB0014);
//   --muidocs-palette-Alert-infoIconColor: var(--muidocs-palette-info-main, #29b6f6);
//   --muidocs-palette-Alert-successIconColor: var(--muidocs-palette-success-main, #1DB45A);
//   --muidocs-palette-Alert-warningIconColor: var(--muidocs-palette-warning-main, #DEA500);
//   --muidocs-palette-AppBar-defaultBg: var(--muidocs-palette-grey-900, #1A2027);
//   --muidocs-palette-AppBar-darkBg: var(--muidocs-palette-background-paper, #0A1929);
//   --muidocs-palette-AppBar-darkColor: var(--muidocs-palette-text-primary, #fff);
//   --muidocs-palette-Avatar-defaultBg: var(--muidocs-palette-grey-600, #6F7E8C);
//   --muidocs-palette-Chip-defaultBorder: var(--muidocs-palette-grey-700, #3E5060);
//   --muidocs-palette-Chip-defaultAvatarColor: var(--muidocs-palette-grey-300, #CDD2D7);
//   --muidocs-palette-Chip-defaultIconColor: var(--muidocs-palette-grey-300, #CDD2D7);
//   --muidocs-palette-FilledInput-bg: rgba(255, 255, 255, 0.09);
//   --muidocs-palette-FilledInput-hoverBg: rgba(255, 255, 255, 0.13);
//   --muidocs-palette-FilledInput-disabledBg: rgba(255, 255, 255, 0.12);
//   --muidocs-palette-LinearProgress-primaryBg: rgb(25, 76, 127);
//   --muidocs-palette-LinearProgress-secondaryBg: rgb(103, 73, 108);
//   --muidocs-palette-LinearProgress-errorBg: rgb(117, 0, 10);
//   --muidocs-palette-LinearProgress-infoBg: rgb(20, 91, 123);
//   --muidocs-palette-LinearProgress-successBg: rgb(14, 90, 45);
//   --muidocs-palette-LinearProgress-warningBg: rgb(111, 82, 0);
//   --muidocs-palette-Skeleton-bg: rgba(var(--muidocs-palette-text-primaryChannel, undefined) / 0.13);
//   --muidocs-palette-Slider-primaryTrack: rgb(25, 76, 127);
//   --muidocs-palette-Slider-secondaryTrack: rgb(103, 73, 108);
//   --muidocs-palette-Slider-errorTrack: rgb(117, 0, 10);
//   --muidocs-palette-Slider-infoTrack: rgb(20, 91, 123);
//   --muidocs-palette-Slider-successTrack: rgb(14, 90, 45);
//   --muidocs-palette-Slider-warningTrack: rgb(111, 82, 0);
//   --muidocs-palette-SnackbarContent-bg: #001E3C;
//   --muidocs-palette-SnackbarContent-color: #fff;
//   --muidocs-palette-SpeedDialAction-fabHoverBg: #0A1929;
//   --muidocs-palette-StepConnector-border: var(--muidocs-palette-grey-600, #6F7E8C);
//   --muidocs-palette-StepContent-border: var(--muidocs-palette-grey-600, #6F7E8C);
//   --muidocs-palette-Switch-defaultColor: var(--muidocs-palette-grey-300, #CDD2D7);
//   --muidocs-palette-Switch-defaultDisabledColor: var(--muidocs-palette-grey-600, #6F7E8C);
//   --muidocs-palette-Switch-primaryDisabledColor: rgb(22, 68, 114);
//   --muidocs-palette-Switch-secondaryDisabledColor: rgb(92, 66, 97);
//   --muidocs-palette-Switch-errorDisabledColor: rgb(105, 0, 9);
//   --muidocs-palette-Switch-infoDisabledColor: rgb(18, 81, 110);
//   --muidocs-palette-Switch-successDisabledColor: rgb(13, 80, 40);
//   --muidocs-palette-Switch-warningDisabledColor: rgb(99, 74, 0);
//   --muidocs-palette-TableCell-border: rgba(62, 71, 81, 1);
//   --muidocs-palette-Tooltip-bg: rgba(62, 80, 96, 0.92);
//   --muidocs-palette-dividerChannel: 194 224 255;
//   --muidocs-opacity-inputPlaceholder: 0.5;
//   --muidocs-opacity-inputUnderline: 0.7;
//   --muidocs-opacity-switchTrackDisabled: 0.2;
//   --muidocs-opacity-switchTrack: 0.3;
//   --muidocs-overlays-1: linear-gradient(rgba(255 255 255 / 0.05), rgba(255 255 255 / 0.05));
//   --muidocs-overlays-2: linear-gradient(rgba(255 255 255 / 0.07), rgba(255 255 255 / 0.07));
//   --muidocs-overlays-3: linear-gradient(rgba(255 255 255 / 0.08), rgba(255 255 255 / 0.08));
//   --muidocs-overlays-4: linear-gradient(rgba(255 255 255 / 0.09), rgba(255 255 255 / 0.09));
//   --muidocs-overlays-5: linear-gradient(rgba(255 255 255 / 0.10), rgba(255 255 255 / 0.10));
//   --muidocs-overlays-6: linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11));
//   --muidocs-overlays-7: linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11));
//   --muidocs-overlays-8: linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12));
//   --muidocs-overlays-9: linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12));
//   --muidocs-overlays-10: linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13));
//   --muidocs-overlays-11: linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13));
//   --muidocs-overlays-12: linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14));
//   --muidocs-overlays-13: linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14));
//   --muidocs-overlays-14: linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14));
//   --muidocs-overlays-15: linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14));
//   --muidocs-overlays-16: linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15));
//   --muidocs-overlays-17: linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15));
//   --muidocs-overlays-18: linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15));
//   --muidocs-overlays-19: linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15));
//   --muidocs-overlays-20: linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16));
//   --muidocs-overlays-21: linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16));
//   --muidocs-overlays-22: linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16));
//   --muidocs-overlays-23: linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16));
//   --muidocs-overlays-24: linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16));
// }
// // :root, [data-mui-color-scheme="light"] {
// //   --muidocs-palette-primary-50: #F0F7FF;
// //   --muidocs-palette-primary-100: #C2E0FF;
// //   --muidocs-palette-primary-200: #99CCF3;
// //   --muidocs-palette-primary-300: #66B2FF;
// //   --muidocs-palette-primary-400: #3399FF;
// //   --muidocs-palette-primary-500: #007FFF;
// //   --muidocs-palette-primary-600: #0072E5;
// //   --muidocs-palette-primary-700: #0059B2;
// //   --muidocs-palette-primary-800: #004C99;
// //   --muidocs-palette-primary-900: #003A75;
// //   --muidocs-palette-primary-main: #007FFF;
// //   --muidocs-palette-primary-light: #66B2FF;
// //   --muidocs-palette-primary-dark: #0059B2;
// //   --muidocs-palette-primary-contrastText: #fff;
// //   --muidocs-palette-primary-mainChannel: 0 127 255;
// //   --muidocs-palette-primary-lightChannel: 102 178 255;
// //   --muidocs-palette-primary-darkChannel: 0 89 178;
// //   --muidocs-palette-primary-contrastTextChannel: 255 255 255;
// //   --muidocs-palette-divider: #E7EBF0;
// //   --muidocs-palette-primaryDark-50: #E2EDF8;
// //   --muidocs-palette-primaryDark-100: #CEE0F3;
// //   --muidocs-palette-primaryDark-200: #91B9E3;
// //   --muidocs-palette-primaryDark-300: #5090D3;
// //   --muidocs-palette-primaryDark-400: #265D97;
// //   --muidocs-palette-primaryDark-500: #1E4976;
// //   --muidocs-palette-primaryDark-600: #173A5E;
// //   --muidocs-palette-primaryDark-700: #132F4C;
// //   --muidocs-palette-primaryDark-800: #001E3C;
// //   --muidocs-palette-primaryDark-900: #0A1929;
// //   --muidocs-palette-primaryDark-main: #5090D3;
// //   --muidocs-palette-primaryDark-mainChannel: 80 144 211;
// //   --muidocs-palette-common-black: #1D1D1D;
// //   --muidocs-palette-common-white: #fff;
// //   --muidocs-palette-common-background: #fff;
// //   --muidocs-palette-common-onBackground: #000;
// //   --muidocs-palette-common-backgroundChannel: 255 255 255;
// //   --muidocs-palette-common-onBackgroundChannel: 0 0 0;
// //   --muidocs-palette-text-primary: #1A2027;
// //   --muidocs-palette-text-secondary: #3E5060;
// //   --muidocs-palette-text-disabled: rgba(0, 0, 0, 0.38);
// //   --muidocs-palette-text-primaryChannel: 26 32 39;
// //   --muidocs-palette-text-secondaryChannel: 62 80 96;
// //   --muidocs-palette-grey-50: #F3F6F9;
// //   --muidocs-palette-grey-100: #E7EBF0;
// //   --muidocs-palette-grey-200: #E0E3E7;
// //   --muidocs-palette-grey-300: #CDD2D7;
// //   --muidocs-palette-grey-400: #B2BAC2;
// //   --muidocs-palette-grey-500: #A0AAB4;
// //   --muidocs-palette-grey-600: #6F7E8C;
// //   --muidocs-palette-grey-700: #3E5060;
// //   --muidocs-palette-grey-800: #2D3843;
// //   --muidocs-palette-grey-900: #1A2027;
// //   --muidocs-palette-grey-main: #E7EBF0;
// //   --muidocs-palette-grey-contrastText: #6F7E8C;
// //   --muidocs-palette-grey-A100: #f5f5f5;
// //   --muidocs-palette-grey-A200: #eeeeee;
// //   --muidocs-palette-grey-A400: #bdbdbd;
// //   --muidocs-palette-grey-A700: #616161;
// //   --muidocs-palette-grey-mainChannel: 231 235 240;
// //   --muidocs-palette-grey-contrastTextChannel: 111 126 140;
// //   --muidocs-palette-error-50: #FFF0F1;
// //   --muidocs-palette-error-100: #FFDBDE;
// //   --muidocs-palette-error-200: #FFBDC2;
// //   --muidocs-palette-error-300: #FF99A2;
// //   --muidocs-palette-error-400: #FF7A86;
// //   --muidocs-palette-error-500: #FF505F;
// //   --muidocs-palette-error-600: #EB0014;
// //   --muidocs-palette-error-700: #C70011;
// //   --muidocs-palette-error-800: #94000D;
// //   --muidocs-palette-error-900: #570007;
// //   --muidocs-palette-error-main: #EB0014;
// //   --muidocs-palette-error-light: #FF99A2;
// //   --muidocs-palette-error-dark: #C70011;
// //   --muidocs-palette-error-contrastText: #fff;
// //   --muidocs-palette-error-mainChannel: 235 0 20;
// //   --muidocs-palette-error-lightChannel: 255 153 162;
// //   --muidocs-palette-error-darkChannel: 199 0 17;
// //   --muidocs-palette-error-contrastTextChannel: 255 255 255;
// //   --muidocs-palette-success-50: #E9FBF0;
// //   --muidocs-palette-success-100: #C6F6D9;
// //   --muidocs-palette-success-200: #9AEFBC;
// //   --muidocs-palette-success-300: #6AE79C;
// //   --muidocs-palette-success-400: #3EE07F;
// //   --muidocs-palette-success-500: #21CC66;
// //   --muidocs-palette-success-600: #1DB45A;
// //   --muidocs-palette-success-700: #1AA251;
// //   --muidocs-palette-success-800: #178D46;
// //   --muidocs-palette-success-900: #0F5C2E;
// //   --muidocs-palette-success-main: #1AA251;
// //   --muidocs-palette-success-light: #6AE79C;
// //   --muidocs-palette-success-dark: #1AA251;
// //   --muidocs-palette-success-contrastText: #fff;
// //   --muidocs-palette-success-mainChannel: 26 162 81;
// //   --muidocs-palette-success-lightChannel: 106 231 156;
// //   --muidocs-palette-success-darkChannel: 26 162 81;
// //   --muidocs-palette-success-contrastTextChannel: 255 255 255;
// //   --muidocs-palette-warning-50: #FFF9EB;
// //   --muidocs-palette-warning-100: #FFF3C1;
// //   --muidocs-palette-warning-200: #FFECA1;
// //   --muidocs-palette-warning-300: #FFDC48;
// //   --muidocs-palette-warning-400: #F4C000;
// //   --muidocs-palette-warning-500: #DEA500;
// //   --muidocs-palette-warning-600: #D18E00;
// //   --muidocs-palette-warning-700: #AB6800;
// //   --muidocs-palette-warning-800: #8C5800;
// //   --muidocs-palette-warning-900: #5A3600;
// //   --muidocs-palette-warning-main: #DEA500;
// //   --muidocs-palette-warning-light: #FFDC48;
// //   --muidocs-palette-warning-dark: #AB6800;
// //   --muidocs-palette-warning-contrastText: rgba(0, 0, 0, 0.87);
// //   --muidocs-palette-warning-mainChannel: 222 165 0;
// //   --muidocs-palette-warning-lightChannel: 255 220 72;
// //   --muidocs-palette-warning-darkChannel: 171 104 0;
// //   --muidocs-palette-warning-contrastTextChannel: 0 0 0;
// //   --muidocs-palette-secondary-main: #9c27b0;
// //   --muidocs-palette-secondary-light: #ba68c8;
// //   --muidocs-palette-secondary-dark: #7b1fa2;
// //   --muidocs-palette-secondary-contrastText: #fff;
// //   --muidocs-palette-secondary-mainChannel: 156 39 176;
// //   --muidocs-palette-secondary-lightChannel: 186 104 200;
// //   --muidocs-palette-secondary-darkChannel: 123 31 162;
// //   --muidocs-palette-secondary-contrastTextChannel: 255 255 255;
// //   --muidocs-palette-info-main: #0288d1;
// //   --muidocs-palette-info-light: #03a9f4;
// //   --muidocs-palette-info-dark: #01579b;
// //   --muidocs-palette-info-contrastText: #fff;
// //   --muidocs-palette-info-mainChannel: 2 136 209;
// //   --muidocs-palette-info-lightChannel: 3 169 244;
// //   --muidocs-palette-info-darkChannel: 1 87 155;
// //   --muidocs-palette-info-contrastTextChannel: 255 255 255;
// //   --muidocs-palette-background-paper: #fff;
// //   --muidocs-palette-background-default: #fff;
// //   --muidocs-palette-background-defaultChannel: 255 255 255;
// //   --muidocs-palette-action-active: rgba(0, 0, 0, 0.54);
// //   --muidocs-palette-action-hover: rgba(0, 0, 0, 0.04);
// //   --muidocs-palette-action-hoverOpacity: 0.04;
// //   --muidocs-palette-action-selected: rgba(0, 0, 0, 0.08);
// //   --muidocs-palette-action-selectedOpacity: 0.08;
// //   --muidocs-palette-action-disabled: rgba(0, 0, 0, 0.26);
// //   --muidocs-palette-action-disabledBackground: rgba(0, 0, 0, 0.12);
// //   --muidocs-palette-action-disabledOpacity: 0.38;
// //   --muidocs-palette-action-focus: rgba(0, 0, 0, 0.12);
// //   --muidocs-palette-action-focusOpacity: 0.12;
// //   --muidocs-palette-action-activatedOpacity: 0.12;
// //   --muidocs-palette-action-activeChannel: 0 0 0;
// //   --muidocs-palette-action-selectedChannel: 0 0 0;
// //   --muidocs-palette-Alert-errorColor: rgb(102, 61, 64);
// //   --muidocs-palette-Alert-infoColor: rgb(1, 67, 97);
// //   --muidocs-palette-Alert-successColor: rgb(42, 92, 62);
// //   --muidocs-palette-Alert-warningColor: rgb(102, 88, 28);
// //   --muidocs-palette-Alert-errorFilledBg: var(--muidocs-palette-error-main, #EB0014);
// //   --muidocs-palette-Alert-infoFilledBg: var(--muidocs-palette-info-main, #0288d1);
// //   --muidocs-palette-Alert-successFilledBg: var(--muidocs-palette-success-main, #1AA251);
// //   --muidocs-palette-Alert-warningFilledBg: var(--muidocs-palette-warning-main, #DEA500);
// //   --muidocs-palette-Alert-errorFilledColor: #fff;
// //   --muidocs-palette-Alert-infoFilledColor: #fff;
// //   --muidocs-palette-Alert-successFilledColor: #fff;
// //   --muidocs-palette-Alert-warningFilledColor: rgba(0, 0, 0, 0.87);
// //   --muidocs-palette-Alert-errorStandardBg: rgb(255, 244, 245);
// //   --muidocs-palette-Alert-infoStandardBg: rgb(229, 246, 253);
// //   --muidocs-palette-Alert-successStandardBg: rgb(240, 252, 245);
// //   --muidocs-palette-Alert-warningStandardBg: rgb(255, 251, 236);
// //   --muidocs-palette-Alert-errorIconColor: var(--muidocs-palette-error-main, #EB0014);
// //   --muidocs-palette-Alert-infoIconColor: var(--muidocs-palette-info-main, #0288d1);
// //   --muidocs-palette-Alert-successIconColor: var(--muidocs-palette-success-main, #1AA251);
// //   --muidocs-palette-Alert-warningIconColor: var(--muidocs-palette-warning-main, #DEA500);
// //   --muidocs-palette-AppBar-defaultBg: var(--muidocs-palette-grey-100, #E7EBF0);
// //   --muidocs-palette-Avatar-defaultBg: var(--muidocs-palette-grey-400, #B2BAC2);
// //   --muidocs-palette-Chip-defaultBorder: var(--muidocs-palette-grey-400, #B2BAC2);
// //   --muidocs-palette-Chip-defaultAvatarColor: var(--muidocs-palette-grey-700, #3E5060);
// //   --muidocs-palette-Chip-defaultIconColor: var(--muidocs-palette-grey-700, #3E5060);
// //   --muidocs-palette-FilledInput-bg: rgba(0, 0, 0, 0.06);
// //   --muidocs-palette-FilledInput-hoverBg: rgba(0, 0, 0, 0.09);
// //   --muidocs-palette-FilledInput-disabledBg: rgba(0, 0, 0, 0.12);
// //   --muidocs-palette-LinearProgress-primaryBg: rgb(158, 206, 255);
// //   --muidocs-palette-LinearProgress-secondaryBg: rgb(217, 172, 224);
// //   --muidocs-palette-LinearProgress-errorBg: rgb(247, 158, 165);
// //   --muidocs-palette-LinearProgress-infoBg: rgb(158, 209, 237);
// //   --muidocs-palette-LinearProgress-successBg: rgb(167, 219, 188);
// //   --muidocs-palette-LinearProgress-warningBg: rgb(242, 220, 158);
// //   --muidocs-palette-Skeleton-bg: rgba(var(--muidocs-palette-text-primaryChannel, undefined) / 0.11);
// //   --muidocs-palette-Slider-primaryTrack: rgb(158, 206, 255);
// //   --muidocs-palette-Slider-secondaryTrack: rgb(217, 172, 224);
// //   --muidocs-palette-Slider-errorTrack: rgb(247, 158, 165);
// //   --muidocs-palette-Slider-infoTrack: rgb(158, 209, 237);
// //   --muidocs-palette-Slider-successTrack: rgb(167, 219, 188);
// //   --muidocs-palette-Slider-warningTrack: rgb(242, 220, 158);
// //   --muidocs-palette-SnackbarContent-bg: #fff;
// //   --muidocs-palette-SnackbarContent-color: rgba(0, 0, 0, 0.87);
// //   --muidocs-palette-SpeedDialAction-fabHoverBg: #fff;
// //   --muidocs-palette-StepConnector-border: var(--muidocs-palette-grey-400, #B2BAC2);
// //   --muidocs-palette-StepContent-border: var(--muidocs-palette-grey-400, #B2BAC2);
// //   --muidocs-palette-Switch-defaultColor: var(--muidocs-palette-common-white, #fff);
// //   --muidocs-palette-Switch-defaultDisabledColor: var(--muidocs-palette-grey-100, #E7EBF0);
// //   --muidocs-palette-Switch-primaryDisabledColor: rgb(158, 206, 255);
// //   --muidocs-palette-Switch-secondaryDisabledColor: rgb(217, 172, 224);
// //   --muidocs-palette-Switch-errorDisabledColor: rgb(247, 158, 165);
// //   --muidocs-palette-Switch-infoDisabledColor: rgb(158, 209, 237);
// //   --muidocs-palette-Switch-successDisabledColor: rgb(167, 219, 188);
// //   --muidocs-palette-Switch-warningDisabledColor: rgb(242, 220, 158);
// //   --muidocs-palette-TableCell-border: rgba(252, 252, 253, 1);
// //   --muidocs-palette-Tooltip-bg: rgba(62, 80, 96, 0.92);
// //   --muidocs-palette-dividerChannel: 231 235 240;
// //   --muidocs-opacity-inputPlaceholder: 0.42;
// //   --muidocs-opacity-inputUnderline: 0.42;
// //   --muidocs-opacity-switchTrackDisabled: 0.12;
// //   --muidocs-opacity-switchTrack: 0.38;
// // }
// // :root {
// //   --muidocs-shape-borderRadius: 10px;
// //   --muidocs-shadows-0: none;
// //   --muidocs-shadows-1: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-2: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-3: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-4: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-5: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-6: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
// //   --muidocs-shadows-7: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
// //   --muidocs-shadows-8: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
// //   --muidocs-shadows-9: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
// //   --muidocs-shadows-10: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
// //   --muidocs-shadows-11: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
// //   --muidocs-shadows-12: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
// //   --muidocs-shadows-13: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
// //   --muidocs-shadows-14: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
// //   --muidocs-shadows-15: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
// //   --muidocs-shadows-16: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
// //   --muidocs-shadows-17: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
// //   --muidocs-shadows-18: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
// //   --muidocs-shadows-19: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
// //   --muidocs-shadows-20: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
// //   --muidocs-shadows-21: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
// //   --muidocs-shadows-22: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
// //   --muidocs-shadows-23: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
// //   --muidocs-shadows-24: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
// //   --muidocs-zIndex-mobileStepper: 1000;
// //   --muidocs-zIndex-fab: 1050;
// //   --muidocs-zIndex-speedDial: 1050;
// //   --muidocs-zIndex-appBar: 1100;
// //   --muidocs-zIndex-drawer: 1200;
// //   --muidocs-zIndex-modal: 1300;
// //   --muidocs-zIndex-snackbar: 1400;
// //   --muidocs-zIndex-tooltip: 1500;
// //   --muidocs-cssVarPrefix: muidocs;
// // }
// // html {
// //   -moz-osx-font-smoothing: grayscale;
// // }
