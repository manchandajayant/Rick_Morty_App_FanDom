import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    backgroundColor: "white",
  },
  brand: {
    height: "40px",
    width: "80px",
  },
  navlinks: {
    marginLeft: "3%",
    display: "flex",
  },
  links: {
    color: "black",
    textDecoration: "none",
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "3px",
  },
}));

export default useStyles;
