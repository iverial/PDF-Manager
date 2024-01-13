import styled from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styled.container}>
      <Link to={"/createpdf"} style={{ textDecoration: "inherit" }}>
        <button className={styled.boton}>Upload PDF</button>
      </Link>

      <Link to={"/pdfs"}>
        <button className={styled.boton}>View PDF Files</button>
      </Link>
    </div>
  );
};

export default Nav;
