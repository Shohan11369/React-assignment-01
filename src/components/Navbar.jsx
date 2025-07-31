import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: "#002228",
          color: "white",
          borderBottom: "1px solid #00403f",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {/* Left: Logo */}
              <div className="flex-1">
                <img className="h-8 w-auto" src="/Logo.png" alt="logo" />
              </div>

              {/* Center: Menu Items */}
              <div className="flex justify-center items-center gap-6 flex-1 ">
                {menuItems.map((item) => (
                  <Button color="inherit" key={item}>
                    {item}
                  </Button>
                ))}
              </div>

              {/* Right: Sign Up Button */}
              <div className="flex flex-1 justify-end gap-2">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    fontStyle: "bold",
                    backgroundColor: "#0FF1F6",
                    borderRadius: "16px",
                    "&:hover": {
                      backgroundColor: "#F3D6D6",
                      color: "black",
                    },
                  }}
                >
                  Book a Demo
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#00403f",
                    borderRadius: "16px",
                    "&:hover": {
                      backgroundColor: "#5D76CB",
                      color: "white",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}

          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
