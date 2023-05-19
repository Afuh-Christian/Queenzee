import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentLoggedinUser, postUsers, RefreshLogin } from "../../dataStore/UserSlice/AuthSlice/AuthSlice";

import registerstyle from "./Register.module.css"


function RegisterPage() {
    const router = useRouter()
    const currentUser = useSelector(currentLoggedinUser)
    const dispatch = useDispatch()
    const [formobject, setFormobject] = useState({
        username: null, 
        email:null,
        password: null, 
        password2: null,
        imageurl: null, 
    })
    useEffect(() => {
        if(currentUser?.accessToken){
             router.push("/")
        }
       
    }, [currentUser, router])

    function OnInput(e) {
        const { value, name, files } = e.target
        setFormobject(prevdata => {
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

  
        if(formobject){ const {username , password , password2 , imageurl , email} = formobject
        if(username) console.log(username)
        if(password)  console.log(password)
        if(password2)  console.log(password2)
        if(imageurl)  console.log(imageurl)
            if (email) console.log(email)
        }
       
    
    const OnFormSubmit = async () => {

        const form = await new FormData()
        await form.append("username", formobject.username)
        await form.append("password", formobject.password)
        await form.append("email", formobject.email)
        await form.append("Registerfile", formobject.imageurl)
        await dispatch(postUsers(form))
        // await dispatch(RefreshLogin())
    
    }

    return ( 
        
     <section className={registerstyle.section}>
     <div>
     <div className={registerstyle.form} action="" >
         <div>
         <div className={registerstyle.username}>
             <label htmlFor="username">Username : </label>
             <input type="text" name="username" id="username" placeholder="Enter Username" onChange={OnInput}/>
         </div>
         <div className={registerstyle.email}>
             <label htmlFor="email">Email : </label>
             <input type="email" name="email" id="email" placeholder="Enter Email" onChange={OnInput}/>
         </div>
         <div className={registerstyle.password}>
             <label htmlFor="password">Password : </label>
             <input type="password" name="password" id="password" placeholder="Enter password" onChange={OnInput}/>
         </div>
         <div className={registerstyle.password2}>
             <label htmlFor="password2">Confirm password : </label>
             <input type="password" name="password2" id="password2" placeholder="Confirm password" onChange={OnInput}/>
         </div>
         <div className={registerstyle.profilepic}>
             <label htmlFor="profilepic">Profile Photo:</label>
             <input type="file" name="imageurl" id="profilepic" onChange={OnInput}/>
         </div>
     </div>

         <div className={registerstyle.submit}>
             <button onClick={OnFormSubmit} type="submit">Sign Up</button>
         </div>
         
         <div className={registerstyle.login}>
             <p>Already have an account :  <Link href="/Login">Login</Link></p>
         </div>
     </div>
 </div>
 </section>
     );
}

export default RegisterPage

