import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, id, episode } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link to={`/episode/${id}`}>{name}</Link>
        </Typography>
        <Typography>{episode}</Typography>
      </CardContent>
    </Card>
  );
}
