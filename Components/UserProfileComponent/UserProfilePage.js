import classes from "./UserPorfile.module.css"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { currentLoggedinUser, EditAccountThunk } from "../../dataStore/UserSlice/AuthSlice/AuthSlice"
import Image from "next/image"

function UserProfilePage() {
    const currentUser = useSelector(currentLoggedinUser)
    // const { _id, username, email, imageurl } = currentUser?.user
    const dispatch = useDispatch()
    // console.log(currentUser?.user)
    const [formobject, setFormobject] = useState({
        _id: "",
        username:"", 
        email:"", 
        imageurl: null
    })

    useEffect(() => {
        // if(!formobject?._id){
            const localdata = JSON.parse(window.localStorage.getItem("UserProfile"))
       
        setFormobject(prev => {
            return {
                ...prev, 
                _id: localdata?._id,
                username:localdata?.username, 
                email: localdata?.email, 
                imageurl: null
            }
        })
    // }
       
    }, [])
    
    const updateform = (e) => {
        setFormobject(prevdata => {
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

    
    const submitform =  () => {
        const form =  new FormData()
         form.append("_id", formobject._id)
         form.append("email", formobject.email)
         form.append("username", formobject.username)
         form.append("Editfile", formobject.imageurl)
    //     console.log("shit...")
        dispatch(EditAccountThunk(form))
    }
   

    return (
        <div className={classes.div}>
            <div className={classes.image}><Image
                height={300}
                width={300}
                alt="hello"
                src={currentUser?.user?.imageurl}
            /></div>
            <div className={classes.form}>
                <div>
                    <input type="file" name="imageurl" onChange={updateform}></input>
                </div>
                <div>
                    <input type='text' name="username" value={formobject?.username} onChange={updateform} />
                </div>
                    <div>
                <input type='text' name="email" value={formobject?.email} onChange={updateform}/>
                </div>

                
                <button onClick={submitform}>save</button>
               
               
            </div>

         
                <button>Delete Account</button>
           
        </div>
    )
}

export default UserProfilePage


