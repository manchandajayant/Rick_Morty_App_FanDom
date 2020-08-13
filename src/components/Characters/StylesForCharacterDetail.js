import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      marginLeft: "10%",
    },
  },
  description: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    textAlign: "justify",
    textJustify: "inter-word ",
    paddingBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  title: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "2%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  link: {
    color: "black",
    textDecoration: "inherit",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  image: {
    maxWidth: "500px",
    Height: "300px",
    paddingBottom: "2%",
    filter: "grayscale(20%)",
  },
  typo: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    paddingBottom: "2%",
  },
}));

export default useStyles;
