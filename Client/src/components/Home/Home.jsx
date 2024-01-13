import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.titulo}>
        Welcome to <strong className={style.strong}>PDF MANAGER</strong>
      </h1>
      <h2 className={style.subtitulo}>
        {" "}
        Here you will be able to upload, update, delete and view all your pdfs!{" "}
      </h2>
      <Link to={"/createpdf"} style={{ textDecoration: "inherit" }}>
        <button className={style.boton}>START</button>
      </Link>
    </div>
  );
};

export default Home;
