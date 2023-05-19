import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { EditAccountThunk } from "./AuthSlice/AuthSlice"


// register user .... 
export const postUsers = createAsyncThunk("posts/postUsers", async (initialPost) => {
  
    try {
        const res = await axios.post("/api/routes/Auth/registerRoute/", initialPost,
    {
        headers:{
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': "multipart/form-data",
            
        }
        })

        return res.data
    } catch (err) {
        console.log(err.message)
    } 
})




//get all users ....
export const fetchUsers = createAsyncThunk("posts/fetchUsers" , async () => {
    try {
    const  res = await axios.get("/api/routes/Auth/allusers/") 
   
        return res.data
  } catch (err) {
      console.log(err.message)
    }
})


const initialState = {
    users: [], 
    status: "",
    error : "" 
}

export const UserSlice = createSlice({
    name: "users",
    initialState,
    reducer: {},
    extraReducers(builder)  {
        builder
            // register user .... 
        //     .addCase(postUsers.fulfilled, (state, action) => {
        //         if(action.payload?.userArray){
        //             state.users = action.payload?.userArray
        //         }else{
        //             alert("Conflicting Users ..... ")
        //         }
        //     }
            
        // )

            //Edit account import thunk ...
            .addCase(EditAccountThunk.fulfilled, (state, action) => {
                state.users = action.payload?.userArray
            })
        
        
            // get users .... 
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "success"
               
                // if (state.users.length < 1) {
                    state.users = action.payload 
                // }
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(fetchUsers.pending, (state, action) => {
                 state.status = "loading"
            })
     
    }
})


export const AllUsers = (state) => state.userred.users
export const UserError= (state) => state.userred.error
export const UserStatus = (state) => state.userred.status

const UserReducer = UserSlice.reducer
export default UserReducer
