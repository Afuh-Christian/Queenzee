
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from  "./CreateCategory.module.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postCategory } from '../../../dataStore/CategorySlice/CategorySlice';
import { currentLoggedinUser } from '../../../dataStore/UserSlice/AuthSlice/AuthSlice';

 function CreateCategory({openform,OnCreateForm}) {
   const currentUser = useSelector(currentLoggedinUser)
   const dispatch = useDispatch()
    const [formobject, setFormPost] = useState({

      name:"",

      imageurl:null
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

 
const post = async () => {
  const form = await new FormData()
  await form.append("name", formobject.name)
  await form.append("categoryfile", formobject.imageurl)
  if(formobject.imageurl === null) return alert("Photo must be present .. ")
  const accesstoken = currentUser.accessToken?.accessToken
  await dispatch(postCategory({ accesstoken, form }))
  await  OnCreateForm()
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
            <h1>Add Category</h1>
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
              <button className={classes.btn_c}  disabled={(formobject.name === "" )?  true : false }
                  onClick={post}
                  
                  >OK</button>
        
                  </div>

                
            </div>
          
        </div>
    </div>
</div>
  )
}


export default React.memo(CreateCategory)