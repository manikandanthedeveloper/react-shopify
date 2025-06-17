
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopifyClient from "../api/shopifyClient";
import { GET_MAIN_MENU_QUERY } from "../graphqul/queries";
import { MenuItem } from "@/@type/Menu";

interface MenuState {
     items: MenuItem[];
     loading: boolean;
     error: string | null;
}

const initialState: MenuState = {
     items: [],
     loading: false,
     error: null,
};

export const fetchMainMenu = createAsyncThunk(
     "menu/fetchMainMenu",
     async () => {
          const cleanQuery = GET_MAIN_MENU_QUERY.replace(/\u00A0/g, " ").trim();
          const response = await shopifyClient.post("", {
               query: cleanQuery,
          });
          console.log(response.data?.data?.menu?.items, 'test!!');
          return response.data?.data?.menu?.items || [];
     }
);

const mainMenuSlice = createSlice({
     name: "mainmenu",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchMainMenu.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchMainMenu.fulfilled, (state, action) => {
                    state.loading = false;
                    state.items = action.payload;
               })
               .addCase(fetchMainMenu.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || "Failed to fetch collections";
               });
     },
});

export default mainMenuSlice.reducer;
