import Card from "@/custom-components/Card";
import H1 from "@/custom-components/H1";
import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Auctions = () => {
  const { loading, allAuctions } = useSelector((state) => state.auction);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-10 lg:pt-0 lg:pl-[320px] flex flex-col pb-20">
          <section className="my-8">
            <H1 color={"#d64a2b"} content={"Auctions"} />
            <div className="flex flex-wrap gap-6">
              {allAuctions.map((element) => (
                <Card
                  key={element._id}
                  title={element.title}
                  imgSrc={element.image.url}
                  startingBid={element.startingBid}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  id={element._id}
                />
              ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;
