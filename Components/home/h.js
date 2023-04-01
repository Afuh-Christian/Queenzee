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
      
     </div>
     </div>
 </div>
         
              <div className={classes.help_about}>
              <div className={classes.help} >Help</div>
              {(currentUser?.user?.roles?.Admin) &&
                  <div className={classes.about} ><Link href="/SettingsPage">Settings</Link></div>
                }
                  </div>
          

          <Bottom/>


</section>


















<div className={classes.item}>                
                  <div className={classes.subitem}><img src={avatar} className={classes.b}  onClick={OnUpdateForm}/></div>
                  <div className={classes.ww} onClick={deleteCat}>{name}</div>
        </div>