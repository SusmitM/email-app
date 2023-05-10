import {NavLink} from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
export const Navbar=()=>{
    const{spamMailCount,spamTrashCount,inboxMailCount} =useMailContext();
    return(
        <div className="navbar">
            <NavLink to="/">Inbox ({inboxMailCount})</NavLink>
            <NavLink to="/starred">Starred</NavLink>
            <NavLink to="/spam">Spam ({spamMailCount})</NavLink>
            <NavLink to="/trash">Trash ({spamTrashCount})</NavLink>
            
            


        </div>
    )
}