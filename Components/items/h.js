<div className={classes.body}>
<section className={classes.section}>
{QueryItems}
<div style={{height:10}}></div>
</section>
</div>


    
    



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
        </div>

