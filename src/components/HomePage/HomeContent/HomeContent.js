import "./HomeContent.css";

function HomeContent() {
  return (
    <div className="homePageContent">
      <div className="homeText">
        <p>
          Je m’appelle Alice et j’habite actuellement dans les Alpes Maritimes.
          J’ai découvert la randonnée il y a quelques années en Argentine, et je
          n’ai jamais arrêté depuis.
        </p>
        <p>
          Que ce soit pour des voyages, des sorties à la journée ou bien des
          treks, j’essaie de rassembler ici toutes les informations pratiques
          que je cherche quand je prépare une sortie. En espérant que ce site
          vous sera utile et vous donnera des bonnes idées d’escapades ! Bonne
          lecture !
        </p>
      </div>
      <div className="homePhoto">
        <img
          alt="Homepage illustration"
          src={`${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/homePageContentPhoto.jpg`}
        />
      </div>
    </div>
  );
}

export default HomeContent;
