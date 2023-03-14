import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./ItemSlice/ItemSlice";
import CategoryReducer from "./CategorySlice/CategorySlice";
import UserReducer from "./UserSlice/UserSlice";
import UserConfigReducer from "./AdminSlice/UserConfigSlice";
import AuthReducer from "./UserSlice/AuthSlice/AuthSlice";

export const store = configureStore({
    reducer: {
        itemred: itemReducer,
        categoryred: CategoryReducer, 
        userred: UserReducer, 
        currentuserred: UserConfigReducer, 
        
        //Auth .... 
        userreducer: AuthReducer,
    }
})
