import mongoose from "mongoose"



const linker = process.env.MONGODB_LINK

export const connectDB = async () =>{
    try{  
        await mongoose.connect( linker , {
            useUnifiedTopology : true ,  
            useNewUrlParser: true  
        })
        // console.log("Database Connected")
       
      }catch(err){console.log(err)}
}



