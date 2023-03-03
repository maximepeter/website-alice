import Button from "../Common/Button/Button";
import "./Contact.css";

function Contact() {
  function sendMail() {
    const input = document.getElementById("contact-textarea").value;
    const url =
      "https://prod-222.westeurope.logic.azure.com:443/workflows/f1136d18ba67472db40910294ae37c3c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VqUEEJvxJ9H5ycyxUsLs25wIaCaJI03s4VhNzm2yAwA";
    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept-encoding": "gzip, deflate, br",
      },
      body: JSON.stringify({
        text: input,
      }),
    };
    fetch(url, postOptions).then(() => alert("Mail envoyé !"));
  }
  return (
    <div className="contact-container">
      <h2 className="contact-title">Ecrivez-ici votre message !</h2>
      <div className="contact-form">
        <textarea
          id="contact-textarea"
          name="text"
          placeholder="Commencez à écrire ici ..."
        ></textarea>
      </div>
      <Button text="Envoyer" onClick={sendMail} />
    </div>
  );
}

export default Contact;
