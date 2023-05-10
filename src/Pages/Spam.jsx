import { MailCard } from "../Components/MailCard";
import { useMailContext } from "../Context/MailContext";
export const Spam = () => {
  const { mailState } = useMailContext();

  return (
    <>
      <div className="spam">
        <h1>Spam</h1>
        <div className="mail-container">
       <ul style={{listStyle:"none"}}> {
                mailState?.Spam.map((mailData)=>{

                    return(
                        <MailCard key={mailData.mId} mailData={mailData} SpamPage />
                    )
                })
            }</ul>
        </div>
      </div>
    </>
  );
};
