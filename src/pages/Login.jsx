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
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons for visibility toggle
import theme from "../theme";
import { Toaster, toast } from "sonner";
import { glassToastStyle } from "../utils/toastConfig";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (reqBody) => {
    try {
      const res = await axios.post(`${BASE_URL}authenticate`, reqBody);
      localStorage.setItem("token", res.data.data.jwtToken);
      console.log("token", res.data.data.jwtToken);
      console.log(res.data);
      localStorage.setItem("id", res.data.data.user.id);
      localStorage.setItem("role", res.data.data.user.role);

      toast.success("Login Successful", {
        style: glassToastStyle,
      });

      navigate("/home");
    } catch (error) {
      toast.error("Login Failed", {
        style: glassToastStyle,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    // Check if email or password is empty
    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required.");
      hasError = true;
    }

    if (hasError) {
      return; // Prevent form submission if there are errors
    }

    // Proceed with login if no errors
    handleLogin({
      userEmail: email,
      password,
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
              height: { xs: "90vh", sm: "80vh", md: "90vh", lg: "90vh" },
              width: { xs: "90vw", sm: "80vw", md: "90vw", lg: "90vw" },
            }}
          >
            <Card
              sx={{
                p: 4,
                minWidth: "300px",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                align="center"
                gutterBottom
                sx={{ fontWeight: "medium" }}
              >
                Login
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="email"
                  id="outlined-email"
                  label="E-mail"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!emailError}
                  helperText={emailError}
                />
                <TextField
                  name="password"
                  id="outlined-password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                >
                  <Link
                    onClick={() => navigate("/forgotpassword")}
                    variant="body2"
                    sx={{ fontSize: "0.875rem" }}
                  >
                    Forgot Password?
                  </Link>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: "166px" }}
                  >
                    Sign in
                  </Button>
                </Box>
              </form>
            </Card>
            <Toaster position="top-right" />
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
