import "./App.css";
// COMPONENTES
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import PdfList from "../src/components/PdfList/PdfList";
import PdfUpload from "./components/PdfUpload/PdfUpload";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdfs" element={<PdfList />} />
        <Route path="/createpdf" element={<PdfUpload />} />
      </Routes>
    </div>
  );
};

export default App;
