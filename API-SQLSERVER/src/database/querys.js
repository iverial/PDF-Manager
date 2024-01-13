module.exports = {
    getAllPdf: "SELECT TOP(500) * FROM [DB_archivopdf].[dbo].[ArchivosPDF]",
    getPdfById: "SELECT * FROM ArchivosPDF Where Id = @Id",
    addNewPdf:
    "INSERT INTO ArchivosPDF (Titulo, RutaArchivo) VALUES (@Titulo, @RutaArchivo)",
    deletePdf: "DELETE FROM [DB_archivopdf].[dbo].[ArchivosPDF] WHERE Id= @Id",
    getTotalPdf: "SELECT COUNT(*) AS TotalPDF FROM DB_archivopdf.dbo.ArchivosPDF",
    updatePdfById:
      "UPDATE [DB_archivopdf].[dbo].[ArchivosPDF] SET Titulo = @Titulo WHERE Id = @Id",
};