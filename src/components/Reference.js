import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

const openLink = (e, link) => {
  e.preventDefault()
  window.open(link, '_system', '');
}

const Reference = ({title, source, link}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className="referece-card">
        <Typography variant="h5" component="h2" className="title-reference">
            {title}
        </Typography>
        <Typography className={classes.pos + " source-reference"} color="textSecondary">
          {source}
        </Typography>

      </CardContent>
      <CardActions>
        <Button href={link} size="small" onClick={(e) => openLink(e, link)}>Más info</Button>
      </CardActions>
    </Card>
  );
};

export default Reference;
