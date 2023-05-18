
import UserModel from "../../models/UserModel"
// import CookieMiddleware from "./CookieMiddleware"
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs')
import { setCookie } from 'cookies-next';
import { connectDB } from "../../config/mongodbconnect"




async function Handler(req, res) {
  await connectDB()
    const {username , password} = req.body
    if(!username || ! password) return res.status(400).json({'message': `Username or Password has not been given`})

      //check if the user has an account and logg him out if he does not
      const foundUser = await UserModel.findOne({username : username})
     
      if(!foundUser) return res.status(401).json("UnAuthorized") //UnAuthorized ....
      const match = await bcrypt.compare(password , foundUser.password)
      
      if (match) {
        // We are going the apply JWT(Normal token and refresh token ) to use in the other routes we want protected in our api
      const loginconfirm =   await login(foundUser, req ,res)
          return res.json(loginconfirm)
      }else {
        return res.status(401).json("Unauthorized") // Unauthorized
    }
}


export default Handler 







export async function login(foundUser , req ,res){
 
  const roles = Object.values(foundUser.roles)
       
  // console.log(roles)
  console.log(foundUser.roles)
  //define accesstoken
    
  const accessToken = jwt.sign(
      {
      "UserInfo": {
        "_id" : foundUser._id,
          "username" : foundUser.username,
          "email" : foundUser.email,
          "imageurl" : foundUser.imageurl,
          "roles" : foundUser.roles 
         }
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '5h'}
    )
    
  //define refreshtoken
  const refreshToken = jwt.sign(
    { "_id" : foundUser._id,
      "username": foundUser.username,
      "email" : foundUser.email,
      "imageurl" : foundUser.imageurl,
      "roles" :  foundUser.roles 
    },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
  )
     
  // .... .. Saving the refresh token .....
   foundUser.refreshToken = refreshToken
   const result = await foundUser.save()
  // ..............
  // save to cookie and send to user ... ...
     setCookie('jwt', refreshToken , {req, res,
          httpOnly: true ,
          maxAge: 24 * 60 * 60 * 1000 ,
       sameSite: "Strict",
          path: "/"
          // secure : true ..... does not work wth thunder client ....
     })
  
  // res.json({ accessToken })
  
 return { accessToken }

}

