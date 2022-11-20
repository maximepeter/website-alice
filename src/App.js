import "./App.css";
import Header from "../src/components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { clearAllDropdownsState, clearAllMenusState } from "./utils";

function App() {
  // Close the dropdown menu if the user clicks outside of it
  document.onclick = function (event) {
    var clickedOnMenu =
      event.target.matches(".buttonMenu") ||
      event.target.matches(".menuLabel") ||
      event.target.matches(".dropDownMenu") ||
      event.target.matches(".dropDownItem");
    if (!clickedOnMenu) {
      clearAllDropdownsState();
      clearAllMenusState();
    }
  };
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
