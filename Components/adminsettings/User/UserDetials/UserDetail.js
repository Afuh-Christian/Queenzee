import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, MakeEditorApi, setInitialUser } from '../../../../dataStore/AdminSlice/UserConfigSlice'
import { currentLoggedinUser } from '../../../../dataStore/UserSlice/AuthSlice/AuthSlice'
import userclasses from './UserDetial.module.css'


function UserDetail() {
  const user = useSelector(getCurrentUser)
  const [localstore , setLocalstore]  = useState(null)
  const dispatch = useDispatch()
 


    useEffect(() => {
      if (!user?.username) {
      const localuser = JSON.parse(window.localStorage.getItem("CurrentUserSettings"))
      dispatch(setInitialUser(localuser))
      setformobject(prev => ({
        ...prev,
        _id: localuser._id,
        isEditor : (localuser.roles.Editor)? true : false
      })
        )
      }
    }, [user?._id])
  

  const [formobject, setformobject] = useState({
    isEditor :(user?.roles?.Editor)? true : false, 
    _id : user._id,
  })

  
  const currentUser = useSelector(currentLoggedinUser)
  const router = useRouter()

 
 



  //  if(currentUser?.roles?.Editor) alert(`${currentUser.username} is now an Editor `)
  
  function MakeEditor(e) {
    const { name, type, value } = e.target
    setformobject(prev => ({
      ...prev, 
      isEditor : !prev.isEditor
    })
    )
  }

  async function GoBack() {
  
    const accesstoken = await currentUser.accessToken?.accessToken
    await console.log(accesstoken)
    try{
      await dispatch(MakeEditorApi({ accesstoken, formobject }))
      await window.location.reload()
    } catch (err) {
      alert("Go back and try again")
    }
   
  }

  console.log(formobject)

  return (

      <>
      <section className={userclasses.section}>
        <div className={userclasses.pic}><img src={user.imageurl}/></div>
        <div className={userclasses.name}>{user.username}  </div>
        <div className={userclasses.email}>{user.email}  </div>
        {/* <div className={userclasses.email}>{user._id} </div>
        <div className={userclasses.email}>{user.roles.User}  </div>
        <div className={userclasses.email}>{user.roles.Admin && user.roles.Admin }</div> */}

        <div>

          <div className={userclasses.form}>
            <div>
            <label htmlFor='isAdmin'>Let this User be an Editor</label>
            <input
              id='isAdmin'
              name='isAdmin'
                type="checkbox"
                checked={formobject.isEditor}
                className={userclasses.input}
                onChange={MakeEditor}
            />

            </div>
            <button  onClick={GoBack}    className={userclasses.btniseditor}>Save</button>
            
          </div>

          <button className={userclasses.deleteUserbtn}>Delete User</button>
        </div>
     </section>
      </>
  )
}

export default UserDetail