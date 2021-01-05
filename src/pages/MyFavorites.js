import React from "react";
import Layout from "../components/Layout";

import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    padding: theme.spacing(1),
  },
  paper: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

const MyFavorites = ({ favorites }) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container>
          {favorites.data &&
            favorites.data.map((item, index) => (
              <Grid
                container
                item
                xs={2}
                justify="center"
                className={classes.gridItem}
                key={index}
              >
                <NewsItem item={item} />
              </Grid>
            ))}
        </Grid>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(MyFavorites);
