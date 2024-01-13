const { getConnection } = require("../database/connection");
const querys = require("../database/querys");

const getTotalPdf = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalPdf);

    if (result.recordset.length > 0) {
      const totalPdf = result.recordset[0].TotalPDF;
      res.json({ total: totalPdf });
    } else {
      res.status(404).json({ error: "No se encontraron PDFs" });
    }
  } catch (error) {
    console.error("Error al obtener el total de PDFs:", error.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


module.exports = getTotalPdf;
