import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface addFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, actions: PayloadAction<Customer>) => {
      state.value.push(actions.payload);
    },
    addFoodToCustomer: (
      state,
      actions: PayloadAction<addFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === actions.payload.id) {
          customer.food.push(actions.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customersSlice.actions;
export default customersSlice.reducer;
