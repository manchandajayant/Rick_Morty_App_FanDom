import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      marginLeft: "10%",
    },
  },
  description: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    textAlign: "justify",
    textJustify: "inter-word ",
    paddingBottom: "1%",
    color: "rgba(0,150,190)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "1%",
    color: "rgba(0,150,190)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    height: "300px",
    width: "100%",
  },
  typography: {
    display: "flex",
    justifyContent: "center",
    color: "rgba(0,150,190)",
    letterSpacing: "7px",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    color: "rgba(0,150,190)",
    textDecoration: "none",
  },

  typo: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "1%",
    color: "rgba(0,150,190)",
  },
  pages: {
    display: "flex",
    justifyContent: "center",
  },
  type: {
    display: "flex",
    justifyContent: "center",
    color: "rgba(0,150,190)",
    marginBottom: "2%",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
}));

export default useStyles;
