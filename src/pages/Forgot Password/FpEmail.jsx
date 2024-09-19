import { ErrorOutline } from "@mui/icons-material";
import {
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { toast, Toaster } from "sonner";
import { glassToastStyle } from "../../utils/toastConfig";

const FpEmail = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const forgetPassword = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}user/forgotPassword?email=${encodeURIComponent(email)}`
      );

      console.log(res.data);
      const successMsg = res.data.message;

      toast.success(successMsg, {
        style: glassToastStyle,
      });

      navigate("/otp");
    } catch (error) {
      toast.error("Email not sent", {
        style: glassToastStyle,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!hasError) {
      forgetPassword();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" />
      <Box
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.7)",
          borderRadius: "20px",
          padding: "16px",
          minWidth: "300px",
          maxWidth: "600px",
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
          Reset password
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            flexDirection: "row",
          }}
        >
          <ErrorOutline sx={{ fontSize: 25, color: "primary.main" }} />
          <Typography
            variant="body1"
            component="div"
            color={"#CFCFCF"}
            sx={{ fontWeight: "medium", mb: 0 }}
          >
            Please add email to reset your password
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ marginTop: 2, marginBottom: 1 }}
        >
          Enter your email
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
            value={email}
            onChange={handleChange}
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
                "Next"
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default FpEmail;
