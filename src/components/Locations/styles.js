import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pages: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    padding: "4%",
  },
  root: {
    minWidth: 375,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "2%",
    color: "rgba(0,150,190)",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "small",
    },
  },
  link: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
    color: "rgba(0,150,190)",
    textDecoration: "none",
  },
  dimension: {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
}));

export default useStyles;
