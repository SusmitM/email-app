import { createContext, useContext, useReducer } from "react";
import { mails } from "../Data/MailData";

const MailContext = createContext();

const mailReducer = (mailState, action) => {
  switch (action.type) {
    case "Add-To-Trash": {
      return {
        ...mailState,
        Mails: mailState?.Mails.filter(({ mId }) => mId !== action.selectedId),
        Trash: [
          ...mailState.Trash,
          mailState?.Mails.find(({ mId }) => mId === action.selectedId),
        ],
      };
    }
    case "Add-To-Spam": {
      return {
        ...mailState,
        Mails: mailState?.Mails.filter(({ mId }) => mId !== action.selectedId),
        Spam: [
          ...mailState.Spam,
          mailState?.Mails.find(({ mId }) => mId === action.selectedId),
        ],
      };
    }
    case "Add-To-Spam-From-Trash": {
      return {
        ...mailState,
        Trash: mailState?.Trash.filter(({ mId }) => mId !== action.selectedId),
        Spam: [
          ...mailState?.Spam,
          mailState?.Trash.find(({ mId }) => mId === action.selectedId),
        ],
      };
    }
    case "Add-To-Trash-From-Spam": {
      return {
        ...mailState,
        Spam: mailState?.Spam.filter(({ mId }) => mId !== action.selectedId),
        Trash: [
          ...mailState?.Trash,
          mailState?.Spam.find(({ mId }) => mId === action.selectedId),
        ],
      };
    }
    case "Permanent-Delete":{
      return{
        ...mailState,
        Trash:[...mailState.Trash.filter(({mId})=>mId!==action.selectedId)]
      }
    }

    case "Add-To-Inbox-From-Spam": {
      return {
        ...mailState,
        Spam: mailState?.Spam.filter(({ mId }) => mId !== action.selectedId),
        Mails: [
          ...mailState?.Mails,
          mailState?.Spam.find(({ mId }) => mId === action.selectedId),
        ],
      };
    }
    case "Add-To-Inbox-From-Trash": {
      return {
        ...mailState,
        Trash: mailState?.Trash.filter(({ mId }) => mId !== action.selectedId),
        Mails: [
          ...mailState?.Mails,
          mailState?.Trash.find(({ mId }) => mId === action.selectedId),
        ],
      };

    }

    case "Toggle-Star-Inbox-Mail": {
      return {
        ...mailState,
        Mails: mailState?.Mails.map((mail) =>
          mail.mId === action.selectedId
            ? { ...mail, isStarred: !mail?.isStarred }
            : mail
        ),
        Star:mailState?.Star.find(({mId})=>mId===action.selectedId) ?mailState.Star.filter(({mId})=>mId!==action.selectedId):[...mailState.Star,mailState?.Mails.find(({mId})=>mId===action.selectedId) ]
      };
    }
    case "Toggle-Star-Spam-Mail": {
      return {
        ...mailState,
        Spam: mailState?.Spam.map((mail) =>
          mail.mId === action.selectedId
            ? { ...mail, isStarred: !mail?.isStarred }
            : mail
        ),
        Star:mailState?.Star.find(({mId})=>mId===action.selectedId) ?mailState.Star.filter(({mId})=>mId!==action.selectedId):[...mailState.Star,mailState?.Spam.find(({mId})=>mId===action.selectedId) ]
      };
    }
    case "Toggle-Unread-Mail": {
        return { ...mailState,Mails:mailState?.Mails.map(mail=>mail.mId===action.selectedId ? {...mail,unread:!mail?.unread} : mail) };
      }
   
    case "Toggle-Read": {
      return { ...mailState, Read: !mailState?.Read };
    }
    case "Toggle-Starred": {
        return { ...mailState, Starred: !mailState?.Starred };
      }
  }
};

export const MailContextProvider = ({ children }) => {
  const [mailState, mailDispatch] = useReducer(mailReducer, {
    Mails: mails,
    Spam: [],
    Trash: [],
    Star:mails.filter(({isStarred})=>isStarred),
    Read: false,
    Starred: false,
  });

  const inboxMailCount = mailState?.Mails.length;
  const spamMailCount = mailState?.Spam.length;
  const spamTrashCount = mailState?.Trash.length;
  const findMail = (selectedId) => mails.find(({ mId }) => mId === selectedId);

 //functions to apply the filters on the mail data

 const readFilteredData=mailState?.Read ?
 (mailState?.Mails.filter(({unread})=>unread))
 :
 mailState?.Mails

 const starFilteredData=mailState?.Starred ?
 (readFilteredData?.filter(({isStarred})=>isStarred))
 :
 readFilteredData

 const finalData=()=>{
  let filteredData=mailState.Mails;
  
  if(mailState.Starred){
    filteredData=filteredData.filter(({isStarred})=>isStarred)
  }
  if(mailState.Read){
    filteredData=filteredData.filter(({unread})=>unread)
  }
  return filteredData;
 }





  return (
    <>
      <MailContext.Provider
        value={{
          mailState,
          mailDispatch,
          spamMailCount,
          spamTrashCount,
          inboxMailCount,
          findMail,
          starFilteredData,
          finalData
        }}
      >
        {children}
      </MailContext.Provider>
    </>
  );
};

export const useMailContext = () => useContext(MailContext);
