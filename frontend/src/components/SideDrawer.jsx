import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigateTo("/");
  };

  return (
    <>
      <div>
        <div>
          <Link to={"/"}>
            <h4 className="absolute top-5 left-5 text-3xl font-semibold lg:hidden">
              Bid<span className="text-[#d6482b]">Master</span>
            </h4>
          </Link>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="fixed right-5 top-5 bg-[#d6482b] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden cursor-pointer"
        >
          <GiHamburgerMenu />
        </div>
      </div>
      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500 `}
      >
        <div className="relative">
          <Link to={"/"} onClick={() => setShow(false)}>
            <h4 className="text-2xl font-semibold mb-4">
              Bid<span className="text-[#d6482b]">Master</span>
            </h4>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                onClick={() => {
                  setShow(false);
                }}
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                onClick={() => {
                  setShow(false);
                }}
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-4">
                <Link
                  to={"/sign-up"}
                  className="bg-[#D6482B] font-semibold text-white text-xl py-3 px-4 rounded-lg shadow-lg hover:bg-[#b8381e] hover:shadow-xl transition-all duration-300 ease-in-out"
                  onClick={() => setShow(false)}
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-transparent border-2 border-[#d6482b] text-[#d6482b] font-semibold text-xl py-3 px-6 rounded-lg hover:bg-[#d6482b] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
                  onClick={() => setShow(false)}
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#FF0000] text-white font-semibold text-xl py-3 px-4 rounded-lg hover:bg-[#ea0a0a] hover:shadow-lg transition-all duration-300 ease-in-out">
                  Logout
                </button>
              </div>
            </>
          )}
          <hr className="mb-4 border-t-[#d6482b]" />
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <FaUserCircle /> My Profile
                </Link>
              </li>
            )}

            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                onClick={() => {
                  setShow(false);
                }}
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#d6482b] hover:transition-all hover:duration-150"
                onClick={() => {
                  setShow(false);
                }}
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
          <IoClose
            onClick={() => setShow(!show)}
            className="absolute top-0 right-[-15px] text-[28px] lg:hidden cursor-pointer"
          />
        </div>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className=" text-stone-500 py-2 pr-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className=" text-stone-500 py-2 pr-2 text-xl rounded-sm hover:text-pink-600"
            >
              <RiInstagramFill />
            </Link>
            <Link
              to="https://x.com/VisheshD01"
              target="_blank"
              className=" text-stone-500 py-2 pr-2 text-xl rounded-sm hover:text-black"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://whatsapp.com/"
              target="_blank"
              className=" text-stone-500 py-2 pr-2 text-xl rounded-sm hover:text-green-500"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              to="https://www.linkedin.com/in/vishesh-dalmia-6859091b5/"
              target="_blank"
              className=" text-stone-500 py-2 pr-2 text-xl rounded-sm hover:text-blue-500"
            >
              <FaLinkedin />
            </Link>
          </div>
          <Link
            to={"/contact"}
            className=" text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
            onClick={() => {
              setShow(false);
            }}
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; BidMaster, LLC.</p>
          <p className="text-stone-500">
            Designed By{" "}
            <Link
              to="https://www.linkedin.com/in/vishesh-dalmia-6859091b5/"
              target="_blank"
              className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
            >
              Vishesh Dalmia
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
