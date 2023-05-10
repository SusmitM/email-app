export const SingleMailCard=({selectedMail})=>{
   
    return(
        <>
            <div className="title"><b>Subject: </b>{selectedMail.subject}</div>
            <hr/>
            <div className="content">{selectedMail.content}</div>
            
        </>
    )
}