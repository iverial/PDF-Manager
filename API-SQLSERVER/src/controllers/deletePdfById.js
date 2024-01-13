const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querys");

const deletePdfById = async (req, res) => {
  try {
    const pool = await getConnection();
    console.log(req.body);
    console.log(req.params.id);
    const result = await pool
      .request()
      .input("Id", req.params.id)
      .query(querys.deletePdf);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = deletePdfById;
