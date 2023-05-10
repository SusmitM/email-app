import { useParams } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
import { SingleMailCard } from "../Components/SingleMailCard";

export const IndividualMail = () => {
  const { mailId } = useParams();
  const { findMail } = useMailContext();

  const selectedMail = findMail(mailId);

  return (
    <>
      <div className="single-mail-container">
        <SingleMailCard selectedMail={selectedMail} />
      </div>
    </>
  );
};
