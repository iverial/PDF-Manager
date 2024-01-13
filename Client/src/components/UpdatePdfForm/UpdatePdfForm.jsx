import { useState } from "react";
import axios from "axios";

const UpdatePdfForm = ({ pdfId, onPdfUpdated }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleUpdatePdf = async () => {
    try {
      await axios.put(`http://localhost:3001/api/pdf/${pdfId}`, {
        Titulo: newTitle,
        // Agrega más campos si es necesario
      });

      // Llama a la función proporcionada por las propiedades para actualizar la lista después de la actualización.
      onPdfUpdated();
    } catch (error) {
      console.error(`Error al actualizar el PDF con ID ${pdfId}:`, error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nuevo título"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleUpdatePdf}>Update PDF</button>
    </div>
  );
};

export default UpdatePdfForm;
