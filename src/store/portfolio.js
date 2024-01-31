import { createSlice } from "@reduxjs/toolkit";



const portfolioSlice = createSlice({
    name:"portfolio",
    initialState:{
        portfolios:[],
        aboutIntro:{},
        aboutDetails:[],
        mySkills:[],
    },
    reducers:{
        fetchPortfolio(state, action){
            state.portfolios = action.payload?.portfolios;
            state.aboutDetails= action.payload?.about?.details;
            state.aboutIntro= action.payload?.about?.intro;
            state.mySkills = action.payload?.skills;
        },
    }
});
export const portfolioActions = portfolioSlice.actions;
export default portfolioSlice;