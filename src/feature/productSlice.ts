
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      {
        id: 1,
        name: 'Product A',
        category: 'Finished',
        totalCost: 500,
        materials: [
          {
            materialId: 101,
            name: 'Material A',
            unit: 'kg',
            quantity: 5,
            price: 50,
            totalPrice: 250,
            tax: 25,
            totalAmount: 275,
          },
          {
            materialId: 102,
            name: 'Material B',
            unit: 'ltr',
            quantity: 3,
            price: 75,
            totalPrice: 225,
            tax: 22.5,
            totalAmount: 247.5,
          },
        ],
      },
      {
        id: 2,
        name: 'Product B',
        category: 'Semi finished',
        totalCost: 200,
        materials: [
          {
            materialId: 103,
            name: 'Material C',
            unit: 'gm',
            quantity: 200,
            price: 1,
            totalPrice: 200,
            tax: 20,
            totalAmount: 220,
          },
        ],
      },
    ],
  };
  
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action:any) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, product } = action.payload;
      const productIndex = state.products.findIndex(p => p.id === id);
      if (productIndex >= 0) {
        state.products[productIndex] = product;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
