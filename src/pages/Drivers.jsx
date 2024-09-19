import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add, DownloadRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import CollapsibleTable from "../components/CollapsibleTable";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Drivers = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
          gap: 1,
          p: 1,
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search by ID..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              height: { xs: "auto", sm: "40px" },
              "& .MuiOutlinedInput-root": {
                height: "100%",
                padding: "0 14px",
                "& input": {
                  padding: "10px 0",
                  fontSize: { xs: "12px", sm: "14px" },
                },
                "& fieldset": {
                  borderColor: "none",
                },
                "&:hover fieldset": {
                  borderColor: "none",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            },
          }}
          sx={{
            borderRadius: "0px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiFormHelperText-root": {
              color: "white",
            },
            width: { xs: "100%", sm: "auto" },
          }}
        />
        <Button
          href={BASE_URL + "driver/download-csv"}
          variant="contained"
          color="primary"
          startIcon={<DownloadRounded />}
          sx={{
            borderRadius: "5px",
            backgroundColor: "#FFFFFF66",
            color: "white",
            "&:hover": {
              backgroundColor: "#000000A0",
            },
            mt: { xs: 1, sm: 0 },
            mb: { xs: 1, sm: 0 },
          }}
        >
          CSV
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={
            <Add sx={{ fontSize: { xs: 24, sm: 30 }, fontWeight: "bold" }} />
          }
          sx={{
            borderRadius: "5px",
            backgroundColor: "#FFFFFF66",
            color: "white",
            "&:hover": {
              backgroundColor: "#000000A0",
            },
            mt: { xs: 1, sm: 0 },
          }}
          onClick={() => navigate("/adddriver")}
        >
          Add Drivers
        </Button>
      </Box>
      <CollapsibleTable />
    </>
  );
};

export default Drivers;
