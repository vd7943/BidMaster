import CardTwo from "@/custom-components/CardTwo";
import H1 from "@/custom-components/H1";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewMyAuctions = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && user.role !== "Auctioneer") {
      navigateTo("/");
    }

    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-14 xl:pt-4 lg:pl-[320px] flex flex-col min-h-screen py-6">
        <H1 color={"#d6482b"} content={"My Auctions"} />
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap gap-6 mt-4">
            {myAuctions.length > 0 ? (
              myAuctions.map((element) => {
                return (
                  <CardTwo
                    key={element._id}
                    title={element.title}
                    startTime={element.startTime}
                    startingBid={element.startingBid}
                    endTime={element.endTime}
                    imgSrc={element.image?.url}
                    id={element._id}
                  />
                );
              })
            ) : (
              <h3 className="text-[#666] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl mt-5">
                You have not posted any auction!
              </h3>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default ViewMyAuctions;
