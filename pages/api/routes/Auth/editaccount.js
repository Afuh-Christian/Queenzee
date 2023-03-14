import multer from "multer"
import nextConnect from "next-connect"
import { connectDB } from "../../config/mongodbconnect"
import path from 'path'
import UserModel from "../../models/UserModel"
import { login } from "./loginRoute"
import fsPromises from 'fs/promises'




export const config = {
    api: {
        bodyParser: false
    }
}

const Handler = nextConnect() 
connectDB() 
let dateItem = Date.now()
let storaged = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "public", "uploads", "Users"))
    },
    filename: function (req, file, cb) {
        cb(null, dateItem + file.originalname)
    }
});

let upload = multer({
    storage : storaged 
})

let uploadfile = upload.single("Editfile")
Handler.use(uploadfile)

Handler.put(async (req, res) => {
    // let url = "http://localhost:3000/"
    // let parentpath = "uploads/Users/"
    // let filename = req.file.filename

   

    if (req.method === "PUT") {
        // return res.json("Put working..")
    if(!req?.body?._id){
        return res.status(400).json({'messsage' : 'An ID is required ... '})
        }
        const {_id, username , email} = req.body
        const user = await UserModel.findOne({_id: _id})
    // if error in no item 
    if(!user){
       return res.status(204).json({'message': `Item with id: ${req.body._id} does not exist`})
    }

    //set the values of this new item object ..
  
        
    let url = "http://localhost:3000/"
    let parentpath = "uploads/Users/"
    let filename = req.file?.filename ? req.file.filename : null 
        

    if(req.body?.username) user.username = req.body.username 
    if(req.body?.email) user.email = req.body.email 

   
    if (req.file?.filename) {
           if(user.imagename) await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'Users', user.imagename))
           user.imageurl = url + parentpath + filename
        user.imagename = filename
        
    } 
  
        const loginconfirm = await login(user, req, res)
        const allusersindatabase = await UserModel.find() 
        const arrayusers = { ...loginconfirm, userArray: allusersindatabase }
        console.log(arrayusers)
        return res.json(arrayusers)
        // return res.json(loginconfirm)
    // const result = await item.save()

        // console.log(result)
    //   return  res.status(200).json(result)
    // filter out the item and replace it ...


    }

 
    console.log(req.file)
    console.log(req.body)
    return res.status(200).json("Hello")
})


export default Handler 




