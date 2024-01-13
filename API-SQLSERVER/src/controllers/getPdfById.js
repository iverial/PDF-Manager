const { getConnection } = require("../database/connection");
const querys = require("../database/querys");

const getPdfById = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(querys.getPdfById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = getPdfById;
