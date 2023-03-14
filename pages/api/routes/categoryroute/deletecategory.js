
import multer from 'multer'
import nextConnect from 'next-connect'
import path from 'path' 
import { connectDB } from '../../config/mongodbconnect'
import Category from '../../models/CategoryModel'
import fsPromises from 'fs/promises'
import verifyJWT from "../../middleware/verifJWT"
import verifyRoles from "../../middleware/verifyroles"
import User_Roles from "../../models/RoleCodes"

export const config = {
    api: {
        bodyParser:false 
    }
}

const Handler = nextConnect() 

connectDB() 
let datanow = Date.now()
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null , path.join(process.cwd(), "public")) 
    }
    , 
    filename: (req, file, cb) => {
        cb(null , datanow + file.originalname )
    }
})

let upload = multer({
    storage: storage
})

let fileupload = upload.single('file')

Handler.use(
    fileupload
)

Handler.post(async(req, res) => {
        if (req.method === "POST") {
        if(!req?.body?._id){
            return res.status(400).json({'messsage' : 'An ID is required ... '})
        }
    
        const category = await Category.findOne({_id :req.body._id})
        const itemimage = category.imagename
        const itemimagerepeat = await Category.find({ imagename: itemimage })
    
        // if error in no Category 
        if(!category){
           return res.status(200).json({'message': `Category with id: ${req.body._id} does not exist`})
            }
            
            // await fsPromises.unlinkSync(path.join(process.cwd(), 'uploads', 'category', category.imagename))
            if(itemimagerepeat.length === 1)  await fsPromises.unlink(path.join(process.cwd(), 'public','uploads','category', category.imagename))
            const result = await Category.deleteOne({ _id: req.body._id })
          
       return res.json(category)
    }
    
})


export default  verifyJWT(verifyRoles(Handler, User_Roles.admin, User_Roles.editor))
