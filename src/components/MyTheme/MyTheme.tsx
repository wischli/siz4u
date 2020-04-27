import { isMobile } from "react-device-detect";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const myTheme = {
  primaryColor: "",
  secondaryColor: "#ffffff",
  button: {
    height: isMobile ? 50 : "auto",
  },
};

export default myTheme;

// https://material-ui.com/customization/palette/

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      // text: {
      //   primary: "#fff",
      // },
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#95c23d", // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        // contrastText: "#fff",
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      // contrastThreshold: 3,
      // // Used by the functions below to shift a color's luminance by approximately
      // // two indexes within its tonal palette.
      // // E.g., shift from Red 500 to Red 300 or Red 700.
      // tonalOffset: 0.2,
    },
  })
);
