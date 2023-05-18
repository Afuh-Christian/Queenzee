
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { AllCategories, fetchCategories, selectAllCategories, selectAllCategoryErrors, selectAllCategoryStatus } from "../../dataStore/CategorySlice/CategorySlice"
import Category from "./Category"
import c from "./HomeQ.module.css"
import React, { useEffect, useState } from "react"
import UpdateCategory from "./update/UpdateCategory"
import { nanoid } from "@reduxjs/toolkit"
import { currentLoggedinUser } from "../../dataStore/UserSlice/AuthSlice/AuthSlice"
import Bottom from "../bottom/Bottom"
import CreateCategory from "./create/CreateCategory"
import Image from "next/image"



function HomeQ() {
    const currentUser = useSelector(currentLoggedinUser)
    // const data = useSelector(AllCategories)
    const [openformcat, setFormCat] = useState(false)

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
    const OnCreateFormCat = ()=>{
        setFormCat(!openformcat)
        
    }

  return (
      <> <CreateCategory openform={openformcat} OnCreateForm={OnCreateFormCat}/>
      
      <section className={c.home}
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
          <section className={c.hometop}
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
        <li>
            <ul>
                <li className={c.h1}>We get you the style that suits your taste</li>
                <li className={c.text}>We do our best to satisfy our customers , 
                    whatever their command requirements  and 
                    we do not take contracts that are above our 
                    capacity . 
                    You product will be complete and excellent as 
                    you wish for it to be </li>
                <li>
                    <ul>
                        <li className={c.btn}
                        onClick={
                            ()=>router.push('/Shop')
                        }
                        >shop</li>
                        <li className={c.btn}>make command</li>
                    </ul>
                </li>
            </ul>
        </li>
                      <li><Image
                          height={400}
                            width={400}
                          src="/images/WhatsApp Image 2023-03-19 at 3.10 1.svg" alt="nothing" srcset="" /></li>
    </ul>


</section>

















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
            <div className={c.txt}>What we produce</div>
            <div className={c.plus_icon}   onClick={OnCreateFormCat}   >+</div>
                  </li>
                      <>
                      <li className={c.item}>
            <ul>
                                  {QueryCategory}
                                  </ul>
        </li>
        </>
    </ul>
</section>

<section className={c.logo}>
                  <Image
                      height={200}
                      width={200}
                      src="/images/Logo.svg" alt="" className={c.logoimage}
                  />
</section>


<Bottom/>
</section>
          
</>
  )
}

export default HomeQ