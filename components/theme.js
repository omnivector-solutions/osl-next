import { createMuiTheme } from "@material-ui/core/styles";

const oslBlue = "#0075B2";
const oslDarkBlue = "#06509B";
const oslLightBlue = "#7FB2F0";
const oslRed = "#E6191E";
const oslPink = "#F17398";
const oslOrange = "#FF8B00";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${oslBlue}`,
      darkBlue: `${oslDarkBlue}`,
      lightBlue: `${oslLightBlue}`,
      red: `${oslRed}`,
      pink: `${oslPink}`,
      orange: `${oslOrange}`,
    },
    primary: {
      main: `${oslBlue}`,
    },
    secondary: {
      main: `${oslOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Overpass",
      textTransform: "none",
      fontWeight: 900,
    },
    deploy: {
      fontFamily: "Overpass",
      textTransform: "none",
      fontWeight: 900,
      fontSize: "1 rem",
      color: "white",
    },
    header: {
      fontFamily: "Overpass",
      textTransform: "none",
      fontSize: "2.2em",
      fontWeight: 900,
      color: "white",
    },
    subheader: {
      fontFamily: "Overpass",
      textTransform: "none",
      fontSize: "1.2em",
      fontWeight: 600,
      color: "white",
    },
    body: {
      fontFamily: "Overpass",
      textTransform: "none",
      fontWeight: 200,
      color: "black",
    },
  },
});
