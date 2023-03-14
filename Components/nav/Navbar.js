import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import classes from "./Nav.module.css"
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from "next/link";
import { useRouter } from 'next/router'
import CreateItem from "../items/create/CreateItem";
import CreateCategory from "../home/create/CreateCategory";
import {TbArrowLeft} from "react-icons/tb"
import { currentLoggedinUser, LogoutThunk, RefreshLogin } from "../../dataStore/UserSlice/AuthSlice/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import path from "path"

function Navbar({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(RefreshLogin())
    }, [])

    // Logged in user ... 
    const currentUser = useSelector(currentLoggedinUser)

    const [openform, setForm] = useState(false)
    const [openformcat, setFormCat] = useState(false)
    const router = useRouter()
    const routeHomepage = () => {
        router.push('/')
        setFormCat(false)
        setForm(false)
    }

    const routeLoginpage = () => {
        if (!currentUser.user) router.push('/Login')
        setFormCat(false)
        setForm(false)
    }
    const routeUserProfile = () => {
        if (currentUser.user) router.push('/UserProfile')
    }
    const Logoutbtn = () => {
        // if (!currentUser.user) router.push('/Login')
        dispatch(LogoutThunk())
        setFormCat(false)
        setForm(false)
    }
    
    const [active, setActive] = useState(true)
    
    const showNavbar = () => setActive(!active)
  
    // create ..... 
   
    // http post item .... 
    const OnCreateForm = () => {
        setForm(!openform)
    }

    // http post category .... 
    const OnCreateFormCat = ()=>{
        setFormCat(!openformcat)
        
    }

    // console.log(router.pathname.length)


    function GoBack() {
        if(window.localStorage.getItem("CurrentUserSettings")){ 
            window.localStorage.removeItem("CurrentUserSettings")
        }
        router.back()
    }
    
    return ( 
        <section className={classes.navbarmom}>

            {
                (router.pathname.includes("/SettingsPage/UserSettings") || router.pathname.includes("UserProfile")) &&

                <section className={classes.header}>
                        <div onClick={GoBack} style={{fontSize:40}}>
                         <TbArrowLeft/>
                        </div>
                        </section>
||

        <section className={classes.header}>
    <div className={classes.title}>
        <div className={classes.imgtitle}></div>
        <div className={classes.titletxt}>Queenzee</div>
    </div>

    <div className={classes.titleactions}>
                            <div className={classes.search}></div>
                            {currentUser?.user && 
                                
                            <div className={classes.account}>
                                       <div className={classes.userimage}><img  onClick={routeUserProfile} src={currentUser.user.imageurl} alt="" style={{borderRadius:50}} /></div>
                                    <div className={classes.userstatus} onClick={Logoutbtn} >Logout</div>
                                   
                                    </div> 
                            
                    ||                            <div   className={classes.account}>
                                <div className={classes.userimage}><img src="images/user.png" alt=""/></div>
                                    <div  className={classes.userstatus}  onClick={routeLoginpage} >Login</div>
                                    </div>                          
    }
        
</div>
            </section>
            
}

<section>
                {children}
                <CreateCategory openform={openformcat} OnCreateForm={OnCreateFormCat}/>
                <CreateItem openform={openform} OnCreateForm={OnCreateForm}/>
            </section>
            
            {!router.pathname.includes("UserSettings") && 
           <> <section className={classes.tabnavbar}>
                
   <div onClick={routeHomepage} className={classes.route}>
        <div className={classes.imghome}><img  src="images/home.png" alt=""/></div>
        <div className={classes.txt}>Home</div>
                </div>
                {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor )  &&
                <div className={classes.route} onClick={
                    router.pathname === "/" ? OnCreateFormCat :
                        (router.pathname !== "/" && router.pathname !== "/Login" && router.pathname !== "/Register")? OnCreateForm : ()=>{} }
                    // router.pathname === "/Shop" && OnCreateForm ||
                    
       
                    // }else if (router.pathname !== "/" & "/Login" & "/Register") {
                      
                    // } 
    >
        <div className={classes.imgcreate}><img  src="images/create.png" alt=""/></div>
    </div>
            }
   
    <div onClick={showNavbar} className={classes.routephone}>
        <div className={classes.imgphone}><img  src="images/phone.png" alt=""/></div>
        <div className={classes.txt}>Contact</div>
    </div>
 </section>
 <div
            className={active? classes.menu : classes.showmenu} >
        <div className={classes.exit} onClick={showNavbar}><FaTimes/></div>
    
        <div className={classes.li}><a href="#">
            <div className={classes.imgmomo}><img src="images/momo.png" alt=""/></div>
            <div className={classes.txt}>+237 671018950</div>
        </a> </div>
    
        <div className={classes.li}><a href="#">
            <div className={classes.imgwhatsapp}><img src="images/whatsapp.png" alt=""/></div>
            <div className={classes.txt}>Whatsapp</div>
        </a></div>
        <div className={classes.li}><a href="#">
            <div className={classes.imgfacebook}><img src="images/facebook.png" alt=""/></div>
            <div className={classes.txt}>Facebook</div>
        </a></div>
        <div className={classes.li}><a href="#">
            <div className={classes.imginstagram}><img src="images/instagram.png" alt=""/></div>
            <div className={classes.txt}>Instagram</div>
        </a></div>
            </div>
            </>  ||  <section className={classes.tabnavbar}></section>}
        </section>
     );
}

export default Navbar;