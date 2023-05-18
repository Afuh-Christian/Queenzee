import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemApi, fetchItems } from '../../dataStore/ItemSlice/ItemSlice';
import { currentLoggedinUser } from '../../dataStore/UserSlice/AuthSlice/AuthSlice';
import c from './Items.module.css'
import UpdateItem from './update/UpdateItem';
import UpdateCategory from './update/UpdateItem';

import {RiDeleteBin6Line } from "react-icons/ri"
import {MdOutlineModeEdit } from "react-icons/md"
import Image from 'next/image';


function OneItem({ itemID_Parent, avatar, name, price }) {

    const currentUser = useSelector(currentLoggedinUser)
    const [openupdateform, setForm] = useState(false)

    const OnUpdateForm = () => {
        setForm(!openupdateform)
    }
   
    const dispatch = useDispatch()

   
    async function deleteitem() {
      
        const formdata = await new FormData() 
       await formdata.append("_id",itemID_Parent)

        const accesstoken = currentUser.accessToken?.accessToken
        await dispatch(deleteItemApi({ accesstoken, formdata }))
        // await window.location.reload()  
        // await dispatch(fetchItems())
    }
    

    return ( 
        <>
            <UpdateItem _id={itemID_Parent} avatar={avatar} name={name} price={price} openform={openupdateform} OnCreateForm={OnUpdateForm} />
            <li>
                <ul>
                    <li><Image
                        width={200}
                        height={200}
                        src={avatar} alt="" />
                    </li>
                    <li className={c.txt}>
                        <div className={c.des}>
                            <div>
                              {name}
                            </div>
                            <div>{price} frs</div>
                        </div>
                    </li>
                    {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor) &&
                        <li className={c.del_edit}>
                            <div className={c.edit_icon} onClick={OnUpdateForm}><MdOutlineModeEdit /></div>
                            <div className={c.del_icon} onClick={deleteitem}><RiDeleteBin6Line /></div>
                     
                        </li>
                    }
                </ul>
            </li>
  
      
       </>
     );
}

export default OneItem;