import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Card, Divider, Grid, Typography } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../constants";
import { Add } from "@mui/icons-material";

const Home = () => {
  const [collectedYesterday, setCollectedYesterday] = useState("N/A");
  const [totalArrears, setTotalArrears] = useState("N/A");
  const [tamCollection, setTamCollection] = useState("N/A");
  const [yesterdayOrders, setYesterdayOrders] = useState("N/A");
  const [monthOrders, setMonthOrders] = useState("N/A");

  const [driverDetails, setDriverDetails] = useState({
    totalDrivers: "N/A",
    attendance: "N/A",
    riders: "N/A",
    drivers: "N/A",
    visaType: "N/A",
    flexi: "N/A",
  });

  const [collections, setCollections] = useState({
    OTHER: "N/A",
    TAM: "N/A",
    BENEFIT: "N/A",
    CASH: "N/A",
  });

  const fetchDriverDetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}driver/details`);
      setDriverDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCod = async () => {
    try {
      const res1 = await axios.get(`${BASE_URL}report/getArrearsForToday`);
      console.log(res1.data);
      setTotalArrears(res1.data.data);

      const res2 = await axios.get(
        `${BASE_URL}report/getCodAmountForYesterdayOrgReport`
      );
      console.log(res2.data);
      setCollectedYesterday(res2.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCollections = async () => {
    try {
      // const res = await axios.get(`${BASE_URL}report/total-by-type`);
      // console.log(res.data);
      // setCollections(res.data.data);

      const res1 = await axios.get(
        `${BASE_URL}tam/sumPayInAmountForCurrentMonth`
      );
      console.log(res1.data);
      setTamCollection(res1.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrderDetails = async () => {
    try {
      const res1 = await axios.get(`${BASE_URL}order/getOrderCount`);
      console.log(res1.data);
      setYesterdayOrders(res1.data.data);

      const d = new Date();

      const res2 = await axios.get(
        `${BASE_URL}order/getOrderCountByMonth?year=${d.getFullYear()}&month=${
          d.getMonth() + 1
        }`
      );
      console.log(res2.data);
      setMonthOrders(res2.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriverDetails();
    fetchOrderDetails();
    fetchCod();
    fetchCollections();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Driver Agent
            </Typography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                All Drivers
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.totalDrivers}
              </Typography>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                Attendance
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.attendance}
              </Typography>
            </Card>
            <Divider sx={{ width: "100%", borderColor: "white", marginY: 1 }} />
            <Typography variant="h6" mt={1} fontWeight="bold">
              Cars & Bikes
            </Typography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                Riders
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.riders}
              </Typography>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                Drivers
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.drivers}
              </Typography>
            </Card>
            <Divider sx={{ width: "100%", borderColor: "white", marginY: 1 }} />
            <Typography variant="h6" mt={1} fontWeight="bold">
              Visa Type
            </Typography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                Visa wheeler driver
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.visaType}
              </Typography>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "underline" }}
              >
                Flexi Visa
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {driverDetails?.flexi}
              </Typography>
            </Card>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box sx={{ display: "grid", gap: 1 }}>
            <Card sx={{ padding: 2 }}>
              <Card
                sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
              >
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Cash on Delivery
                </Typography>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                  marginTop: 1,
                  justifyContent: "space-between",
                }}
              >
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline", textAlign: "center" }}
                  >
                    Collected Yesterday
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {collectedYesterday}
                  </Typography>
                </Card>
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline" }}
                  >
                    Arrears
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {totalArrears}
                  </Typography>
                </Card>
              </Box>
            </Card>
            <Card sx={{ padding: 2 }}>
              <Card
                sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
              >
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Collection
                </Typography>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                  marginTop: 1,
                  justifyContent: "space-between",
                }}
              >
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline" }}
                  >
                    TAM
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {tamCollection}
                  </Typography>
                </Card>
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline" }}
                  >
                    Benefit
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {collections?.BENEFIT}
                  </Typography>
                </Card>
              </Box>
            </Card>
            <Card sx={{ padding: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: 1,
                }}
              >
                <Card
                  sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      flexDirection: "row",
                    }}
                  >
                    <Add
                      sx={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: "primary.main",
                      }}
                    />
                    <Typography
                      variant="body1"
                      component="div"
                      align="left"
                      color={"white"}
                      sx={{ fontWeight: "600", mb: 0, whiteSpace: "nowrap" }}
                    >
                      Add Driver
                    </Typography>
                  </Box>
                </Card>
                <Card
                  sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      flexDirection: "row",
                    }}
                  >
                    <Add
                      sx={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: "primary.main",
                      }}
                    />
                    <Typography
                      variant="body1"
                      component="div"
                      align="left"
                      color={"white"}
                      sx={{ fontWeight: "600", mb: 0, whiteSpace: "nowrap" }}
                    >
                      Add Staff
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box sx={{ display: "grid", gap: 1 }}>
            <Card sx={{ padding: 2 }}>
              <Card
                sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
              >
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Orders
                </Typography>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                  marginTop: 1,
                  justifyContent: "space-between",
                }}
              >
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline" }}
                  >
                    Yesterday
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {yesterdayOrders}
                  </Typography>
                </Card>
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: "underline" }}
                  >
                    Month
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {monthOrders}
                  </Typography>
                </Card>
              </Box>
            </Card>

            <Card sx={{ padding: 2 }}>
              <Card
                sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
              >
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Management
                </Typography>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                  marginTop: 1,
                  justifyContent: "space-between",
                }}
              >
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="subtitle2"
                  >
                    Manage Fleet
                  </Typography>
                </Card>
                <Card
                  sx={{
                    padding: 1,
                    borderRadius: "10px",
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="subtitle2"
                  >
                    Resource Management
                  </Typography>
                </Card>
              </Box>
            </Card>

            <Card
              sx={{ padding: 1, borderRadius: "10px", textAlign: "center" }}
            >
              <Typography
                textAlign={"center"}
                variant="body1"
                sx={{ fontWeight: "600" }}
              >
                Action
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
