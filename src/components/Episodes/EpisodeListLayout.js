import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, Typography } from "@material-ui/core";

import useStyles from "./Styles";

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, id, episode } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link className={classes.link} to={`/episode/${id}`}>
            {name}
          </Link>
        </Typography>
        <Typography className={classes.season}>{episode}</Typography>
      </CardContent>
    </Card>
  );
}
