import styles from "./PdfList.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../Loading/Loading";
import PDFIcon from "../../assets/PDFIcon.svg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaCheck, FaEdit } from "react-icons/fa";

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const [totalPdfs, setTotalPdfs] = useState(0);
  const [editingPdfId, setEditingPdfId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleDeletePdf = async (id) => {
    try {
      // Realizar la solicitud DELETE a la API
      await axios.delete(`http://localhost:3001/api/pdf/${id}`);

      // Actualizar la lista de PDFs después de eliminar
      const response = await axios.get("http://localhost:3001/api/pdf");
      setPdfs(response.data);

      // Actualizar el total de PDFs
      const totalResponse = await axios.get(
        "http://localhost:3001/api/pdf/count"
      );
      setTotalPdfs(totalResponse.data.total);
    } catch (error) {
      console.error(`Error al eliminar el PDF con ID ${id}:`, error.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingPdfId(null);
  };

  const handleEditPdf = (id, title) => {
    // Establece el ID del PDF que se está editando
    setNewTitle(title);
    setEditingPdfId(id);
  };

  const handlePdfUpdated = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/api/pdf/${id}`, {
      Titulo: newTitle,
    });
    setPdfs(response.data);
    setEditingPdfId(null);
    setNewTitle(null);
    const response2 = await axios.get("http://localhost:3001/api/pdf");
    setPdfs(response2.data);
    const totalResponse = await axios.get(
      "http://localhost:3001/api/pdf/count"
    );
    setTotalPdfs(totalResponse.data.total);
  };

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pdf");
        const totalResponse = await axios.get(
          "http://localhost:3001/api/pdf/count"
        );
        setTotalPdfs(totalResponse.data.total);
        setPdfs(response.data); // Asumiendo que la respuesta es un arreglo de objetos
      } catch (error) {
        console.error("Error al obtener la lista de PDFs:", error.message);
      }
    };

    fetchPdfs();
  }, []);

  if (!pdfs.length) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else
    return (
      <div className={styles.listContainer}>
        <h2 className={styles.titulo}>List of PDFs</h2>
        <ul>
          {pdfs.map((pdf) => (
            <li key={pdf.Id} className={styles.pdfItem}>
              <div className={styles.pdfInfo}>
                <img src={PDFIcon} alt="icono del pdf" className={styles.pdfICON} />
                {editingPdfId === pdf.Id ? (
                  <>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className={styles.editInput}
                    />
                    <button
                      className={styles.editCheck}
                      onClick={() => handlePdfUpdated(pdf.Id, newTitle)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className={styles.editCancel}
                      onClick={() => handleCancelEdit()}
                    >
                      <RiDeleteBack2Fill />
                    </button>
                  </>
                ) : (
                  <>
                    <span className={styles.pdfTitle}>{pdf.Titulo}</span>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEditPdf(pdf.Id, pdf.Titulo)}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </div>

              <button
                className={styles.deleteButton}
                onClick={() => handleDeletePdf(pdf.Id)}
              >
                <AiFillDelete className={styles.deleteIcon} />{" "}
              </button>
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <h3 className={styles.subtituloFooter}>
            {totalPdfs} {totalPdfs === 1 ? "element" : "elements"}
          </h3>
        </footer>
      </div>
    );
};

export default PdfList;
