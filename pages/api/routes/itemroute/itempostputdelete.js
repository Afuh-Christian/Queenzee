import nextConnect from "next-connect"
import multer from "multer"
import path from "path" 
import Item from "../../models/Item" 
import { connectDB } from "../../config/mongodbconnect"
import fsPromises from 'fs/promises'

import verifyJWT from "../../middleware/verifJWT"
import verifyRoles from "../../middleware/verifyroles"
import User_Roles from "../../models/RoleCodes"



export const config = {
    api: {
        bodyParser : false 
    }
}


const Handler = nextConnect() 
connectDB() 
let dateItem = Date.now()
let storaged = multer.diskStorage({
    destination:function (req, file, cb)  {
        cb(null, path.join(process.cwd(), "public" , "uploads" , "Items" ))
    },
    filename: function (req, file, cb){
        cb(null, dateItem + file.originalname)
    }
});

let upload = multer({
    storage : storaged 
})
let uploadfile = upload.single("Itemfile")
Handler.use(uploadfile)
Handler.post(async (req, res) => {
    let url = "http://localhost:3000/"
    let parentpath = "uploads/Items/"
    let filename = req.file.filename

    if (req.method === "POST") {
        // await connectDB() 
        if (!req?.body?.name || !req?.body?.price || !req?.file?.filename ) {
            return res.status(400).json('message', "first and last name are requird")
        }
        try {
            const cat = await Item.findOne({ name: req.body.name })
            if (cat) {
                const itemimagerepeat = await Item.find({ imagename: filename })
                if (itemimagerepeat.length === 0) {
                    await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'Items', filename))
                }
                
                // const itemimage = cat.imagename
                // const itemimagerepeat = await Item.find({ imagename: itemimage })
                // if(itemimagerepeat.length === 1)  await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'Items', item.imagename))
                return res.status(409).json("This Item  already exist") // duplicates
            }
            const result = await Item.create({
                name: req.body.name,
                price: req.body.price,
                imageurl :  url + parentpath + filename,
                imagename : filename,
            })
            await console.log(result.imagename)
            const listitems = await Item.find()
            return res.status(201).json(listitems)
      }catch(err){
            console.log(err)
            return err.message
        }   

  
     }  

}
)


Handler.put(async (req, res) => {
        //httpPUT
    if (req.method === "PUT") {
        // return res.json("Put working..")
    if(!req?.body?._id){
        return res.status(400).json({'messsage' : 'An ID is required ... '})
    }
    //get the item 
    const item = await Item.findOne({_id : req.body._id})

    // if error in no item 
    if(!item){
       return res.status(204).json({'message': `Item with id: ${req.body._id} does not exist`})
    }

    //set the values of this new item object ..
  
        
    let url = "http://localhost:3000/"
    let parentpath = "uploads/Items/"
    let filename = req.file?.filename ? req.file.filename : null 
        

    if(req.body?.name) item.name = req.body.name 
        if (req.body?.price) item.price = req.body.price 
        


        const itemimage = item.imagename
        const itemimagerepeat = await Item.find({ imagename: itemimage })

    if (req.file?.filename) {
        if (item.imagename) {
            if(itemimagerepeat.length === 1)  await fsPromises.unlink(path.join(process.cwd(), 'public', 'uploads', 'Items', item.imagename))
        }
               item.imageurl = url + parentpath + filename
            item.imagename =  filename
    } 
  
    const result = await item.save()

    const listitems = await Item.find()
      return  res.status(200).json(listitems)
    // filter out the item and replace it ...


    }

    // console.log(req.body)
    // console.log(req.file)

    return res.status(200).send("Item put ..... ")
})

// export default Handler


export default  verifyJWT(verifyRoles(Handler, User_Roles.admin, User_Roles.editor))












// export default Handler




// import verifyJWT from "../../middleware/verifJWT"
// import verifyRoles from "../../middleware/verifyroles"
// import Item  from "../../models/Item"
// import User_Roles from "../../models/RoleCodes"


// async function Handler(req, res) {
    
//     // ..........httpPOST
        
            
            


//     //httpPUT
//     if (req.method === "PUT") {
//         // return res.json("Put working..")
//     if(!req?.body?.id){
//         return res.status(400).json({'messsage' : 'An ID is required ... '})
//     }
//     //get the item 
//     const item = await Item.findOne({_id : req.body.id})

//     // if error in no item 
//     if(!item){
//        return res.status(204).json({'message': `Item with id: ${req.body.id} does not exist`})
//     }

//     //set the values of this new item object .. 
//     // item.id = req.body.id 
//     if(req.body?.name) item.name = req.body.name 
//     if(req.body?.price) item.price = req.body.price 
//     const result = await item.save()

//         console.log(result)
//       return  res.status(200).json(result)
//     // filter out the item and replace it ...


//     }

//     if (req.method === "DELETE") {
//         if (!req?.body?.id) {
//             return res.status(400).json({ 'messsage': 'An ID is required ... ' })
//         }
    
//         const item = await Item.findOne({ _id: req.body.id })
    
//         // if error in no Item
//         if (!Item) {
//             res.status(204).json({ 'message': `Item with id: ${req.body.id} does not exist` })
//         }
    
//         const result = await item.deleteOne({ _id: req.body.id })
    
    
//         return res.json(result)
//     }
// }

// export default      verifyJWT(verifyRoles(Handler, User_Roles.admin, User_Roles.editor))