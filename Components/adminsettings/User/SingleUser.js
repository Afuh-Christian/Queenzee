import userclasses from "./UserSettings.module.css"
import React from 'react'
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setInitialUser } from "../../../dataStore/AdminSlice/UserConfigSlice"
import Image from "next/image"

function SingleUser({ username, imageurl, email, _id, roles }) {
  const dispatch = useDispatch()
  const router = useRouter()
   function Detail(){
    router.push(`/SettingsPage/UserSettings/${_id}`)
     dispatch(setInitialUser({ username, imageurl, email, _id, roles }))
    //  console.log(username)
  }
    return (
      <div>
    <div className={userclasses.container} onClick={Detail}>
    <div className={userclasses.pic}><Image height={100} width={100} alt="" src={imageurl}/></div>
          <div className={userclasses.name}>{username}</div>
          <div className={userclasses.status}>{roles.Editor && <>Editor</> }</div>  
            </div>
            </div>
        
  )
}

export default SingleUser