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

const FpOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    // Move to the next input field when a digit is entered
    if (e.target.value.length === 1 && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Handle backspace
    if (e.target.value === "" && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }

    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length < otp.length) {
      setOtpError("Please enter the complete OTP.");
      return;
    }

    setOtpError("");

    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}user/validateOTP?otp=${otpValue}`
      );
      console.log(res.data.data);
      sessionStorage.setItem("forgotUserId", res.data.data.id);
      toast.success("OTP verified", { style: glassToastStyle });
      navigate("/setpassword");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Invalid OTP";
      toast.error(errorMsg, { style: glassToastStyle });
      console.error("Error validating OTP:", error);
    } finally {
      setLoading(false);
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

          backgroundColor: "rgba(255, 255, 255, 0.1)",
          position: "relative",
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
            Please enter the OTP sent to your email
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ marginTop: 2, marginBottom: 1 }}
        >
          OTP
        </Typography>
        {otpError && (
          <Typography
            variant="body1"
            component="div"
            color="error.main"
            align="center"
            sx={{ mb: 2 }}
          >
            {otpError}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            {otp.map((value, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                inputProps={{ maxLength: 1 }}
                variant="outlined"
                sx={{
                  width: "50px",
                  textAlign: "center",
                  "& input": {
                    textAlign: "center",
                    fontSize: "1.5rem",
                    height: "56px",
                    padding: "0",
                  },
                }}
              />
            ))}
          </Box>

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

export default FpOtp;
