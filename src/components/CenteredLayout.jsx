import { Box, Paper } from "@mui/material";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const CenteredLayout = ({ children }) => (
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
          flexDirection: "column",
          justifyContent: "start",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          alignItems: "center",
          borderRadius: "20px",
          // height: "90vh",
          // width: "90vw",

          height: { xs: "90vh", sm: "90vh", md: "90vh", lg: "90vh" },
          width: { xs: "90vw", sm: "90vw", md: "90vw", lg: "90vw" },
        }}
      >
        <Navbar />
        <Box p={4} sx={{ overflow: "auto", width: "100%" }}>
          <Outlet />
        </Box>
      </Paper>
      <Toaster position="top-center" />
    </Box>
  </ThemeProvider>
);

export default CenteredLayout;
