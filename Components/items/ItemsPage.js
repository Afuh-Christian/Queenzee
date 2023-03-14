
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchItems, selectAllErrors, selectAllItems, selectAllStatus } from '../../dataStore/ItemSlice/ItemSlice';
import OneItem from './Item';
import classes from './Items.module.css'

function ItemsPage() {
 const itemStatus = useSelector(selectAllStatus)
   const errors = useSelector(selectAllErrors)
   const item_s = useSelector(selectAllItems)
    const dispatch = useDispatch()

 useEffect(()=>{
  
  if(itemStatus === ''){
    dispatch(fetchItems())
  }

 },[itemStatus,dispatch,item_s])

   
    console.log(item_s)

 let QueryItems 
if(itemStatus === "loading"){
  QueryItems =  <p>loading......</p>
} else if (itemStatus === "Succeed") {
   if(item_s.length === 0) return QueryItems = <p>None ....</p> 
 try{  QueryItems = item_s.map((item) => {
    return <OneItem itemID_Parent={item._id} name={item.name} price={item.price} avatar={item.imageurl}/>
 })
 } catch (err) {
    console.log("try")
}

}else if(itemStatus === "failed") {
  QueryItems = <p>{errors}</p>
}
    return ( 
        <div className={classes.body}>
    <section className={classes.section}>
{QueryItems}
 <div style={{height:10}}></div>
    </section>
</div>
     );
}
export default ItemsPage;