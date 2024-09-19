// src/utils/toastConfig.js
import { css } from "@emotion/react";

export const glassToastStyle = {
  background: "rgba(255, 255, 255, 0.1)", // Glass effect
  backdropFilter: "blur(10px)", // Blurred background
  border: "1px solid rgba(255, 255, 255, 0.18)", // Border for glass effect
  color: "#fff", // Text color
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
  borderRadius: "12px", // Rounded corners
  padding: "16px", // Padding for content
  fontWeight: "bold", // Bold text for emphasis
};

export const glassToastCss = css`
  .Toastify__toast {
    transition: transform 0.4s ease, opacity 0.4s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 40px rgba(0, 0, 0, 0.3); // Enhanced shadow on hover
    }
  }
`;
