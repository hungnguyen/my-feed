import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import OpenInNew from "@material-ui/icons/OpenInNew";

import Link from "@material-ui/core/Link";

import { connect } from "react-redux";
import { addFavorite } from "../actions/favoriteAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
  source: {
    marginLeft: "auto",
  },

  action: {
    marginTop: "auto",
  },
});

const NewsItem = ({ item, addFavorite }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={item.url} target="_blank" color="inherit" underline="none">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.urlToImage}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions disableSpacing className={classes.action}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => addFavorite(item)}
        >
          <FavoriteIcon />
        </IconButton>
        <Link href={item.url} target="_blank">
          <IconButton size="small" color="primary">
            <OpenInNew />
          </IconButton>
        </Link>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.source}
        >
          {item.source.name}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default connect(null, { addFavorite })(NewsItem);
