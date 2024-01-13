const { getConnection } = require("../database/connection");
const querys = require("../database/querys");

const getPdf = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllPdf);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = getPdf;
