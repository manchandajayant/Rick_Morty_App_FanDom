import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    height: "300px",
    width: "100%",
  },
  typography: {
    display: "flex",
    justifyContent: "center",

    letterSpacing: "7px",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
});

const LayoutForCharacters = (props) => {
  const classes = useStyles();
  const { id, name, image } = props;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            image={!image ? "not loading" : image}
            className={classes.image}
          />

          <CardContent>
            <Typography className={classes.typography}>
              <Link className={classes.link} to={`/character/${id}`}>
                {name}
              </Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default LayoutForCharacters;
