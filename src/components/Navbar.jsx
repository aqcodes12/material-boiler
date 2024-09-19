import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useLocation } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { LogoutOutlined } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    position: "relative",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    position: "relative",
    padding: "0 0.5rem",
    transition: "color 0.3s ease, font-weight 0.3s ease",
    "&:hover": {
      color: "white",
    },
  },
  toolbar: {
    display: "flex",
  },
  logoutIcon: {
    cursor: "pointer",
    marginLeft: "auto",
  },
  activeLink: {
    color: "white",
    fontWeight: "bold",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -5,
      left: 0,
      height: 2,
      backgroundColor: "white",
      transform: "scaleX(1)",
      transition: "transform 0.3s ease, width 0.3s ease",
      borderRadius: "2px",
    },
  },
  inactiveLink: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -5,
      left: 0,
      height: 2,
      backgroundColor: "transparent",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease, width 0.3s ease",
      borderRadius: "2px",
    },
  },
  underline: {
    position: "absolute",
    bottom: -5,
    height: 2,
    backgroundColor: "white",
    transition: "left 0.3s ease, width 0.3s ease",
    borderRadius: "2px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeLinkElement = document.querySelector(
      `.${classes.link}[href="${activeLink}"]`
    );

    if (activeLinkElement) {
      setUnderlineStyle({
        left: activeLinkElement.offsetLeft,
        width: activeLinkElement.offsetWidth,
      });
    }
  }, [activeLink, classes.link]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ width: "95%", margin: "10px auto" }} position="static">
        <CssBaseline />
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <>
              <div className={classes.navlinks}>
                <Link
                  to="/home"
                  className={`${classes.link} ${
                    activeLink === "/home"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/home")}
                >
                  Home
                </Link>
                <Link
                  to="/staff"
                  className={`${classes.link} ${
                    activeLink === "/staff"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/staff")}
                >
                  Staff
                </Link>
                <Link
                  to="/drivers"
                  className={`${classes.link} ${
                    activeLink === "/drivers"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/drivers")}
                >
                  Drivers
                </Link>
                <Link
                  to="/faq"
                  className={`${classes.link} ${
                    activeLink === "/faq"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/faq")}
                >
                  Reports
                </Link>
                <Link
                  to="/fleet"
                  className={`${classes.link} ${
                    activeLink === "/fleet"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/fleet")}
                >
                  Fleet
                </Link>
                <Link
                  to="/profile"
                  className={`${classes.link} ${
                    activeLink === "/profile"
                      ? classes.activeLink
                      : classes.inactiveLink
                  }`}
                  onClick={() => handleLinkClick("/profile")}
                >
                  Profile
                </Link>
                <div className={classes.underline} style={underlineStyle} />
              </div>
              <IconButton
                edge="end"
                style={{ color: "#FFFFFF" }}
                className={classes.logoutIcon}
              >
                <LogoutOutlined />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
