import { darkTheme } from "../src/Components/ThemeProvider.jsx";

export const chipStyle = (params) => ({
    border: (() => {
      switch (params.value) {
        case "New":
          return `1px solid ${darkTheme.palette.warning.main}`;
        case "Open":
          return `1px solid ${darkTheme.palette.success.main}`;
        case "Assigned":
          return `1px solid ${darkTheme.palette.info.main}`;
        case "Fixed":
          return `1px solid ${darkTheme.palette.primaryDark[500]}`;
        case "Verified":
          return `1px solid ${darkTheme.palette.primary[400]}`;
        case "Closed":
          return `1px solid ${darkTheme.palette.error.main}`;
        default:
          return `1px solid ${darkTheme.palette.background.default}`;
      }
    })(),
    color: (() => {
        switch (params.value) {
          case "New":
            return `${darkTheme.palette.warning.main}`;
          case "Open":
            return `${darkTheme.palette.success.main}`;
          case "Assigned":
            return `${darkTheme.palette.info.main}`;
          case "Fixed":
            return `${darkTheme.palette.primaryDark[500]}`;
          case "Verified":
            return `${darkTheme.palette.primary[400]}`;
          case "Closed":
            return `${darkTheme.palette.error.main}`;
          default:
            return `${darkTheme.palette.background.default}`;
        }
      })(),
  });
