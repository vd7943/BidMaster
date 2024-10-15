import {
  clearAllSuperAdminSliceErrors,
  getAllPaymentProofs,
  getAllUsers,
  getMonthlyRevenue,
} from "@/store/slices/superAdminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuctionItemDelete from "./sub-components/AuctionItemDelete";
import BiddersAuctioneersGraph from "./sub-components/BiddersAuctioneersGraph";
import PaymentGraph from "./sub-components/PaymentGraph";
import PaymentProofs from "./sub-components/PaymentProofs";
import Spinner from "@/custom-components/Spinner";
import H1 from "@/custom-components/H1";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.superAdmin);

  useEffect(() => {
    dispatch(getMonthlyRevenue());
    dispatch(getAllUsers());
    dispatch(getAllPaymentProofs());
    dispatch(clearAllSuperAdminSliceErrors());
  }, []);

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && user.role !== "Super Admin") {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="w-full ml-0 m-0 h-fit px-5 pt-14 xl:pt-4 lg:pl-[320px] flex flex-col gap-10">
            <div className="flex justify-center">
              <H1 color={"#d6482b"} content={"Dashboard"} />
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
                  Monthly Total Payments Received
                </h3>
                <PaymentGraph />
              </div>
              <div>
                <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
                  Users
                </h3>
                <BiddersAuctioneersGraph />
              </div>
              <div>
                <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
                  Payment Proofs
                </h3>
                <PaymentProofs />
              </div>
              <div>
                <h3 className="text-black text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
                  Delete Items From Auction
                </h3>
                <AuctionItemDelete />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
