import React from "react";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import InputBase from "@material-ui/core/InputBase";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//icon
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";

import {
  updateKeyword,
  updateSource,
  updateCategory,
  updateCountry,
} from "../actions/filterAction";
import { connect } from "react-redux";
import { getSources } from "../actions/sourceAction";
import countries from "../reducers/countries";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  white: {
    color: "#ffffff",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  hidden: {
    display: "none",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Layout = ({
  children,
  updateKeyword,
  getSources,
  sources,
  updateSource,
  updateCategory,
  updateCountry,
  categories,
  countries,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const [expanMenu, setExpandMenu] = React.useState(0);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateKeyword(keyword);
  };

  React.useEffect(() => {
    getSources();
  }, [getSources]);
  const handleExpand = (id) => {
    if (expanMenu !== id) setExpandMenu(id);
    else setExpandMenu(0);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
              <button type="submit" className={classes.hidden}>
                Ok
              </button>
            </form>
          </div>
          <div className={classes.grow} />
          <NavLink to="/" className={classes.white}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
          </NavLink>
          <NavLink to="/my-favorites" className={classes.white}>
            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <ListItem button onClick={() => handleExpand(1)}>
          <ListItemText primary="Sources" />
          {expanMenu === 1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expanMenu === 1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sources.data.sources &&
              sources.data.sources.map((item) => (
                <ListItem
                  className={classes.nested}
                  button
                  key={item.id}
                  onClick={() => updateSource(item.id)}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleExpand(2)}>
          <ListItemText primary="Categories" />
          {expanMenu === 2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expanMenu === 2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.data.map((item) => (
              <ListItem
                className={classes.nested}
                button
                key={item.id}
                onClick={() => updateCategory(item.id)}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleExpand(3)}>
          <ListItemText primary="Countries" />
          {expanMenu === 3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expanMenu === 3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {countries.data.map((item) => (
              <ListItem
                className={classes.nested}
                button
                key={item.code}
                onClick={() => updateCountry(item.code)}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sources: state.sources,
  categories: state.categories,
  countries: state.countries,
});

export default connect(mapStateToProps, {
  updateKeyword,
  getSources,
  updateSource,
  updateCategory,
  updateCountry,
})(Layout);
