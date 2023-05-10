import { MailCard } from "../Components/MailCard";
import { useMailContext } from "../Context/MailContext";
export const Starred=()=>{
    const { mailState } = useMailContext();
    return(
        <>
      
        <div className="Starred">
        <h1>Starred</h1>
        <div className="mail-container">
        <ul style={{listStyle:"none"}}>
        {
                mailState?.Star.map((mailData)=>{

                    return(
                        <MailCard key={mailData.mId} mailData={mailData} StarredPage />
                    )
                })
            }
        </ul>
        </div>

        </div>
        </>
    )
}