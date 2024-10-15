import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { placeBid } from "@/store/slices/bidSlice";
import { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleBid = (e) => {
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 lg:pt-10 py-16 lg:pl-[320px] flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-2 items-center">
          <Link
            to={"/"}
            className="font-semibold transition-all duration-300 hover:text-[#d64a2b]"
          >
            Home
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <Link
            to={"/auctions"}
            className="font-semibold transition-all duration-300 hover:text-[#d64a2b]"
          >
            Auctions
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <p className="text-stone-600">{auctionDetail.title}</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row pt-5">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="bg-white w-[100%] h-auto flex justify-center items-center p-5">
                  <img
                    src={auctionDetail.image?.url}
                    alt={auctionDetail.title}
                  />
                </div>
                <div className="flex flex-col justify-around pb-4">
                  <h3 className="text-black text-2xl font-bold mb-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
                    {auctionDetail.title}
                  </h3>
                  <p className="text-xl font-semibold">
                    Condition:{" "}
                    <span className="text-[#d6482b]">
                      {auctionDetail.condition}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">
                    Minimum Bid:{" "}
                    <span className="text-[#d6482b]">
                      Rs {auctionDetail.startingBid}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-xl w-fit font-bold">
                Auction Item Description
              </p>
              <hr className="my-2 border-t-[1px] border-t-stone-700" />
              {auctionDetail.description &&
                auctionDetail.description.split(". ").map((element, index) => {
                  return (
                    <li key={index} className="text-[18px] my-2">
                      {element}
                    </li>
                  );
                })}
            </div>

            <div className="flex-1">
              <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
                Bids
              </header>
              <div className="bg-white px-4 min-h-fit lg:min-h-[650px]">
                {auctionBidders &&
                auctionBidders.length > 0 &&
                new Date(auctionDetail.startTime) < Date.now() &&
                new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={element.profileImage}
                            alt={element.userName}
                            className="w-12 h-12 rounded-full my-2"
                          />
                          <p className="text-[18px] font-semibold">
                            {element.userName}
                          </p>
                        </div>
                        {index === 0 ? (
                          <p className="text-[20px] font-semibold text-green-600">
                            1st
                          </p>
                        ) : index === 1 ? (
                          <p className="text-[20px] font-semibold text-blue-600">
                            2nd
                          </p>
                        ) : index === 2 ? (
                          <p className="text-[20px] font-semibold text-yellow-600">
                            3rd
                          </p>
                        ) : (
                          <p className="text-[20px] font-semibold text-gray-600">
                            {index + 1}th
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <img
                    src="/notStarted.png"
                    alt="not-started"
                    className="w-full max-h-[650px]"
                  />
                ) : (
                  <img
                    src="/ended.png"
                    alt="ended"
                    className="w-full max-h-[650px]"
                  />
                )}
              </div>
              {user.role === "Bidder" && (
                <div className="bg-[#d6482b] py-4 text-[16px] md:text-[24px] font-semibold px-4 flex items-center justify-between">
                  {Date.now() >= new Date(auctionDetail.startTime) &&
                  Date.now() <= new Date(auctionDetail.endTime) ? (
                    <>
                      <div className="flex gap-3 flex-col sm:flex-row sm:items-center">
                        <p className="text-white">Place Bid</p>
                        <input
                          type="number"
                          className="w-32 focus:outline-none md:text-[20px] p-1"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <button
                        className="p-4 text-white bg-black rounded-full transition-all duration-300 hover:bg-[#222]"
                        onClick={handleBid}
                      >
                        <RiAuctionFill />
                      </button>
                    </>
                  ) : new Date(auctionDetail.startTime) > Date.now() ? (
                    <p className="text-white font-semibold text-xl">
                      Auction has not Started yet!
                    </p>
                  ) : (
                    <p className="text-white font-semibold text-xl">
                      Auction is ended!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AuctionItem;
