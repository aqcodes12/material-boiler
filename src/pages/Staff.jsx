// import React, { useEffect, useState } from "react";
// import StickyHeadTable from "./table";
// import { BASE_URL } from "../constants";
// import axios from "axios";
// import {
//   Button,
//   Card,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   InputAdornment,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import {
//   Add,
//   Download,
//   DownloadDoneRounded,
//   DownloadRounded,
// } from "@mui/icons-material";
// import { Box, useMediaQuery } from "@mui/system";
// import { useTheme } from "@emotion/react";

// const Staff = () => {
//   const [staff, setStaff] = useState([]);
//   const [totalElements, setTotalElements] = useState(0);
//   const [isLoading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [openModal, setOpenModal] = useState(false);

//   const fetchAllStaff = async (page = 0, size = rowsPerPage) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `${BASE_URL}staff/getAll?page=${page}&size=${size}`
//       );
//       console.log(res.data);
//       setStaff(res.data.data.content);
//       setTotalElements(res.data.data.totalElements);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllStaff(currentPage, rowsPerPage);
//   }, [currentPage, rowsPerPage]);

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   const columns = [
//     { id: "id", label: "ID", minWidth: 70 },
//     { id: "username", label: "Name", minWidth: 150 },
//     { id: "designation", label: "Designation", minWidth: 150 },
//     { id: "employeeId", label: "Employee ID", minWidth: 120 },
//     { id: "phone", label: "Phone", minWidth: 120 },
//     { id: "email", label: "Email", minWidth: 150 },
//     { id: "joiningDate", label: "Joining Date", minWidth: 120 },
//   ];

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const createStaffApi = async (reqBody) => {
//     setLoading(true);
//     try {
//       const res = await axios.post(`${BASE_URL}staff/create`, reqBody);
//       console.log(res.data);
//       alert("Staff created Successfully !!");

//       onClose();
//     } catch (error) {
//       console.log(error);
//       alert("Error while creating staff");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     const email = formData.get("email");
//     const password = formData.get("password");
//     const firstName = formData.get("firstName");
//     const lastName = formData.get("lastName");
//     const designation = formData.get("designation");
//     const phone = formData.get("phone");
//     const empId = formData.get("empId");
//     console.log(
//       email,
//       password,
//       firstName,
//       lastName,
//       designation,
//       phone,
//       empId
//     );
//     createStaffApi({
//       email,
//       phone,
//       password,
//       firstName,
//       lastName,
//       employeeId: empId,
//       designation,
//     });
//   };

//   const [designation, setDesignation] = React.useState("");

//   const handleChange = (event) => {
//     setDesignation(event.target.value);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "end",
//           alignItems: "center",
//           gap: 2,
//           p: 1,
//         }}
//       >
//         <TextField
//           variant="outlined"
//           placeholder="Search..."
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),

//             sx: {
//               height: "40px",
//               "& .MuiOutlinedInput-root": {
//                 height: "100%",
//                 padding: "0 14px",
//                 "& input": {
//                   padding: "10px 0",
//                   fontSize: "14px",
//                 },
//                 "& fieldset": {
//                   borderColor: "none",
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "none",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "white",
//                 },
//               },
//             },
//           }}
//           sx={{
//             borderRadius: "0px",
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "10px",
//             },
//             "& .MuiInputLabel-root": {
//               color: "white",
//             },
//             "& .MuiFormHelperText-root": {
//               color: "white",
//             },
//           }}
//         />
//         <Button
//           href={BASE_URL + "staff/download-csv"}
//           variant="contained"
//           color="primary"
//           startIcon={<DownloadRounded />}
//           sx={{
//             borderRadius: "5px",
//             backgroundColor: "#FFFFFF66",
//             color: "white",
//             "&:hover": {
//               backgroundColor: "#000000A0",
//             },
//           }}
//         >
//           CSV
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<Add sx={{ fontSize: 30, fontWeight: "bold" }} />}
//           sx={{
//             borderRadius: "5px",
//             backgroundColor: "#FFFFFF66",
//             color: "white",
//             "&:hover": {
//               backgroundColor: "#000000A0",
//             },
//           }}
//           onClick={handleOpenModal}
//         >
//           Add Staff
//         </Button>
//       </Box>
//       <StickyHeadTable
//         columns={columns}
//         rows={staff}
//         count={totalElements}
//         rowsPerPage={rowsPerPage}
//         page={currentPage}
//         onPageChange={(event, newPage) => setCurrentPage(newPage)}
//         onRowsPerPageChange={(newRowsPerPage) => {
//           setRowsPerPage(newRowsPerPage);
//           setCurrentPage(0);
//         }}
//       />

//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         fullWidth
//         maxWidth="xs"
//       >
//         <DialogTitle>Add New Staff</DialogTitle>
//         <form onSubmit={handleSubmit}>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               label="Name"
//               fullWidth
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="dense"
//               label="E-mail"
//               fullWidth
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />

//             <FormControl
//               fullWidth
//               variant="outlined"
//               margin="dense"
//               sx={{ mb: 2 }}
//             >
//               <InputLabel>Designation</InputLabel>
//               <Select
//                 value={designation}
//                 onChange={handleChange}
//                 label="Designation"
//               >
//                 <MenuItem value="developer">Developer</MenuItem>
//                 <MenuItem value="designer">Designer</MenuItem>
//                 <MenuItem value="manager">Manager</MenuItem>
//               </Select>
//             </FormControl>
//             <TextField
//               margin="dense"
//               label="Contact No"
//               fullWidth
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="dense"
//               label="Employee ID"
//               fullWidth
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
//           </DialogContent>
//           <DialogActions
//             sx={{
//               display: "flex",
//               gap: 2,
//               flexDirection: isMobile ? "column" : "row",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: theme.spacing(2),
//             }}
//           >
//             <Button onClick={handleCloseModal}>Discard</Button>
//             <Button onClick={handleCloseModal} type="submit">
//               Save
//             </Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </>
//   );
// };

// export default Staff;

import React, { useEffect, useState } from "react";

import { BASE_URL } from "../constants";
import axios from "axios";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add, DownloadRounded } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/system";
import { useTheme } from "@emotion/react";
import StickyHeadTable from "../components/table";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);

  const [designation, setDesignation] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    empId: "",
  });

  const fetchAllStaff = async (page = 0, size = rowsPerPage) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}staff/getAll?page=${page}&size=${size}`
      );
      console.log(res.data);
      setStaff(res.data.data.content);
      setTotalElements(res.data.data.totalElements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { id: "id", label: "ID", minWidth: 70 },
    { id: "username", label: "Name", minWidth: 150 },
    { id: "designation", label: "Designation", minWidth: 150 },
    { id: "employeeId", label: "Employee ID", minWidth: 120 },
    { id: "phone", label: "Phone", minWidth: 120 },
    { id: "email", label: "Email", minWidth: 150 },
    { id: "joiningDate", label: "Joining Date", minWidth: 120 },
  ];

  useEffect(() => {
    fetchAllStaff(currentPage, rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const createStaffApi = async (reqBody) => {
    setLoading(true);
    try {
      console.log("Request Body:", reqBody);
      const res = await axios.post(`${BASE_URL}staff/create`, reqBody);
      console.log(res.data);
      alert("Staff created successfully!");

      handleCloseModal();
    } catch (error) {
      console.log(error);
      alert("Error while creating staff");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName, phone, empId } = formValues;

    createStaffApi({
      email,
      phone,
      password,
      firstName,
      lastName,
      employeeId: empId,
      designation,
    });
    console.log(formValues);
  };

  const handleChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          placeholder="Search..."
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
          href={BASE_URL + "staff/download-csv"}
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
          onClick={handleOpenModal}
        >
          Add Staff
        </Button>
      </Box>
      <StickyHeadTable
        columns={columns}
        rows={staff}
        count={totalElements}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={(event, newPage) => setCurrentPage(newPage)}
        onRowsPerPageChange={(newRowsPerPage) => {
          setRowsPerPage(newRowsPerPage);
          setCurrentPage(0);
        }}
      />

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Add New Staff</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="First Name"
              name="firstName"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Last Name"
              name="lastName"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />

            <TextField
              margin="dense"
              label="E-mail"
              name="email"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />

            <FormControl
              fullWidth
              variant="outlined"
              margin="dense"
              sx={{ mb: 2 }}
            >
              <InputLabel>Designation</InputLabel>
              <Select
                value={designation}
                onChange={handleChange}
                label="Designation"
              >
                <MenuItem value="MANAGER">Manager</MenuItem>
                <MenuItem value="SUPERVISOR">Supervisor</MenuItem>
                <MenuItem value="EMPLOYEE">Employee</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Contact No"
              name="phone"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Employee ID"
              name="empId"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing(2),
            }}
          >
            <Button onClick={handleCloseModal}>Discard</Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Staff;
