const { getConnection, sql } = require("../database/connection");
const { addNewPdf } = require("../database/querys");

const createNewPdf = async (req, res) => {
  const { Titulo } = req.body;
  const ArchivosPDF = req.file;

  // Validación
  if (!Titulo || !ArchivosPDF) {
    return res
      .status(400)
      .json({ msg: "Es necesario tener un Titulo y el Archivo" });
  }

  try {
    const pool = await getConnection();

    const rutaLocal = ArchivosPDF.path;

    await pool
      .request()
      .input("Titulo", sql.VarChar(255), Titulo)
      .input("RutaArchivo", sql.VarChar(255), rutaLocal)
      .query(addNewPdf);

    res.send("PDF guardado correctamente en SQL Server");
  } catch (error) {
    console.error("Error al insertar el PDF en SQL Server:", error.message);
    res.status(500).send("Error al guardar el PDF en SQL Server");
  }
};

module.exports = createNewPdf;
