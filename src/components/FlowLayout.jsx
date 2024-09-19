import {
  Box,
  Button,
  Card,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../theme";

const FlowLayout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              alignItems: "center",
              borderRadius: "20px",
              height: { xs: "90vh", sm: "80vh", md: "90vh", lg: "90vh" },
              width: { xs: "90vw", sm: "80vw", md: "90vw", lg: "90vw" },
            }}
          >
            <Outlet />
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FlowLayout;
