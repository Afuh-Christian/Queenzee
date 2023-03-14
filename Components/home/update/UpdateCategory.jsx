
import axios from 'axios';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { putCategory } from '../../../dataStore/CategorySlice/CategorySlice';
import { currentLoggedinUser } from '../../../dataStore/UserSlice/AuthSlice/AuthSlice';
import classes from  "./UpdateCategory.module.css"

 function UpdateCategory({ _id ,name, openform,OnCreateForm}) {
   const currentUser = useSelector(currentLoggedinUser)
   const dispatch = useDispatch()
    const [formobject, setFormPost] = useState({
      _id:_id,
      name:name,
      price: "" ,
      imageurl:""
    }) 

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

   const OnSForm = async () => {
    const FData = await new FormData()
    await  FData.append('name', formobject.name)
        await FData.append('_id', formobject._id)
     await FData.append('categoryfile', formobject.imageurl)
      const accesstoken = currentUser.accessToken?.accessToken
      await dispatch(putCategory({ accesstoken, FData }))
    await OnCreateForm()
    // await window.location.reload()

   }
   return (
    
    <div onClick={OnCreateForm} className={classes.overlay_A}  >
      <div onClick={
        (e) => {
          e.stopPropagation()
        }
      } className={classes.modalContainer_A}>
        <div className={classes.modalRight}>
          <p onClick={OnCreateForm} className={classes.closeBtn_A}><FaTimes/></p>
            <h1>Update {name}</h1>
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
                  type='file'
                className={classes.price_c}
                  name='imageurl'
                 
                  onChange={B}
              
                  />
                  </div>  
               
                  <div>
              <button className={classes.btn_c}  disabled={(formobject.name === "" && formobject.price === '')?  true : false }
                  onClick={OnSForm}
                  
                  >OK</button>
           
                  </div>

                
            </div>
          
        </div>
    </div>
</div>
  )
}
   export default React.memo(UpdateCategory);