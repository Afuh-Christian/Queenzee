
import { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchItems, selectAllErrors, selectAllItems, selectAllStatus } from '../../dataStore/ItemSlice/ItemSlice';
import { currentLoggedinUser } from '../../dataStore/UserSlice/AuthSlice/AuthSlice';
import Bottom from '../bottom/Bottom';
import CreateItem from './create/CreateItem';
import OneItem from './Item';
import c from './Items.module.css'
import { BsPlusSquare } from 'react-icons/bs'
import Image from 'next/image';

function ItemsPage() {
  const [openform, setForm] = useState(false)
 const itemStatus = useSelector(selectAllStatus)
   const errors = useSelector(selectAllErrors)
   const item_s = useSelector(selectAllItems)
  const dispatch = useDispatch()
  const currentUser = useSelector(currentLoggedinUser)


  // http post item
    const OnCreateForm = () => {
      setForm(!openform)
  }

  
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
  //  if(item_s.length === 0) return QueryItems = <p>None ....</p> 
 try{  QueryItems = item_s.map((item) => {
    return <OneItem key={item._id} itemID_Parent={item._id} name={item.name} price={item.price} avatar={item.imageurl}/>
 })
 } catch (err) {
    console.log("try")
}

}else if(itemStatus === "failed") {
  QueryItems = <p>{errors}</p>
}
    return ( 
      <>
        <CreateItem openform={openform} OnCreateForm={OnCreateForm} />
        <section className={c.bodyitem}>
        <section className={c.homemid}
  
    style={{
      "--backgroundColor": "rgb(35, 14, 35)",
      "--navtextColor": "white",
      "--Navtexthighlight": "rgb(121,118,118)",
      "--btnbackgroundColor":"rgb(48,48,52)",
      "--borderColor" : "rgba(56, 11, 56, 1)",
      "--textFontFamily" : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      "--textsizeNormal": `${15}px`,
      "--textsizeAverage": `${20}px`,
      "--boxShadow":" 7px 7px 10px -6px rgba(9, 9, 9, 0.25)"
  }}
        >

<ul>
    <li className={c.h1}>
      
        <input type="search" name="" id="" placeholder="Search Item"/>
        <div className={c.icon}></div>
            </li>
            {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor) && <li onClick={OnCreateForm}
              style={{ fontSize: "30px" }}
            ><BsPlusSquare /></li>}
    <li className={c.item}>
        <ul>
       
                {QueryItems}
         
        </ul>
    </li>
</ul>
</section>

        <section className={c.logo}
                 style={{
                  "--backgroundColor": "rgb(35, 14, 35)",
                  "--navtextColor": "white",
                  "--Navtexthighlight": "rgb(121,118,118)",
                  "--btnbackgroundColor":"rgb(48,48,52)",
                  "--borderColor" : "rgba(56, 11, 56, 1)",
                  "--textFontFamily" : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  "--textsizeNormal": `${15}px`,
                  "--textsizeAverage": `${20}px`,
                  "--boxShadow":" 7px 7px 10px -6px rgba(9, 9, 9, 0.25)"
              }}
        >
            <Image
              height={200}
              width={200}
              src="/images/Logo.svg"
              alt=""
            />
          </section>
      
        <Bottom />
            </section>
      </>
     );
}
export default ItemsPage;