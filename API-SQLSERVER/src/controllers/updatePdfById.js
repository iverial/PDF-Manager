const { getConnection, sql } = require("../database/connection");
const querys = require("../database/querys");

const updatePdfById = async (req, res) => {
  const { Titulo } = req.body;
  if (!Titulo) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Titulo", sql.VarChar(255), Titulo)
      .input("Id", req.params.id)
      .query(querys.updatePdfById);
      res.json({ Titulo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = updatePdfById;
