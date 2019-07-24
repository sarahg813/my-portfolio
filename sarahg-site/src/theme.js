import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#3f3f3f"
    }
  },
  typography: {
    fontFamily: '"Raleway", "Petit Formal Script", "Arima Madurai", sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600
  }
});

theme.typography.h1 = {
  fontSize: "3rem",
  "@media (min-width:600px)": {
    fontSize: "3rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem"
  }
};

theme.typography.h2 = {
  fontSize: "2.75rem",
  "@media (min-width:600px)": {
    fontSize: "3rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem"
  }
};

theme.typography.body1 = {
  fontSize: "1.1rem"
};

export default theme;
