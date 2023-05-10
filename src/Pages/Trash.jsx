import { MailCard } from "../Components/MailCard";
import { useMailContext } from "../Context/MailContext";
export const Trash=()=>{
    const { mailState } = useMailContext();
    return(
        <>
      
        <div className="trash">
        <h1>Trash</h1>
        <div className="mail-container">
        <ul style={{listStyle:"none"}}>
        {
                mailState?.Trash.map((mailData)=>{

                    return(
                        <MailCard key={mailData.mId} mailData={mailData} TrashPage />
                    )
                })
            }
        </ul>
        </div>

        </div>
        </>
    )
}