import { postCommissionProof } from "@/store/slices/commissionSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitCommission = () => {
  const [proof, setProof] = useState();
  const [amount, setAmount] = useState();
  const [comment, setComment] = useState();

  const proofHandler = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.commission);

  const handlePaymentProof = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
  };

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-10 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
          <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-2 justify-center rounded-md">
            <h1 className="text-[#d6482b] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
              Upload Payment Proof
            </h1>
            <form
              onSubmit={handlePaymentProof}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">
                  Payment Proof (ScreenShot)
                </label>
                <input
                  type="file"
                  onChange={proofHandler}
                  className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={5}
                  className="text-[16px] p-2 bg-transparent border-[1px] border-stone-500 focus:outline-none rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-[#d6482b] w-[280px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
              >
                {loading ? "Uploading..." : "Upload Proof"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitCommission;
