import { connectDB } from '../../config/mongodbconnect';

const { getCookies } = require('cookies-next');
const jwt = require('jsonwebtoken');
const { default: UserModel } = require('../../models/UserModel');


async function Handler(req, res) {
    await connectDB()
    const cookies = getCookies({ req, res });
    if(!cookies?.jwt) return res.status(401).json("Unauthorized")//UnAuthorized .... 

    const refreshToken = cookies.jwt

    // console.log(refreshToken)
    
    const foundUser = await UserModel.findOne({refreshToken : refreshToken}).exec()
   if(!foundUser) return res.status(403).json("Forbidden") // forbidden .... 
  
    //evaluate refreshToken .... 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            console.log("Hello" + decoded.username)
            if(err || foundUser.username !== decoded.username) return res.status(403).json("Forbidden") //Forbidden    !== decoded.username
        
           
//    console.log(refreshToken)
//    console.log(foundUser.refreshToken)

            // const roles = Object.values(foundUser.roles)
    const accessToken = jwt.sign(
                {
                   "UserInfo" : {
                    "_id" : foundUser._id,
                        "username": foundUser.username,
                        "email" : foundUser.email,
                        "imageurl" : foundUser.imageurl,
                    "roles" : foundUser.roles
                   }    
                } ,
                process.env.ACCESS_TOKEN_SECRET, 
                {expiresIn: '5h'}
            )
            // send the access token 
         return   res.json({accessToken})
        
        }
    )
} 

export default Handler




