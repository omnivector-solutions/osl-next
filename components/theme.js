import { createMuiTheme } from "@material-ui/core/styles";

const oslBlue = "#0075b2";
const oslOrange = "#FF8B00";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${oslBlue}`,
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
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontWeight: 700,
    },
    deploy: {
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1 rem",
      color: "white",
    },
    header: {
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontSize: "2.2em",
      fontWeight: 600,
      color: "white",
    },
    subheader: {
      fontFamily: "Ubuntu",
      textTransform: "none",
      fontSize: "1.2em",
      fontWeight: 500,
      color: "white",
    },
  },
});
