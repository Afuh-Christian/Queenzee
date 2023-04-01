import React from 'react'
import c from "./Bottom.module.css"

import { BsFillTelephoneFill, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { FiFacebook } from "react-icons/fi"
import { MdLocationPin} from "react-icons/md"


function Bottom() {
  return (
<section className={c.bottom}
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
    }}>
<ul>
    <li>
        <ul>
            <li>
                <ul>
                    <li className={c.h1}>Location</li>
                    <li>
                        Cameroon
                    </li>
                    <li className={c.location}>
                        <div className={c.icon}><MdLocationPin/></div>
                        <div>Central , Yaounde</div>
                    </li>
                 
                </ul>
            </li>
            <li>
                <ul>
                    <li className={c.h1}>Contact</li>
                    <li className={c.location}>
                                  <div className={c.icon}><BsFillTelephoneFill/></div>
                        <div>+ 237-67393884</div>
                        
                    </li>
                    <li className={c.f_w_b}>
                         <div><BsWhatsapp/></div>
                        <div><BsInstagram/></div>
                        <div> <FiFacebook/></div> 
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li className={c.dev}>Developer  :  chrisdev@</li>
</ul>
</section> 
  )
}

export default Bottom   