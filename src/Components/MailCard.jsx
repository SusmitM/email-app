import { useMailContext } from "../Context/MailContext";
import { NavLink } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
export const MailCard = ({
  mailData,
  InboxPage,
  TrashPage,
  SpamPage,
  StarredPage,
}) => {
  const { mId, unread, isStarred, subject, content } = mailData;
  const { mailDispatch } = useMailContext();
  console.log(mailData);
  const AddtoTrash = () => {
    mailDispatch({ type: "Add-To-Trash", selectedId: mId });
  };
  const AddtoSpam = () => {
    mailDispatch({ type: "Add-To-Spam", selectedId: mId });
  };
  const AddSpamFromTrash = () => {
    mailDispatch({ type: "Add-To-Spam-From-Trash", selectedId: mId });
  };
  const AddTrashFromSpam = () => {
    mailDispatch({ type: "Add-To-Trash-From-Spam", selectedId: mId });
  };
  const AddInboxFromSpam = () => {
    mailDispatch({ type: "Add-To-Inbox-From-Spam", selectedId: mId });
  };
  const AddInboxFromTrash = () => {
    mailDispatch({ type: "Add-To-Inbox-From-Trash", selectedId: mId });
  };

  const ToggleStarInboxMail = () => {
    mailDispatch({ type: "Toggle-Star-Inbox-Mail", selectedId: mId });
  };
  const ToggleStarSpamMail = () => {
    mailDispatch({ type: "Toggle-Star-Spam-Mail", selectedId: mId });
  };
  const PermanentDelete = () => {
    mailDispatch({ type: "Permanent-Delete", selectedId: mId });
  };

  const ToggleUnreadMail = () => {
    mailDispatch({ type: "Toggle-Unread-Mail", selectedId: mId });
  };

  return (
    <li>
      <div className="mailCard">
        <div className="mailCard-header">
          <div className={unread ? "redCircle" : "greenCircle"}></div>
          <div className="mailSubject">Subject:{subject}</div>
          {InboxPage && (
            <div className="star-btn" onClick={ToggleStarInboxMail}>
              {isStarred ? <FaStar /> : <HiOutlineStar />}
            </div>
          )}
          {StarredPage && (
            <div className="star-btn" onClick={ToggleStarInboxMail}>
              <FaStar />
            </div>
          )}
          {SpamPage && (
            <div className="star-btn" onClick={ToggleStarSpamMail}>
              {isStarred ? <FaStar /> : <HiOutlineStar />}
            </div>
          )}
          {TrashPage && (
            <div className="delete-btn" onClick={PermanentDelete}>
              <MdDelete />
            </div>
          )}
        </div>
        <div className="mailCard-body">{content}</div>

        <div className="mailCard-footer">
          <div className="viewDetailsDiv">
            <NavLink to={`/mail/${mId}`}>View Details</NavLink>
          </div>
          <div className="btnDiv">
            {InboxPage && (
              <>
                <button className="delete-btn" onClick={AddtoTrash}>
                  Delete
                </button>
                <button className="viewDetails-btn" onClick={ToggleUnreadMail}>
                  {unread ? "Mark As Read" : "Mark As Unread"}
                </button>
                <button className="addToSpam-btn" onClick={AddtoSpam}>
                  Report Spam
                </button>
              </>
            )}
            {TrashPage && (
              <>
                <button className="addToSpam-btn" onClick={AddSpamFromTrash}>
                  Report Spam
                </button>
                <button onClick={AddInboxFromTrash}>Add To Inbox</button>
              </>
            )}
            {SpamPage && (
              <>
                <button className="delete-btn" onClick={AddTrashFromSpam}>
                  {" "}
                  Delete
                </button>
                <button onClick={AddInboxFromSpam}>Add To Inbox</button>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
