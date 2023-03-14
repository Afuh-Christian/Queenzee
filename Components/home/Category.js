import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../dataStore/CategorySlice/CategorySlice";
import { currentLoggedinUser } from "../../dataStore/UserSlice/AuthSlice/AuthSlice";
import classes from "./HomeQ.module.css"
import UpdateCategory from "./update/UpdateCategory";


function Category({ _id, avatar, name }) {
  const currentUser = useSelector(currentLoggedinUser)
    const [openupdateform, setForm] = useState(false)
      // update .... put .... 
      const OnUpdateForm = () => {
        setForm(!openupdateform)
  }
  
  const dispatch = useDispatch()
   async function deleteCat (){
    const form = await new FormData() 
    await  form.append("_id", _id)
    
    // dispatch(deleteCategory(form))
    const accesstoken = currentUser.accessToken?.accessToken
    await  dispatch(deleteCategory({ accesstoken, form }))
    // await  window.location.reload()
  }
    return ( <>
        <UpdateCategory _id={_id} name={name} openform={openupdateform} OnCreateForm={OnUpdateForm} />

<div className={classes.item}>                
                  <div className={classes.subitem}><img src={avatar} className={classes.b}  onClick={OnUpdateForm}/></div>
                  <div className={classes.ww} onClick={deleteCat}>{name}</div>
        </div>
        </>
     );
}

export default Category;