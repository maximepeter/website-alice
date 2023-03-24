import Button from "../Common/Button/Button";
import { sendMail } from "../../utils/utils";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="alert success alert-hide">Mail envoyé.</div>
      <div className="alert error alert-hide">Adresse mail invalide.</div>
      <h2 className="contact-title">Ecrivez-ici votre message !</h2>
      <div className="contact-form">
        <h3 className="contact-title">Mail :</h3>
        <textarea
          id="contact-textarea-mail"
          className="contact-textarea"
          name="text"
          placeholder="Entrez ici votre email ... (ex: antoine.dupont@gmail.com)"
        ></textarea>
        <h3 className="contact-title">Message :</h3>
        <textarea
          id="contact-textarea-message"
          className="contact-textarea"
          name="text"
          placeholder="Commencez à écrire ici ..."
        ></textarea>
        <Button text="Envoyer" onClick={sendMail} />
      </div>
    </div>
  );
}

export default Contact;
