import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

function DrawerComponent() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                to="/"
                style={theme.components.MuiDrawer.styleOverrides.paper.link}
              >
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                to="/about"
                style={theme.components.MuiDrawer.styleOverrides.paper.link}
              >
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                to="/contact"
                style={theme.components.MuiDrawer.styleOverrides.paper.link}
              >
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                to="/faq"
                style={theme.components.MuiDrawer.styleOverrides.paper.link}
              >
                FAQ
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        style={theme.components.MuiDrawer.styleOverrides.paper.icon}
      >
        <Menu />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
