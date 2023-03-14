
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { AllCategories, fetchCategories, selectAllCategories, selectAllCategoryErrors, selectAllCategoryStatus } from "../../dataStore/CategorySlice/CategorySlice"
import Category from "./Category"
import classes from "./HomeQ.module.css"
import React, { useEffect, useState } from "react"
import UpdateCategory from "./update/UpdateCategory"
import { nanoid } from "@reduxjs/toolkit"
import { currentLoggedinUser } from "../../dataStore/UserSlice/AuthSlice/AuthSlice"



function HomeQ() {
    const currentUser = useSelector(currentLoggedinUser)
    // const data = useSelector(AllCategories)

   const router = useRouter() 
    


    const routeItemsPage = () => {
        router.push(`/Shop`)
        // Router.route("../../pages/Items")
    }

    const categories = useSelector(selectAllCategories)
    const Errors = useSelector(selectAllCategoryErrors) 
    const Status = useSelector(selectAllCategoryStatus)
    const dispatch = useDispatch()

    useEffect(()=>{
        const l = window.location.pathname
        console.log(JSON.stringify(l))  

        if(Status === ""){
            dispatch(fetchCategories())
        }
    },[Status,dispatch,categories])

    console.log(categories)

    let QueryCategory

    if(Status === "loading"){
        QueryCategory = <p>Loading....</p>
    }else if(Status === "failed"){
        QueryCategory = <p>{Errors}</p>
    } else if (Status === "succeeded") {
        if (categories.length === 0) { QueryCategory = <p>None ....</p> }else{ 
        try {
            QueryCategory = categories.map((category) => {
       
            // eslint-disable-next-line react/jsx-key
            return <Category _id={category?._id && category._id || nanoid()}  name={category?.name} avatar={category?.imageurl}  />
        })
    } catch (err) {
        console.log("try")
            }
        }
      
    }

    /* 
      if(item_s.length === 0) return QueryItems = <p>None ....</p> 
 try{  QueryItems = item_s.map((item) => {
    return <OneItem itemID_Parent={item._id} name={item.name} price={item.price} avatar={item.imageurl}/>
 })
 } catch (err) {
    console.log("try")
}
    */


    //.............Commands ...........................


  return (
    
      <section className={classes.body_home}>
         
          <div className={classes.pic_cover}>     
           
              <img className={classes.pic} src="ziiface.jpg" alt=""/>
 </div>


          <div className={classes.wrapper}>
              
              {QueryCategory}
              
              {/* {data.map((d) => <Category name={d.name} price={d.price} pic={d.pic_url} />)}  */}
            
        
 </div> 

 <div className={classes.more}>
    <button onClick={routeItemsPage} className={classes.btn}><div className={classes.more_a}>shop</div></button>
 </div>

          <div className={classes.Text}>
     <div className={classes.Text_message}>
         <div className={classes.Text_words}>
         askdfjaksdfjakdjf ksdjfaksdjf
         kfjaskdfjaksdjfa;ksdjfa;skdjf
         aksdjfaksldjfaksdjfaksdjfkasdjf
         aksldfjaksldjfkasdjfkasjdfkasdf
         askdjfkasdjfkasjdfkasjdfklajsdfka
         sdjfaksdjfkasdjfaksjdfkasjdfka
         aksdjfaksdfjkasdjfkasjdfkajsdf
         aksjdfkasjdfkajsdfkjaksldfjlasd
         akjsdfjasldkfjaksdfjlaksdjfalskdf
         jkasldfjlaksjdfklasjdflkajsdflkasjdfklaj
         aksdflkasjdflkajsdlfajsdlfkjalsdkfj
         kasjdflajsdklfjalskdfjalksdjflaksdjf
         kajsdflajsldkfjaklsdfjaklsdjfakldf
         kajsdfklajsdlfjadlkjklfajslfjasdf
     </div>
     </div>
 </div>
         
              <div className={classes.help_about}>
              <div className={classes.help} >Help</div>
              {(currentUser?.user?.roles?.Admin) &&
                  <div className={classes.about} ><Link href="/SettingsPage">Settings</Link></div>
                }
                  </div>
          



 <div className={classes.Chrisdev_cover}>
     <div className={classes.Chrisdev}>
         <a className={classes.Chrisdev_a} href="https://wa.me/qr/DHNPHYO4JBXED1" target="_blank" rel="noreferrer">Developer@</a>
     </div>
 </div>


</section>
  )
}

export default HomeQ