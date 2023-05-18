import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../dataStore/CategorySlice/CategorySlice";
import { currentLoggedinUser } from "../../dataStore/UserSlice/AuthSlice/AuthSlice";
import c from "./HomeQ.module.css"
import UpdateCategory from "./update/UpdateCategory";
import {RiDeleteBin6Line } from "react-icons/ri"
import {MdOutlineModeEdit } from "react-icons/md"
import Image from "next/image";

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

       
                <li>
                    <ul>
                <li><Image
                    width={200}
                    height={200}
                    className={c.cap} src={avatar} alt="" /></li>
                        <li className={c.txt}>
                            <div className={c.des}>
                                <div>{name}
                                    </div>
                                {/* <div>Price</div> */}
                            </div>
                        </li>
                        {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor) &&
                        <li className={c.del_edit}>
                            <div className={c.edit_icon} onClick={OnUpdateForm}><MdOutlineModeEdit /></div>
                            <div className={c.del_icon} onClick={deleteCat}><RiDeleteBin6Line /></div>
                     
                        </li>}
                    </ul>
                </li>
            
                
     
     



      
        </>
     );
}

export default Category;