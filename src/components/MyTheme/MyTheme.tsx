import { isMobile } from "react-device-detect";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// import { isMobile } from "react-device-detect";
// import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

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
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#e6e6e6",
        contrastText: "#000000",
      },
      text: {
        primary: "#ffffff",
        secondary: "#000000",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // // Used by the functions below to shift a color's luminance by approximately
      // // two indexes within its tonal palette.
      // // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Exo',
      ].join(","),
      fontSize: 16,
    },
  })
);

const myTheme = {
  primaryColor: "",
  secondaryColor: "#ffffff",
  button: {
    height: isMobile ? 50 : "auto",
    fontWeight: 700,
    letterSpacing: 2,
    fontSize: "100%",
  },
  cards: {
    white: {
      backgroundColor: "#ffffff",
      color: "#000000",
      maxWidth: 1000,
      padding: isMobile ? "20px 0 10px" : "40px 0 20px",
    },
    lightGreen: {
      backgroundColor: "#d2e0c2",
      color: "#000000",
      maxWidth: 1000,
      padding: isMobile ? "20px 0 10px" : "40px 0 20px",
    },
    lightGrey: {
      backgroundColor: "#e6e6e6",
      color: "#000000",
      maxWidth: 1000,
      padding: isMobile ? "20px 0 10px" : "40px 0 20px",
    },
  },
  title: {
    fontFamily: "Exo",
  },
  titleText: {
    display: isMobile ? "block" : "flex",
    alignItems: "center",
    padding: 0,
  },
  titleIcon: {
    display: isMobile ? "flex" : "block",
    fontSize: isMobile ? "4rem" : "7rem",
    alignSelf: "flex-start",
    objectFit: "contain",
    borderRadius: 5,
    marginRight: isMobile ? "auto " : theme.spacing(2),
    marginLeft: isMobile ? "auto" : 0,
    marginBottom: isMobile ? theme.spacing(2) : 0,
  },
  appBar: {
    height: 56,
  },
};

export default myTheme;
