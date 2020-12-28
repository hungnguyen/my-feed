import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { getNews } from "../actions/newsAction";
import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

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

const Home = ({ news, getNews, filter }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;
  useEffect(() => {
    getNews(filter);
  }, [filter, getNews]);
  const slideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  };
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container>
          {news.data.articles &&
            news.data.articles.map((item, index) => (
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={news.isLoading}
        TransitionComponent={slideTransition}
        key=""
      >
        <Paper className={classes.paper}>
          <CircularProgress size={30} />
        </Paper>
      </Snackbar>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
  filter: state.filter,
});

export default connect(mapStateToProps, { getNews })(Home);
