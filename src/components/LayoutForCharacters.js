import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
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
        <CardMedia
          gutterBottom
          className={classes.media}
          image={image}
          alt="Card image cap"
        />

        <CardContent>
          <Typography className={classes.typography}>
            <Link className={classes.link} to={`/character/${id}`}>
              {name}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LayoutForCharacters;
