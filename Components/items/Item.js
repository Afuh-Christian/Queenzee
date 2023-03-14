import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemApi, fetchItems } from '../../dataStore/ItemSlice/ItemSlice';
import { currentLoggedinUser } from '../../dataStore/UserSlice/AuthSlice/AuthSlice';
import classes from './Items.module.css'
import UpdateItem from './update/UpdateItem';
import UpdateCategory from './update/UpdateItem';


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
            
        <div className={classes.item}>
        <div className={classes.img}><img src={avatar} alt=""/></div>
        <div className={classes.share}>Buy</div> 
        <div className={classes.itemdescription}>
                <div className={classes.name}>{name}</div>
       <div className={classes.price}>{price}frs</div> 
                </div>
                {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor) &&
                    <div className={classes.btn}>
                        <button className={classes.btn1} onClick={OnUpdateForm}>Update</button>
                        <button className={classes.btn2} onClick={deleteitem}>Delete</button>
                    </div>
                }
                </div> </>
     );
}

export default OneItem;