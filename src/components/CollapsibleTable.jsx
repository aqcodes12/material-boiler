import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import { Add, Remove } from "@mui/icons-material";
import { MinusIcon } from "@heroicons/react/16/solid";
import { BASE_URL } from "../constants";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{
          "& > *": {
            borderBottom: "unset",
            whiteSpace: "nowrap",
            textAlign: "center",
          },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Remove color="primary" sx={{ ":hover": { color: "black" } }} />
            ) : (
              <Add color="primary" sx={{ ":hover": { color: "black" } }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.username}
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.phone}</TableCell>
        <TableCell> N/A</TableCell>
        <TableCell>{row.vehicleType}</TableCell>
        <TableCell>{row.joiningDate}</TableCell>
        <TableCell>{row.visaType}</TableCell>
        <TableCell>{row.visaExpiryDate}</TableCell>
        <TableCell>
          <img
            src={row.profilePic}
            alt="Profile Pic"
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        </TableCell>
      </TableRow>
      <TableRow
        sx={{
          "&:hover": {
            backgroundColor: "inherit", // Ensures no background color change on hover
            "& .MuiTableCell-root": {
              color: "inherit", // Keeps the text color unchanged on hover
            },
          },
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Additional Details
              </Typography>
              <Table size="small" aria-label="additional details">
                <TableBody>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Address</TableCell>
                    <TableCell>{row.address}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nationality</TableCell>
                    <TableCell>{row.nationality}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Passport Number</TableCell>
                    <TableCell>{row.passportNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CPR Number</TableCell>
                    <TableCell>{row.cprNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Licence Type</TableCell>
                    <TableCell>{row.licenceType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Licence Number</TableCell>
                    <TableCell>{row.licenceNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Licence Expiry Date</TableCell>
                    <TableCell>{row.licenceExpiryDate}</TableCell>
                  </TableRow>
                  {/* Add more fields as needed */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    visaType: PropTypes.string.isRequired,
    visaExpiryDate: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    email: PropTypes.string,
    address: PropTypes.string,
    nationality: PropTypes.string,
    passportNumber: PropTypes.string,
    cprNumber: PropTypes.string,
    licenceType: PropTypes.string,
    licenceNumber: PropTypes.string,
    licenceExpiryDate: PropTypes.string,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}driver/getAll`);
        setDrivers(res.data.data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead sx={{ whiteSpace: "nowrap" }}>
          <TableRow sx={{ textAlign: "center" }}>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Driver ID</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Vehicle Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Visa Type</TableCell>
            <TableCell>Visa Expiry Date</TableCell>
            <TableCell>Profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drivers.map((driver) => (
            <Row key={driver.id} row={driver} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
