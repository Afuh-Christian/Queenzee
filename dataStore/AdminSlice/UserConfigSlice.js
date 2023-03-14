import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentrouteuser: {
        _id : "",
        username: "",
        imageurl: "", 
        email: "", 
        roles: {},  
    }
}

// Make Editor ..... 
export const MakeEditorApi = createAsyncThunk("posts/MakeEditorApi", async (initialpost) => {
    try {
        const { accesstoken, formobject } = initialpost
        const res = await axios.put("/api/routes/Auth/private/make_remove_Editor", formobject, {
            headers: {
                'Authorization' : `Bearer ${accesstoken}`
            }
        } )
    return res.data
    } catch (err) {
        console.log(err.message)
    }
})

const UserConfigSlice = createSlice({
    name: "UserConfig", 
    initialState, 
    reducers : {
        setInitialUser:  (state, action) => {
            try{

            const { username, imageurl, email, _id , roles} = action.payload
            state.currentrouteuser.username = username 
            state.currentrouteuser.imageurl = imageurl 
            state.currentrouteuser.email = email 
            state.currentrouteuser._id = _id 
                state.currentrouteuser.roles = roles 
                window.localStorage.setItem("CurrentUserSettings", JSON.stringify({ username, imageurl, email, _id, roles }))
            } catch (err) {
                alert("try again")
        }

        }
    }, 
    extraReducers(builder) {
        builder 
            .addCase(MakeEditorApi.fulfilled,  (state, action) => {
                const { username, imageurl, email, _id , roles} = action.payload
                state.currentrouteuser.username = username 
                state.currentrouteuser.imageurl = imageurl 
                state.currentrouteuser.email = email 
                state.currentrouteuser._id = _id 
                state.currentrouteuser.roles = roles 

                // window.localStorage.removeItem("CurrentUserSettings")
                 window.localStorage.setItem("CurrentUserSettings" , JSON.stringify({ username, imageurl, email, _id , roles}))
            })
    }
})


export const { setInitialUser } = UserConfigSlice.actions
export const getCurrentUser = (state) => state.currentuserred.currentrouteuser

const UserConfigReducer = UserConfigSlice.reducer
export default UserConfigReducer







