import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.user);

  return (
    <>
      <section className="mb-8">
        <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2">
          <h3 className="text-[#111] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Top 10
          </h3>
          <h3 className="text-[#d64a2b] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
            Bidders Leaderboard
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border my-5 border-gray-400">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Profile Pic</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Bid Expenditure</th>
                <th className="py-2 px-4 text-left">Auctions Won</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leaderboard.slice(0, 10).map((element, index) => {
                return (
                  <tr key={element._id} className="border-b border-gray-400">
                    <td className="flex gap-2 items-center py-2 px-4">
                      <span className="text-stone-500 font-semibold text-xl w-7 hidden sm:block">
                        {index + 1}
                      </span>
                      <span>
                        <img
                          src={element.profileImage.url}
                          alt={element.userName}
                          className="h-12 w-12 object-cover rounded-full"
                        />
                      </span>
                    </td>
                    <td className="py-2 px-4">{element.userName}</td>
                    <td className="py-2 px-4">{element.moneySpent}</td>
                    <td className="py-2 px-4">{element.auctionsWon}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link
          to={"/leaderboard"}
          className="border-2 border-stone-700 font-bold text-xl w-full py-2 flex justify-center rounded-md hover:bg-stone-700 hover:text-white transition-all duration-300"
        >
          Go to Leaderboard
        </Link>
      </section>
    </>
  );
};

export default Leaderboard;
