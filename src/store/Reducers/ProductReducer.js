import { ActionType } from "../Constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dulmi",
      category: "Programmer",
    },
  ],
};

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
