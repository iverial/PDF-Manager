const { Router } = require("express");
const createNewPdf = require("../controllers/createNewPdf");
const getTotalPdf = require("../controllers/getTotalPdf");
const getPdf = require("../controllers/getPdf");
const getPdfById = require("../controllers/getPdfById");
const deletePdfById = require("../controllers/deletePdfById");
const updatePdfById = require("../controllers/updatePdfById")

// configuracion del multer
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "pdf"); // Ruta del directorio en el servidor
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const pdf = multer({ storage: storage });

const router = Router();

router.get("/pdf", getPdf);

router.post("/pdfs", pdf.single("ArchivosPDF"), createNewPdf);

router.get("/pdf/count", getTotalPdf);

router.get("/pdf/:id", getPdfById);

router.delete("/pdf/:id", deletePdfById);

router.put("/pdf/:id", updatePdfById);

module.exports = router;
