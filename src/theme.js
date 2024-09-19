import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";

const glassmorphismStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  boxShadow: "0px 10px 14px 0px rgba(0, 0, 0, 0.35)",
  //   backdropFilter: "blur(6.5px)",
  //   WebkitBackdropFilter: "blur(6.5px)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.63)",
};

const commonBorderStyle = {
  border: "1px solid rgba(255, 255, 255, 0.7)",
};

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle,
          border: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle,
          border: "none",
          boxShadow: " 0px 10px 14px 0px rgba(0, 0, 0, 0.35)",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#FFFFFF33",
            "& fieldset": {
              borderColor: "white",
              ...commonBorderStyle,
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiFormHelperText-root": {
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF66",
          color: "white",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#000000A0",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle,
          borderRadius: "20px",
          // border: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          ...glassmorphismStyle,
          width: 240,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          border: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          border: "none",
        },
        head: {
          fontWeight: "bold",
          color: "#FFFFFF",
          backgroundColor: "transparent",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
          "&:hover": {
            backgroundColor: "white",
            "& .MuiTableCell-root": {
              color: "black",
            },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableRow-root:hover": {
            backgroundColor: "white",
            color: "black",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: "white",
        },
        selectIcon: {
          color: "white",
        },
        select: {
          color: "white",
        },
        menuItem: {
          backgroundColor: "#000000A0",
          "&:hover": {
            backgroundColor: "#FFFFFF20",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
