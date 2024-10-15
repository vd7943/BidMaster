import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideDrawer from "./components/SideDrawer";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SubmitCommission from "./components/SubmitCommission";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaderboard, fetchUser } from "./store/slices/userSlice";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import { getAllAuctionItems } from "./store/slices/auctionSlice";
import Leaderboard from "./components/Leaderboard";
import Auctions from "./components/Auctions";
import AuctionItem from "./components/AuctionItem";
import CreateAuction from "./components/CreateAuction";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import ViewMyAuctions from "./components/ViewMyAuctions";
import ViewAuctionDetail from "./components/ViewAuctionDetail";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
  }, []);

  return (
    <Router>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
        <Route path="/how-it-works-info" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/item/:id" element={<AuctionItem />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/view-my-auctions" element={<ViewMyAuctions />} />
        <Route path="/auction/details/:id" element={<ViewAuctionDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;
