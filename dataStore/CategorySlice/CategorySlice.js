import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categoryApi:[],
    status:"",
    error:""
}

const POST_URL = "/api/routes/categoryroute/category/"

export const fetchCategories = createAsyncThunk("posts/fetchCategories", async () =>{

    try{
        const response = await axios.get(POST_URL) 
        
    return response.data
}catch(err){
    return err.message
}

})

// httpPost ...

const Post_crud = "/api/routes/categoryroute/categpostputdelete/"
export const postCategory = createAsyncThunk("posts/postCategory", async (initialPost) => {
   
  try {
    const { accesstoken, form } = initialPost
        const res = await axios.post(Post_crud,  form  , 
          {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': "multipart/form-data",
              'Authorization' : `Bearer ${accesstoken}`
            }
          }
        )
      console.log(res.data)
      return res
          } catch (err) {
              console.log(err.message)
     }
})



// put
export const putCategory = createAsyncThunk("posts/putCategory", async (initialPost) => {
  try {
    const { accesstoken, FData } = initialPost
    const res = await axios.put(Post_crud, FData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data",
          'Authorization' : `Bearer ${accesstoken}`
        }
      }
    )
  console.log(res)
  return res.data
  } catch (err) {
    console.log(err.message)
}
})


// Delete
export const deleteCategory = createAsyncThunk("posts/deleteCategory", async (initialPost) => {
  try {
    const { accesstoken, form } = initialPost
    const res = await axios.post("/api/routes/categoryroute/deletecategory/", form,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data",
          'Authorization' : `Bearer ${accesstoken}`
        }
      }
    )
  console.log(res.data)
  return res.data
  } catch (err) {
    console.log(err.message)
}
})






export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            //.HttpGet.........
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded"
                
                // if (state.categoryApi.length < 1) {
                     state.categoryApi = action.payload 
                // }
            })
        
            //HttpPost
            .addCase(postCategory.fulfilled, (state, action) => {
              // state.categoryApi = [...state.categoryApi, action.payload]
              // const { data, status } = action.payload

              // if (status === 409) {
              //     state.error = data
              //     alert(state.error)
              // }

              if(action.payload?.status === 201){
              state.categoryApi =[...state.categoryApi, action.payload?.data] 
              } else {
                  alert("conflict ...")
          }
              
            })
        
         //HTTP PUT 
         .addCase(putCategory.fulfilled,(state,action) => {
               const _id = action.payload?._id
           const category = state.categoryApi.find(s => s?._id === _id)
           const indexvalue = state.categoryApi.indexOf(category)
           console.log(indexvalue)
           state.categoryApi[indexvalue] = action.payload
    
            })

          
         //HTTP Delete 
         .addCase(deleteCategory.fulfilled,(state,action) => {
            const _id = action.payload?._id
               const category = state.categoryApi.filter(s => s?._id !== _id)
               state.categoryApi = [...category]
            })
    }
}
)

export const selectAllCategories = (state) => state.categoryred.categoryApi
export const selectAllCategoryErrors = (state) => state.categoryred.error
export const selectAllCategoryStatus = (state) => state.categoryred.status

export default CategorySlice.reducer