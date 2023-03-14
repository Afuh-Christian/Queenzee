import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllUsers, fetchUsers, UserError, UserStatus } from '../../../dataStore/UserSlice/UserSlice'
import SingleUser from './SingleUser'
import userclasses from "./UserSettings.module.css"

function UserSettings() {
  const users = useSelector(AllUsers)
  const status = useSelector(UserStatus)
  const error = useSelector(UserError)
  const dispatch = useDispatch()
  useEffect(() => { 
    if (status === "") {
    dispatch(fetchUsers())
    console.log("user fetching .............")
    }
  },[status,dispatch,users])


  let Users  
  if (status === "loading") {
    Users  = <p>Users are Loading ... </p>
  }
  if (status === "failed") {
    Users =  <p>Connection problem ... try later </p>
  }
  if (status === "success") {
    console.log("Users ... ")
    Users = users.map((u) => {
      // console.log(u)
      // eslint-disable-next-line react/jsx-key
      return <SingleUser username={u.username} imageurl={u.imageurl} email={u.email} _id={u._id} roles = {u.roles} />
    })
  }

  return (
    
    <section className={userclasses.div}>

      {Users}
    
      </section>

  )
}

export default UserSettings