import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./FormularioPDF.module.css";
import axios from "axios";

const FormularioPDF = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUpload = async () => {
    // Validar que se haya seleccionado un archivo y se haya ingresado un título
    if (!file || !title) {
      alert("Por favor, seleccione un archivo PDF y un título.");
      return;
    }

    // Crear un FormData para enviar el archivo y el título
    const formData = new FormData();
    formData.append("Titulo", title);
    formData.append("ArchivosPDF", file);
    try {
      // Llamada a la API para subir el PDF
      const response = await axios.post(
        "http://localhost:3001/api/pdfs",
        formData
      );
      console.log(response);
      // Limpiar el estado del archivo y el título
      setFile(null);
      setTitle("");

      // Llamar a la función proporcionada por el padre para actualizar la lista de PDFs
      navigate("/pdfs");
    } catch (error) {
      console.error("Error al subir el PDF:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title1}>PDF Form</h2>
      <div className={styles.Form1}>
        <div className={styles.tituloContainer}>
          <label htmlFor="titulo" className={styles.label}>
            Title:{" "}
          </label>
          <input
            type="text"
            id="titulo"
            value={title}
            onChange={handleTitleChange}
            className={styles.inputText}
          />
        </div>

        <aside className={styles.ArchivosPDFcontainer}>
          <label htmlFor="archivoPDF" className={styles.fileLabel}>
            Upload PDF file:
            <FontAwesomeIcon
              icon={faFilePdf}
              size="2x"
              className={styles.pdfIcon}
            />
            <input
              type="file"
              id="archivoPDF"
              accept=".pdf"
              onChange={handleFileChange}
              className={styles.inputPdf}
            />
          </label>
          {file && (
            <p className={styles.selectedFile}>
              Selected file: {file.name}
            </p>
          )}
        </aside>

        <div>
          <button
            type="button"
            onClick={handleUpload}
            className={styles.botonEnviar}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioPDF;
