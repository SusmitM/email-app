import { MailCard } from "../Components/MailCard"
import { useMailContext } from "../Context/MailContext"

export const Inbox =()=>{

    const {mailState, finalData,mailDispatch}=useMailContext();

    const countUnreadMails= finalData().reduce((totalCount,emailData)=>emailData?.unread ? totalCount+=1:totalCount+=0,0)

    return(
        <div className="inbox">
        <h1>Inbox</h1>
        <fieldset className="filterContainer">
            <legend>Filters: </legend>
            <label>
                <input type="checkbox" onChange={()=> mailDispatch({type:"Toggle-Read"})}/>
                Show unread mails
            </label>
            <label>
                <input type="checkbox" onChange={()=> mailDispatch({type:"Toggle-Starred"})}/>
                Show starred mails
            </label>

        </fieldset>
        <div className="mail-container">
            <h1 className="UnreadTitle">Unread: { countUnreadMails}</h1>
           <ul style={{listStyle:"none"}}>
           {
                 finalData()?.map((mailData)=>{

                    return(
                        <MailCard  key={mailData.mId} mailData={mailData} InboxPage />
                    )
                })
            }
           </ul>

        </div>
        </div>
    )
}