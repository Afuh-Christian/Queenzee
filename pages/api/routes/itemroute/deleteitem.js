import multer from "multer"
import nextConnect from "next-connect"
import { connectDB } from "../../config/mongodbconnect"
import path from 'path'
import Item from "../../models/Item"

import verifyJWT from "../../middleware/verifJWT"
import verifyRoles from "../../middleware/verifyroles"
import User_Roles from "../../models/RoleCodes"



// const fsPromises = require('fs').promises

import fsPromises from 'fs/promises'


export const config = {
    api:{
        bodyParser:false ,
    }
}

const Handler = nextConnect() 

connectDB()

let dataimage = Date.now()
let storage = multer.diskStorage({
    destination :  (req, file, cb) => {
        cb(null , path.join(process.cwd() , "public"))
    },
    filename: (req, file , cb ) => {
        cb(null , dataimage + file.originalname)
    }
})

let upload = multer({
    storage: storage
})

let uploadfile = upload.single('file')


Handler.use(uploadfile)

Handler.post( async (req, res) => {
    if(req.method === "POST"){
       if (!req?.body?._id) {
            return res.status(400).json({ 'messsage': 'An ID is required ... ' })
        }
    
        const item = await Item.findOne({ _id: req.body._id })
        const itemimage = item.imagename

        const itemimagerepeat = await Item.find({ imagename: itemimage })
    
        // if error in no Item
        if (!item) {
            res.status(204).json({ 'message': `Item with id: ${req.body._id} does not exist` })
        }
        console.log(item.imagename)
        if(itemimagerepeat.length === 1) await fsPromises.unlink(path.join(process.cwd(), 'public','uploads','Items', item.imagename))
        const result = await Item.deleteOne({ _id: req.body._id })
        const listitems = await Item.find() 
    
        return res.json(listitems)    

        
    }
})

// export default Handler

export default  verifyJWT(verifyRoles(Handler, User_Roles.admin, User_Roles.editor))
