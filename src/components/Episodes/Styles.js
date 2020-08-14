import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pages: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    minWidth: 375,
  },

  title: {
    fontSize: 14,
  },

  episode: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "3%",
    color: "rgba(0,150,190)",
  },
  link: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    color: "rgba(0,150,190)",
    textDecoration: "none",
  },
  season: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
  },
  des: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
}));

export default useStyles;
