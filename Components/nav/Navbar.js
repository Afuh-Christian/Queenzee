import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import c from "./Nav.module.css"
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from "next/link";
import { useRouter } from 'next/router'
import CreateItem from "../items/create/CreateItem";
import CreateCategory from "../home/create/CreateCategory";
import {TbArrowLeft} from "react-icons/tb"
import { currentLoggedinUser, LogoutThunk, RefreshLogin } from "../../dataStore/UserSlice/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import path from "path"
import Image from "next/image";


function Navbar({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RefreshLogin())
    }, [dispatch])

    // Logged in user ... 
    const currentUser = useSelector(currentLoggedinUser)

  
    const router = useRouter()
    const routeHomepage = () => {
        router.push('/')
        // setFormCat(false)
        // setForm(false)
    }

    const routeLoginpage = () => {
        if (!currentUser.user) router.push('/Login')
        // setFormCat(false)
        // setForm(false)
    }

    const routeSignUppage = () => {
        if (!currentUser.user) router.push('/Register')
        // setFormCat(false)
        // setForm(false)
    }
    const routeUserProfile = () => {
        if (currentUser.user) router.push('/UserProfile')
    }
    const Logoutbtn = () => {
        // if (!currentUser.user) router.push('/Login')
        dispatch(LogoutThunk())
        // setFormCat(false)
        // setForm(false)
    }


    
    const [active, setActive] = useState(true)
    
    const showNavbar = () => setActive(!active)
  
    const [active_u, setActive_u] = useState(true)
    
    const showNavbar_u = () => setActive_u(!active_u)
  
    // create ..... 
   
    // http post item .... 
    // const OnCreateForm = () => {
    //     setForm(!openform)
    // }

    // http post category .... 
    // const OnCreateFormCat = ()=>{
    //     setFormCat(!openformcat)
        
    // }

    // console.log(router.pathname.length)


    function GoBack() {
        if(window.localStorage.getItem("CurrentUserSettings")){ 
            window.localStorage.removeItem("CurrentUserSettings")
        }
        router.back()
    }
    console.log(router.pathname)
    return ( 
        <>
            <section className={c.nav}
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
    <li className={c.navbarlist}>
        <ul>
                            <li
                            // onClick={routeHomepage}
                            className={(router.pathname === "/") && c.on_page} ><Link href="/">Home</Link></li>
            {/* <li  className={(router.pathname === "/Contacts") && c.on_page}>Contacts</li> */}
            <li  className={(router.pathname.includes("ItemID")) && c.on_page}><Link href="/Shop">Shop</Link></li>
                            {/* {currentUser?.user && <li
                             className={(router.pathname === "/Chat") && c.on_page}>Chat</li>} */}
                            {(currentUser?.user?.roles?.Admin) && <li
                             className={(router.pathname === "/SettingsPage") && c.on_page}><Link href="/SettingsPage">Admin</Link></li>}
        </ul>
    </li>
                    <li className={c.hamberger_icon}
                  
                    >
                        
                        {
                            (router.pathname.includes("/SettingsPage/UserSettings") || router.pathname.includes("UserProfile")) &&
                            <div onClick={GoBack}>
                                  <TbArrowLeft/>   
                     </div>  ||
                            <div
                            onClick={showNavbar}
                                >
                            
                                {active && <FaBars /> || <FaTimes />}
                            </div>}
    </li>
                    <li className={c.title}>
        <ul>
            <li>
                        
            <Image
            src="/images/noto-v1_shopping-bags.svg"
            alt="Next.js Logo"
            width={30}
            height={25}
            priority
                                />
            </li>
            <li className={c.headerp}>
                <div className={c.header}>Queenzee Design</div>
            </li>
            <li>
                <Image  
                src="/images/openmoji_billed-cap.svg"
                 alt="Next.js Logo"
            width={30}
            height={25}
            priority
                />
            </li>
        </ul>
    </li>
                    <li onClick={
                        showNavbar_u
                    } className={c.profile}>
                         <Image
                            alt="slow internet"
                            height={45}
                            width={50}
                             src={currentUser?.user && currentUser.user.imageurl ||"/images/mdi_user-circle.svg"}/>
                      
                        {/* {currentUser?.user &&
                            <Image
                            alt="slow internet"
                            height={45}
                        width={45}
                                className={c.img} src={currentUser.user.imageurl} /> ||
                            <Image
                            alt="slow internet"
                            height={45}
                        width={45}
                                className={c.img} src="/images/mdi_user-circle.svg" />} */}
    </li>
</ul>
</section>
            <div  
                // className={c.slide_menu_active}
                className={active && c.slide_menu_hide || c.slide_menu_active}
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
{/* <ul>
                    <li 
                        
                        className={(router.pathname === "/") && c.on_page}
                     onClick={routeHomepage}
                    >Home</li>
                    <li
                     className={(router.pathname === "/Contacts") &&c.on_page}>Contacts</li>
                    <li
                     className={(router.pathname === "/shop") && c.on_page}>Shop</li>
                    <li
                     className={(router.pathname === "/Chat") &&  c.on_page}>Chat</li>
                    <li
                     className={(router.pathname === "/Admin") && c.on_page}>Admin</li>
</ul> */}

<ul>
                            <li
                            // onClick={routeHomepage}
                            className={(router.pathname === "/") && c.on_page}  onClick={showNavbar} ><Link href="/">Home</Link></li>
            {/* <li  className={(router.pathname === "/Contacts") && c.on_page}>Contacts</li> */}
            <li  className={(router.pathname.includes("ItemID")) && c.on_page}  onClick={showNavbar}><Link href="/Shop">Shop</Link></li>
                            {/* {currentUser?.user && <li
                             className={(router.pathname === "/Chat") && c.on_page}  onClick={showNavbar}>Chat</li>} */}
                            {(currentUser?.user?.roles?.Admin) && <li
                             className={(router.pathname === "/SettingsPage") && c.on_page}  onClick={showNavbar}><Link href="/SettingsPage">Admin</Link></li>}
        </ul>
            </div>
            <div  
                // className={c.slide_menu_user}
                className={active_u && c.slide_menu_user_hide || c.slide_menu_user}
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

                    {currentUser?.user &&
                        <>  <li
                        onClick={() => { routeUserProfile(); showNavbar_u(); }} 
                    >Edit account</li>
                      <li
                            // onClick={Logoutbtn}
                            onClick={() => { Logoutbtn(); showNavbar_u(); }} 
                        >Logout</li></>
                    ||
                        <>
                        <li
                            // onClick={routeLoginpage}
                         onClick={() => { routeLoginpage(); showNavbar_u(); }} 
                        >Login</li>
                    <li
                            onClick={() => { routeSignUppage(); showNavbar_u(); }} 
                        >Sign Up</li></>
                   }
</ul>
            </div>


            <section
                // className={c.child}
            >
                {children}
                {/* <CreateCategory openform={openformcat} OnCreateForm={OnCreateFormCat}/> */}
                {/* <CreateItem openform={openform} OnCreateForm={OnCreateForm}/> */}
            </section>

         
 </>   
)
}


export default Navbar;










