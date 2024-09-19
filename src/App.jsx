// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Staff from "./pages/Staff";
// import CenteredLayout from "./components/CenteredLayout";
// import Mailsender from "./pages/Mailsender";
// import Layout from "./pages/Layouttt";
// import FpEmail from "./pages/Forgot Password/FpEmail";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />

//           <Route path="" element={<CenteredLayout />}>
//             <Route path="home">
//               <Route path="forgotpassword" element={<FpEmail />} />
//               <Route path="login" element={<Login />} />
//               <Route path="mail" element={<Mailsender />} />
//               <Route path="layout" element={<Layout />} />
//               <Route path="home" element={<Home />} />
//               <Route path="staff" element={<Staff />} />
//             </Route>
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import CenteredLayout from "./components/CenteredLayout";
import Mailsender from "./pages/Mailsender";
import Layout from "./pages/Layouttt";
import FpEmail from "./pages/Forgot Password/FpEmail";
import FlowLayout from "./components/FlowLayout";
import FpOtp from "./pages/Forgot Password/FpOtp";
import FpnewPassword from "./pages/Forgot Password/FpnewPassword";

import Drivers from "./pages/Drivers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<FlowLayout />}>
          <Route path="forgotpassword" element={<FpEmail />} />
          <Route path="otp" element={<FpOtp />} />
          <Route path="setPassword" element={<FpnewPassword />} />
        </Route>

        <Route element={<CenteredLayout />}>
          <Route path="drivers" element={<Drivers />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="mail" element={<Mailsender />} />
          <Route path="layout" element={<Layout />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
