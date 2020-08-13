import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";

import useStyles from "./Styles";

const LayoutForCharacters = (props) => {
  const classes = useStyles();
  const { id, name, image } = props;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/character/${id}`}>
            <CardMedia
              image={!image ? "not loading" : image}
              className={classes.image}
            />
          </Link>

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
