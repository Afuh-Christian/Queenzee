

import multer from "multer";
import path from "path"
import nextConnect from "next-connect";
import { connectDB } from "../../config/mongodbconnect";
import Category from "../../models/CategoryModel";
import verifyJWT from "../../middleware/verifJWT"
import verifyRoles from "../../middleware/verifyroles"
import User_Roles from "../../models/RoleCodes"

import fsPromises from 'fs/promises'

export const config = {
    api: {
        bodyParser: false
    }
}


const Handler = nextConnect()

connectDB()

let dataimage = Date.now()
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "public" , "uploads");
        cb(null, path.join(process.cwd(), "public" , "uploads", "category" ));
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, dataimage + file.originalname)
    },
});

let upload = multer({
    storage:storage,
})
let uploadfile = upload.single("categoryfile")
Handler.use(uploadfile)
Handler.post(async (req, res) => {

    // let url = "http://localhost:3000/"
    // let parentpath = "uploads/"
    // let filename = req.file.filename
    // let result =  ImageModel.create({
    //     image : url + parentpath + filename 
    // })
    //url + parentpath +
    let url = "/"
    let parentpath = "uploads/category/"
    let filename = req.file.filename

    // console.log(filename)

    if (req.method === "POST") {
    
        if (!req?.body?.name ||  !req?.file?.filename) {
            return  res.status(400).json('message', "name and file  are requird")
        }
        try {
            const cat = await Category.findOne({ name: req.body.name }).exec()
            if (cat) {
                const itemimagerepeat = await Category.find({ imagename: filename })
                if (itemimagerepeat.length === 0) {
                    await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'category', filename))
                }
                
                // const itemimage = cat.imagename
                // const itemimagerepeat = await Item.find({ imagename: itemimage })
                // if(itemimagerepeat.length === 1)  await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'Items', item.imagename))
                return res.status(409).json("This Item  already exist") // duplicates
            }
            const result = await Category.create({
                name: req.body.name,
                imageurl: url + parentpath + filename,
                imagename: filename,
                
            })
            return res.status(201).json(result)
        } catch (err) {
            console.log(err)
        }
        // }
    
        // console.log("req", req.file)
        // console.log("body", req.body)
       
    }
})























Handler.put(async (req, res) => {
        if (req.method === "PUT") {
        // return res.json("Put working..")
    // if(!req?.body?._id){
    //     return res.status(400).json({'messsage' : 'An ID is required ... '})
    // }
    //get the Category 
    const category = await Category.findOne({_id : req.body._id})

    // if error in no Category
    // if(!category){
    //    return res.status(204).json({'message': `Category with id: ${req.body._id} does not exist`})
    // }

    //set the values of this new Category object .. 
    let url = "/"
    let parentpath = "uploads/category/"
    let filename = req.file?.filename ? req.file.filename : null 

    if(req.body?.name) category.name = req.body.name 
    // if(req.file?.filename) category.imageurl = url + parentpath + filename
    //         if (req.file?.filename) category.imagename = filename
    const itemimage = category.imagename
    const itemimagerepeat = await Category.find({ imagename: itemimage })

            if (req.file?.filename) {
                if (category.imagename) {
                    if(itemimagerepeat.length === 1)  await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'category', category.imagename))
                }
                category.imageurl = url + parentpath + filename
                category.imagename =  filename
         }
    const result = await category.save()

    //     console.log(result)
      return  res.status(200).json(result)
    // filter out the Category and replace it ...
    }

    // console.log(req.file)
    // console.log(req.body)
    
    return res.status(200).send("Category put ...........")
})



// export default Handler
export default  verifyJWT(verifyRoles(Handler, User_Roles.admin, User_Roles.editor))






















    




// async function Handler(req, res) {
//     await connectDB() 


//     // // ..........httpPOST
//     // if (req.method === "POST") {
//     //     // await connectDB() 
//     //     if(!req?.body?.name){
//     //         return res.status(400).json('message' , "first and last name are requird")
//     //     }
//     //     try {
//     //         const cat = await Category.findOne({ name: req.body.name })
//     //         if(cat) return  res.status(409).json(`${cat.name} already exist`) // duplicates
//     //         const result = await  Category.create({
//     //             name : req.body.name,
             
//     //         })
//     //        return res.status(201).json(result)
//     //     }catch(err){
//     //         console.log(err)
//     //     }   
//     // }  

//     //httpPUT


//     if (req.method === "DELETE") {
//         if(!req?.body?.id){
//             return res.status(400).json({'messsage' : 'An ID is required ... '})
//         }
    
//         const category = await Category.findOne({_id :req.body.id})
    
//         // if error in no Category 
//         if(!category){
//             res.status(200).json({'message': `Category with id: ${req.body.id} does not exist`})
//         }
    
//         const result  = await Category.deleteOne({_id :req.body.id })
    
    
//        return res.json(result)
//     }


//     // await mongoose.disconnect()

//     }  
    // export default Handler//verifyJWT(verifyRoles(Handler , User_Roles.admin , User_Roles.editor))






       