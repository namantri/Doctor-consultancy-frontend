import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavbarPortal/Navbar";
import Portal from "./pages/Portal/Portal";
import Registration from "./pages/registration/Registration";
import Login from "./pages/Login/Login";
import RegistrationPatient from "./pages/RegistrationPatient/RegistrationPatient";
import RegistrationDoctor from "./pages/RegistrationDoctor/RegistrationDoctor";
import DataSecurity from "./pages/DataSecurity/DataSecurity";
import ContactUs from "./pages/ContactUs/ContactUs";
import UserProfilePatient from "./pages/UserProfilePatient/UserProfilePatient";
import DoctorPortal from "./pages/DoctorPortal/DoctorPortal";
import Appointment from "./AppointmentPage/Appointment";
import Prescription from "./Prescription/Prescription";
import UserProfileDoctor from "./UserProfileDoctor/UserProfileDoctor";

import EditDoctor from "./pages/EditDoctor/EditDoctor";
import Approved from "./pages/ApprovedDoctorPortal/Approved";
import Address from "./Address/Address";
import EditAddress from "./Address/EditAddress";
import AddAddress from "./Address/AddAddress";
import PatientAppointment from "./AppointmentPage/PatientAppointment";
import FindDoctor from "./FindDoctor/FindDoctor";
import ViewDetails from "./FindDoctor/ViewDetails";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/registrationpatient"
            element={<RegistrationPatient />}
          />
          <Route path="/registrationdoctor" element={<RegistrationDoctor />} />
          <Route path="/datasecurity" element={<DataSecurity />} /> 
          <Route path="/contactus" element={<ContactUs />} /> 
          <Route path="/userprofilepatient" element={<UserProfilePatient />} />
          <Route path="/doc" element={<DoctorPortal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/userprofiledoctor" element={<UserProfileDoctor />} />
          <Route path="/editdata" element={<EditDoctor />} />
          <Route path="/approved" element={<Approved></Approved>}></Route>
          <Route path="/address" element={<Address />} />
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/editaddress" element={<EditAddress />} />
          <Route path="/patientappointment" element={<PatientAppointment />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/viewdetails" element={<ViewDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
