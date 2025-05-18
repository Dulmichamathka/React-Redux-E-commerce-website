import { ActionType } from "../Constants/action-types";

const initialState = {
  products: [],
};

// So when it receives SET_PRODUCTS, it replaces the products array in Redux state with the data from the API.

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
