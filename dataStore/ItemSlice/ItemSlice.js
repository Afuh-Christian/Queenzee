import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { items } from "../sampledata";
import axios from "axios";
// console.log("Hello")
const POST_URL = "/api/routes/itemroute/items/"
//httpGet
export const fetchItems = createAsyncThunk('posts/fetchItems',async () => {

    try {
        const response = await axios.get(POST_URL)
       console.log(response.data)
        return [...response.data];
    }catch(err){
        return console.log(err.message)
    }
})


const POST_URL_crud  = "/api/routes/itemroute/itempostputdelete/"

//httpPost 
export const postItemApi = createAsyncThunk("posts/postItemApi",async (initialPost) => {
    try {
        const { accesstoken, form } = initialPost
        const response = await axios.post(POST_URL_crud , form, 
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",

                    'Authorization' : `Bearer ${accesstoken}`
                }
            })
    return response
    // console.log(response.status)
    //     if(response.status === 201) return response.data 
    //     if(response.status === 409) return response.status 
        // console.log(response)
        
    }
    catch(err){
        return err.message
    }

})


//httpPut 
export const putItemApi = createAsyncThunk("posts/putItemApi",async (initialPost) => {
    try {
        const { accesstoken, FData } = initialPost
        const response = await axios.put(POST_URL_crud , FData, 
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",
                    'Authorization' : `Bearer ${accesstoken}`
                }
            })
        console.log(response.data)
        return response.data
    }
    catch(err){
        return err.message
    }
})



const deletepath = "/api/routes/itemroute/deleteitem/"
//http Delete
export const deleteItemApi = createAsyncThunk("posts/deleteItemApi", async (initialPost) => {
   
    try {
        const { accesstoken, formdata } = initialPost
        const response = await axios.post("/api/routes/itemroute/deleteitem/",  formdata , 
           
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",
                    'Authorization' : `Bearer ${accesstoken}`
                }
            }
        )
        console.log(response.data)
        return response.data
    }
    catch(err){
        return err.message
    }
})


const initialState = {
    itemApi:[],
    status:"",
    error:""
}

export const ItemSlice = createSlice({
    name: 'item', 
    initialState, 
    reducers: {}
    ,
    extraReducers(builder) {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = "Succeed"
                state.itemApi = action.payload
                // if (state.itemApi.length < 1) {
                //     state.itemApi.push(...action.payload)
                // }
            })
        
         //HttpPost
            .addCase(postItemApi.fulfilled, (state, action) => {
                const { data, status } = action.payload

                // if (status === 409) {
                //     state.error = data
                //     alert(state.error)
                // }

                if(status === 201){
                state.itemApi = data
                console.log(status)
                } else {
                    alert("conflict ...")
            }
                
                
                
                
        // state.itemApi = action.payload
       })
            
            
         //HttpPut
            .addCase(putItemApi.fulfilled, (state, action) => {
                state.itemApi = action.payload
    //     const _id = action.payload?._id
    //  const category = state.itemApi.find(s => s?._id === _id)
    //  const indexvalue = state.itemApi.indexOf(category)
    //  console.log(indexvalue)
    //  state.itemApi[indexvalue] = action.payload
     
       })
            
            
         //HttpDelete ... 
       .addCase(deleteItemApi.fulfilled,(state,action) =>{
        // const _id = action.payload?._id
        // const category = state.itemApi.filter(s => s?._id !== _id)
        // state.itemApi = [...category]
        state.itemApi = action.payload
       })
    }
})

export const selectAllItems = (state) => state.itemred.itemApi//[0]
export const selectAllStatus = (state) => state.itemred.status
export const selectAllErrors = (state) => state.itemred.error

export default ItemSlice.reducer   