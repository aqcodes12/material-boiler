import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { toast, Toaster } from "sonner";
import { Box } from "@mui/system";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { ErrorOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { glassToastStyle } from "../../utils/toastConfig";

const FpnewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const userId = sessionStorage.getItem("forgotUserId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log(
        `${BASE_URL}user/updateNewPassword?password=${password}&id=${userId}`
      );
      const response = await axios.patch(
        `${BASE_URL}user/updateNewPassword?password=${password}&id=${userId}`
      );

      console.log("Password updated successfully:", response.data);
      toast.success("Password updated successfully", {
        style: glassToastStyle,
      });
      navigate("/");
    } catch (error) {
      setError("Failed to update password. Please try again.");
      console.log("Password update failed:", error);
      toast.error("Failed to update password. Please try again.", {
        style: glassToastStyle,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="top-right" />
        <Box
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "20px",
            padding: "16px",
            maxWidth: "350px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            align="left"
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Set new password
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              gap: 1,
              flexDirection: "row",
            }}
          >
            <ErrorOutline sx={{ fontSize: 25, color: "primary.main" }} />
            <Typography
              variant="body1"
              component="div"
              align="left"
              color={"#CFCFCF"}
              sx={{ fontWeight: "medium", mb: 0 }}
            >
              Set up new password!
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            {error && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography color="error">{error}</Typography>
              </Box>
            )}
            <TextField
              name="password"
              id="outlined-password"
              label="Password"
              type={showPassword ? "text" : "password"} // Toggle input type based on state
              fullWidth
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              name="confirmPassword"
              id="outlined-confirm-password"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"} // Toggle input type based on state
              fullWidth
              margin="normal"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "166px", position: "relative", height: "40px" }}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: "white",
                    }}
                  />
                ) : (
                  "Confirm"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default FpnewPassword;
