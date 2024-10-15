import Card from "@/custom-components/Card";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const FeaturedAuction = () => {
  const { loading, allAuctions } = useSelector((state) => state.auction);
  return (
    <>
      <section className="my-8">
        <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
          Featured Auctions
        </h3>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap gap-6">
            {allAuctions.slice(0, 8).map((element) => {
              return (
                <Card
                  imgSrc={element.image?.url}
                  title={element.title}
                  startingBid={element.startingBid}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  id={element._id}
                  key={element._id}
                />
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default FeaturedAuction;
