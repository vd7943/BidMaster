import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllAuctionItems } from "./auctionSlice";

const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState: {
    loading: false,
    monthlyRevenue: [],
    totalAuctioneers: [],
    totalBidders: [],
    paymentProofs: [],
    singlePaymentProof: {},
  },
  reducers: {
    requestForMonthlyRevenue(state, action) {
      state.loading = true;
      state.monthlyRevenue = [];
    },
    successForMonthlyRevenue(state, action) {
      state.loading = false;
      state.monthlyRevenue = action.payload;
    },
    failedForMonthlyRevenue(state, action) {
      state.loading = false;
      state.monthlyRevenue = [];
    },
    requestForAllUsers(state, action) {
      state.loading = true;
      state.totalAuctioneers = [];
      state.totalBidders = [];
    },
    successForAllUsers(state, action) {
      state.loading = false;
      state.totalAuctioneers = action.payload.auctioneersArray;
      state.totalBidders = action.payload.biddersArray;
    },
    failedForAllUsers(state, action) {
      state.loading = false;
      state.totalAuctioneers = [];
      state.totalBidders = [];
    },
    requestForPaymentProofs(state, action) {
      state.loading = true;
      state.paymentProofs = [];
    },
    successForPaymentProofs(state, action) {
      state.loading = false;
      state.paymentProofs = action.payload;
    },
    failedForPaymentProofs(state, action) {
      state.loading = false;
      state.paymentProofs = [];
    },
    requestForPaymentProofDelete(state, action) {
      state.loading = true;
    },
    successForPaymentProofDelete(state, action) {
      state.loading = false;
    },
    failedForPaymentProofDelete(state, action) {
      state.loading = false;
    },
    requestForSinglePaymentProofDetail(state, action) {
      state.loading = true;
      state.singlePaymentProof = {};
    },
    successForSinglePaymentProofDetail(state, action) {
      state.loading = false;
      state.singlePaymentProof = action.payload;
    },
    failedForSinglePaymentProofDetail(state, action) {
      state.loading = false;
      state.singlePaymentProof = {};
    },
    requestForUpdatePaymentProof(state, action) {
      state.loading = true;
    },
    successForUpdatePaymentProof(state, action) {
      state.loading = false;
    },
    failedForUpdatePaymentProof(state, action) {
      state.loading = false;
    },
    requestForDeleteAuctionItem(state, action) {
      state.loading = true;
    },
    successForDeleteAuctionItem(state, action) {
      state.loading = false;
    },
    failedForDeleteAuctionItem(state, action) {
      state.loading = false;
    },
    clearAllErrors(state, action) {
      state.loading = false;
      state.monthlyRevenue = state.monthlyRevenue;
      state.paymentProofs = state.paymentProofs;
      state.totalAuctioneers = state.totalAuctioneers;
      state.totalBidders = state.totalBidders;
      state.singlePaymentProof = {};
    },
  },
});

export const getMonthlyRevenue = () => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForMonthlyRevenue());
    const response = await axios.get(
      "http://localhost:5000/api/v1/superadmin/monthlyincome",
      {
        withCredentials: true,
      }
    );
    dispatch(
      superAdminSlice.actions.successForMonthlyRevenue(
        response.data.totalMonthlyRevenue
      )
    );
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForMonthlyRevenue());
    console.error(error.response.data.message);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForAllUsers());
    const response = await axios.get(
      "http://localhost:5000/api/v1/superadmin/users/getall",
      {
        withCredentials: true,
      }
    );
    dispatch(superAdminSlice.actions.successForAllUsers(response.data));
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForAllUsers());
    console.error(error.response.data.message);
  }
};

export const getAllPaymentProofs = () => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForPaymentProofs());
    const response = await axios.get(
      "http://localhost:5000/api/v1/superadmin/paymentproofs/getall",
      {
        withCredentials: true,
      }
    );
    dispatch(
      superAdminSlice.actions.successForPaymentProofs(
        response.data.paymentProofs
      )
    );
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForPaymentProofs());
    console.error(error.response.data.message);
  }
};

export const deletePaymentProof = (id) => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForPaymentProofDelete());
    const response = await axios.delete(
      `http://localhost:5000/api/v1/superadmin/paymentproof/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(superAdminSlice.actions.successForPaymentProofDelete());
    dispatch(getAllPaymentProofs());
    toast.success(response.data.message);
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForPaymentProofDelete());
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const getSinglePaymentProofDetail = (id) => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForSinglePaymentProofDetail());
    const response = await axios.get(
      `http://localhost:5000/api/v1/superadmin/paymentproof/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(
      superAdminSlice.actions.successForSinglePaymentProofDetail(
        response.data.PaymentProofDetail
      )
    );
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForSinglePaymentProofDetail());
    console.error(error.response.data.message);
  }
};

export const updatePaymentProof = (id, status, amount) => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForUpdatePaymentProof());
    const response = await axios.put(
      `http://localhost:5000/api/v1/superadmin/paymentproof/status/update/${id}`,
      { status, amount },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(superAdminSlice.actions.successForUpdatePaymentProof());
    toast.success(response.data.message);
    dispatch(getAllPaymentProofs());
    dispatch(superAdminSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForUpdatePaymentProof());
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const deleteAuctionItem = (id) => async (dispatch) => {
  try {
    dispatch(superAdminSlice.actions.requestForDeleteAuctionItem());
    const response = await axios.delete(
      `http://localhost:5000/api/v1/superadmin/auctionitem/delete/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch(superAdminSlice.actions.successForDeleteAuctionItem());
    toast.success(response.data.message);
    dispatch(getAllAuctionItems());
  } catch (error) {
    dispatch(superAdminSlice.actions.failedForDeleteAuctionItem());
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const clearAllSuperAdminSliceErrors = () => async (dispatch) => {
  dispatch(superAdminSlice.actions.clearAllErrors());
};

export default superAdminSlice.reducer;
