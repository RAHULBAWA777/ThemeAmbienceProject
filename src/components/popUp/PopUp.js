import { useState } from "react"
import "./popUp.css"
 export default function PopUpComponent({popUpState,setPopUpState}){
    
    return(<div className={popUpState?"pop-up":"pop-up-closed"}>
        
        <h2>hello this is pop up</h2>
        <button onClick={()=>setPopUpState(false)}>CLOSE</button>
    </div>)
}