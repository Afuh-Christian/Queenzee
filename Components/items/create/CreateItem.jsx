
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from  "./CreateItem.module.css"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, postItemApi } from '../../../dataStore/ItemSlice/ItemSlice';
import { currentLoggedinUser } from '../../../dataStore/UserSlice/AuthSlice/AuthSlice';

   function CreateItem({openform,OnCreateForm}) {

       // Logged in user ... 
     const currentUser = useSelector(currentLoggedinUser)
    
    const [formobject, setFormPost] = useState({
      // id:nanoid(),
      name:"",
      price: "" ,
      imageurl:null
    }) 

    const dispatch = useDispatch()
  if(!openform) return null;
 function B(e){
       setFormPost((prevdata) => {
       const {name, value, files} = e.target
        if(name==='imageurl'){
          return {
            ...prevdata,
            [name] : files[0]
          }
        }else{
          return {
            ...prevdata,
            [name] : value
          }
        }
      
 })
     }
     
     
const post = async () => {
        
  const form = await new FormData()

  await form.append("name", formobject.name)
  await form.append('price',formobject.price)
  await form.append("Itemfile", formobject.imageurl)

  // if(formobject.imageurl === null) return alert("Photo must be present .. ")
  const accesstoken = currentUser.accessToken?.accessToken
  if (formobject.imageurl === null) return alert("Please provide and image..")
  await dispatch(postItemApi({ accesstoken, form }))

  

  await setFormPost(prev => ({
    ...prev,    
    imageurl : null
  }))
  await OnCreateForm()

  // await dispatch(fetchItems())

  // await window.location.reload()
  
     }

     

   if(formobject) console.log(formobject.name)
   if(formobject) console.log(formobject.price)
     if (formobject) console.log(formobject.imageurl)
     
  return (
    <div onClick={OnCreateForm} className={classes.overlay_A}  >
      <div onClick={
        (e) => {
          e.stopPropagation()
        }
      } className={classes.modalContainer_A}>
        <div className={classes.modalRight}>
          <p onClick={OnCreateForm} className={classes.closeBtn_A}><FaTimes/></p>
            <h1>Add item</h1>
          <div className={classes.content_A}>

                <div>
                  <input
                  type='text'
                className={classes.name_c}
                  name='name'
                  placeholder='   Name'
                  onChange={B}
                  value={formobject.name}
                  />
                  </div>

                  <div>
                  <input
                  type='number'
                className={classes.price_c}
                  name='price'
                  placeholder='   Price'
                  onChange={B}
                  value={formobject.price}
                  />
                  </div>

                  <div>
                  <input
                  type='file'
                className={classes.price_c}
                  name='imageurl'
                  placeholder='   imageurl'
                  onChange={B}
                  // value={formobject.imageurl}
                  />
                  </div>

                  <div>
              <button className={classes.btn_c}  disabled={(formobject.name === "" && formobject.price === '')?  true : false }
                  onClick={post}
                  
                  >OK</button>
                  {/* <button  className={classes.btn_c' type='submit'>OK</button> */}
                  </div>
                {/* </form> */}
                
            </div>
          
        </div>
    </div>
</div>
  )
}


export default React.memo(CreateItem)