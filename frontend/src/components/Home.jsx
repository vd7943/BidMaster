import H1 from "@/custom-components/H1";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuction from "./home-sub-components/FeaturedAuction";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";

const Home = () => {
  const howItWorks = [
    { title: "Post Items", description: "Auctioneer posts items for bidding." },
    { title: "Place Bids", description: "Bidders place bids on listed items." },
    {
      title: "Win Notification",
      description: "Highest bidder receives a winning email.",
    },
    {
      title: "Payment & Fees",
      description:
        "Bidder pays the amount for the auction item, Auctioneer pays 5% commission to the platform.",
    },
  ];

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-10 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div className="pt-6">
          <p className="text-[#b4a89f] font-bold text-xl mb-6">
            Transparency Leads to Your Victory!
          </p>
          <H1 color={"#111"} content={"Transparent Auctions"}></H1>
          <H1 color={"#d6482b"} content={"Be The Winner"}></H1>
          <div className="flex gap-4 my-8">
            {!isAuthenticated && (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#D6482B] font-semibold text-white text-xl py-3 px-4 rounded-lg shadow-lg hover:bg-[#b8381e] hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Sign Up
                </Link>
                <Link
                  to="login"
                  className="bg-transparent border-2 border-[#d6482b] text-[#d6482b] font-semibold text-xl py-3 px-6 rounded-lg hover:bg-[#d6482b] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            How it works
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
            {howItWorks.map((element) => (
              <div
                className="bg-white flex flex-col gap-2 p-2 rounded-md h-[96px] justify-center md:w-[48%] lg:w[47%] 2xl:w-[24%] hover:shadow-md transition-all duration-300"
                key={element.title}
              >
                <h5 className="font-bold">{element.title}</h5>
                <p>{element.description}</p>
              </div>
            ))}
          </div>
        </div>
        <FeaturedAuction />
        <UpcomingAuctions />
        <Leaderboard />
      </section>
    </>
  );
};

export default Home;
