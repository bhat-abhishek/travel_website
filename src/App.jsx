
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home2 from "./pages/Home2";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserProfile from "./pages/userProfile/UserProfile";
import Rooms from "./pages/roomSelection/Rooms";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/roomSelection/Checkout";
import Gallery from "./pages/Gallery";

import Users from "./pages/dashboard/Users";
import DashHero from "./pages/dashboard/DashHero";
import DashRooms from "./pages/dashboard/Rooms";
import Contact from "./pages/Contact";
import Content from "./components/Content/Content";
import RecentBooking from "./pages/dashboard/RecentBooking";

import { CheckOutState } from "./context/amountContext";
import { SideBarState } from "./context/sideBarContext";
import { AuthState } from "./context/authContext";
function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <SideBarState>
          <CheckOutState>
            <Routes>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="/" element={<Home2 />}>
                <Route path="" element={<Content />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="userprofile" element={<UserProfile />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<DashHero />} />
                <Route path="Users" element={<Users />} />
                <Route path="Rooms" element={<DashRooms />} />
                <Route path="Bookings" element={<RecentBooking />} />
              </Route>
            </Routes>
          </CheckOutState>
        </SideBarState>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
