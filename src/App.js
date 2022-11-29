import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Article from "./components/Article/Article";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import {
  clearAllDropdownsState,
  clearAllMenusState,
  isClickedOnMenu,
} from "./utils";

function App() {
  // Close the dropdown menu if the user clicks outside of it
  document.onclick = function (event) {
    var clickedOnMenu = isClickedOnMenu(event);
    if (!clickedOnMenu) {
      clearAllDropdownsState();
      clearAllMenusState();
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article:articleId" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
