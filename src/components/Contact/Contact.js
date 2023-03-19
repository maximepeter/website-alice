import Button from "../Common/Button/Button";
import "./Contact.css";

function Contact() {
  function sendMail() {
    const successAlerts = [...document.getElementsByClassName("success")];
    const errorAlerts = [...document.getElementsByClassName("error")];
    const inputMessage = document.getElementById(
      "contact-textarea-message"
    ).value;
    const inputMail = document.getElementById("contact-textarea-mail").value;
    const url =
      "https://prod-222.westeurope.logic.azure.com:443/workflows/f1136d18ba67472db40910294ae37c3c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VqUEEJvxJ9H5ycyxUsLs25wIaCaJI03s4VhNzm2yAwA";
    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept-encoding": "gzip, deflate, br",
      },
      body: JSON.stringify({
        mail: inputMail,
        text: inputMessage,
      }),
    };
    if (inputMail !== "") {
      fetch(url, postOptions)
        .then(() => errorAlerts.map((elmt) => elmt.classList.add("alert-hide")))
        .then(() =>
          successAlerts.map((elmt) => elmt.classList.remove("alert-hide"))
        )
        .then(() => {
          [...document.getElementsByClassName("contact-textarea")].map(
            (elmt) => (elmt.value = "")
          );
        })
        .then(
          setTimeout(
            () => successAlerts.map((elmt) => elmt.classList.add("alert-hide")),
            10000
          )
        );
    } else {
      errorAlerts.map((elmt) => elmt.classList.remove("alert-hide"));
      setTimeout(
        () => errorAlerts.map((elmt) => elmt.classList.add("alert-hide")),
        10000
      );
    }
  }
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
