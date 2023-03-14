import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { getCookie } from "cookies-next" 
import { postUsers } from "../UserSlice";


// Login User .Manully..... 
export const LoginUserThunk = createAsyncThunk("posts/LoginUserThunk", async (initialpost) => {
    try {
        const res = await axios.post("/api/routes/Auth/loginRoute/", initialpost)
        return res.data
    } catch (err) {
        console.log(err.message)
    }
})

// Login User if Request Token exist 
export const RefreshLogin = createAsyncThunk("posts/RefreshLogin", async(initialpost) => {
    try {
        // const cookies = getCookies({ req, res })
        // if (cookies?.jwt) console.log(cookies.jwt)
        const res = await axios.post("/api/routes/Auth/refreshtoken/")

        return res.data

    } catch (err) {
        console.log(err.message)
    }
})


// Loggout user ......

export const LogoutThunk = createAsyncThunk("posts/LogoutThunk" , async()=>{
    try {
        const res = await axios.get("/api/routes/Auth/logoutRoute") 
        return res.data
     } catch (err) {
        console.log(err.message)
    }
})


/// Edit user account ......

export const EditAccountThunk = createAsyncThunk("posts/EditAccountThunk", async (form) => {
    try {
        const res = await axios.put("/api/routes/Auth/editaccount", form 
        , 
        {
            headers:{
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': "multipart/form-data",
                
    }
        }
            )
        return res.data
    } catch (err) {
        console.log(err.message)
    }
})



const initialState = {
    loggedInUser: {
        accessToken: null, 
        refreshToken: null, 
        user: null
    },
}


export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            
            // Login .... 
            .addCase(LoginUserThunk.fulfilled, (state, action) => {
                if (action.payload?.accessToken) {
                    state.loggedInUser.accessToken = {
                        ...state.loggedInUser.accessToken,
                        ...action.payload
                    }
                    state.loggedInUser.user =
                        jwtDecode(
                            state.loggedInUser.accessToken.accessToken
                        ).UserInfo
                
                
                    window.localStorage.setItem("UserProfile", JSON.stringify(state.loggedInUser.user))
                } else {
                    alert("Username or password do not match ... ")
                    return
                }
            })
        

            // refresh the token .......
            .addCase(RefreshLogin.fulfilled, (state, action) => {
                if (action.payload) {
                    state.loggedInUser.accessToken = {
                        ...state.loggedInUser.accessToken,
                        ...action.payload
                    }

                    state.loggedInUser.user =
                        jwtDecode(
                            state.loggedInUser.accessToken?.accessToken
                        )?.UserInfo 
                       
                        window.localStorage.setItem("UserProfile", JSON.stringify(state.loggedInUser.user) )
                }  
            })

        // Logout User .... 
            .addCase(LogoutThunk.fulfilled, (state, action) => {
                  state.loggedInUser.accessToken = null
                state.loggedInUser.user = null
            })

        // register user .... set accesstoken .... 
            .addCase(postUsers.fulfilled, (state, action) => {
                   if(action.payload){
                    state.loggedInUser.accessToken = { accessToken : action.payload?.accessToken }

                    state.loggedInUser.user =
                        jwtDecode(
                            state.loggedInUser.accessToken?.accessToken
                        )?.UserInfo 
                        window.localStorage.setItem("UserProfile", JSON.stringify(state.loggedInUser.user) )
                    }  
            })
        
        
        // Edit User .... 
            .addCase(EditAccountThunk.fulfilled, (state, action) => {
                // console.log(action.payload)
                // if (action.payload) {
                //     state.loggedInUser.accessToken = {
                //         ...state.loggedInUser.accessToken,
                //         ...action.payload
                //     }

                //     state.loggedInUser.user =
                //         jwtDecode(
                //             state.loggedInUser.accessToken?.accessToken
                //         )?.UserInfo 
                    
                //         window.localStorage.setItem("UserProfile", JSON.stringify(state.loggedInUser.user) )
                // } 
                if(action.payload){
                    state.loggedInUser.accessToken = { accessToken : action.payload?.accessToken }

                    state.loggedInUser.user =
                        jwtDecode(
                            state.loggedInUser.accessToken?.accessToken
                        )?.UserInfo 
                        window.localStorage.setItem("UserProfile", JSON.stringify(state.loggedInUser.user) )
                    }  
            })
    }
}) 
export const currentLoggedinUser = (state) => state.userreducer.loggedInUser
const AuthReducer = AuthSlice.reducer
export default AuthReducer

