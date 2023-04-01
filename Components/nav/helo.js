        <section className={c.navbarmom}>

            {
                (router.pathname.includes("/SettingsPage/UserSettings") || router.pathname.includes("UserProfile")) &&

                <section className={c.header}>
                        <div onClick={GoBack} style={{fontSize:40}}>
                         <TbArrowLeft/>
                        </div>
                        </section>
||

        <section className={c.header}>
    <div className={c.title}>
        <div className={c.imgtitle}></div>
        <div className={c.titletxt}>Queenzee</div>
    </div>

    <div className={c.titleactions}>
                            <div className={c.search}></div>
                            {currentUser?.user &&
                                
                            <div className={c.account}>
                                       <div className={c.userimage}><img  onClick={routeUserProfile} src={currentUser.user.imageurl} alt="" style={{borderRadius:50}} /></div>
                                    <div className={c.userstatus} onClick={Logoutbtn} >Logout</div>
                                   
                                    </div>
                            
                    ||                            <div   className={c.account}>
                                <div className={c.userimage}><img src="images/user.png" alt=""/></div>
                                    <div  className={c.userstatus}  onClick={routeLoginpage} >Login</div>
                                    </div>
    }
        
</div>
            </section>
            
}

<section>
                {children}
               
                <CreateItem openform={openform} OnCreateForm={OnCreateForm}/>
            </section>
            
            {!router.pathname.includes("UserSettings") &&
           <> <section className={c.tabnavbar}>
                
   <div onClick={routeHomepage} className={c.route}>
        <div className={c.imghome}><img  src="images/home.png" alt=""/></div>
        <div className={c.txt}>Home</div>
                </div>
                {(currentUser?.user?.roles?.Admin || currentUser?.user?.roles?.Editor )  &&
                <div className={c.route} onClick={
                    router.pathname === "/" ? OnCreateFormCat :
                        (router.pathname !== "/" && router.pathname !== "/Login" && router.pathname !== "/Register")? OnCreateForm : ()=>{} }
    >
        <div className={c.imgcreate}><img  src="images/create.png" alt=""/></div>
    </div>
            }
   
    <div onClick={showNavbar} className={c.routephone}>
        <div className={c.imgphone}><img  src="images/phone.png" alt=""/></div>
        <div className={c.txt}>Contact</div>
    </div>
 </section>
 <div
            className={active? c.menu : c.showmenu} >
        <div className={c.exit} onClick={showNavbar}><FaTimes/></div>
    
        <div className={c.li}><a href="#">
            <div className={c.imgmomo}><img src="images/momo.png" alt=""/></div>
            <div className={c.txt}>+237 671018950</div>
        </a> </div>
    
        <div className={c.li}><a href="#">
            <div className={c.imgwhatsapp}><img src="images/whatsapp.png" alt=""/></div>
            <div className={c.txt}>Whatsapp</div>
        </a></div>
        <div className={c.li}><a href="#">
            <div className={c.imgfacebook}><img src="images/facebook.png" alt=""/></div>
            <div className={c.txt}>Facebook</div>
        </a></div>
        <div className={c.li}><a href="#">
            <div className={c.imginstagram}><img src="images/instagram.png" alt=""/></div>
            <div className={c.txt}>Instagram</div>
        </a></div>
            </div>
            </>  ||  <section className={c.tabnavbar}></section>}
        </section>
        