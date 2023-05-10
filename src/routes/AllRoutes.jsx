import {Routes,Route} from "react-router-dom";
import {Inbox} from "../Pages/Inbox";
import {Spam} from "../Pages/Spam";
import {Trash} from "../Pages/Trash";
import {IndividualMail} from "../Pages/IndividualMail";
import { Starred } from "../Pages/Starred";

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Inbox/>}  />
            <Route path="/spam" element={<Spam/>}  />
            <Route path="/trash" element={<Trash/>}  />
            <Route path="/starred" element={<Starred/>} />
            <Route path="/mail/:mailId" element={<IndividualMail/>} />
        </Routes>
        </>
    )
}