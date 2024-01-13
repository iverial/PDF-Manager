# NodeJS Backend para guardar PDFS con SQL SERVER

Es un backend simple con diferentes rutas que te van a permitir: Obtener todos los PDFs, Eliminar un PDF, Obtener la cantidad de todos los pdf actuales en la base de datos, actualizar un PDF

# :closed_lock_with_key: Dependencias
    - cors
    - dotenv,
    - express
    - morgan
    - mssql
    - multer
    - nodemon

# RUTAS :warning:


# GET: 'http://localhost:3001/api/pdf'
Esta ruta devuelve a todos los pdfs de esta forma, ejemplo: 
[
    {
        "Id": 1,
        "Titulo": "cvv",
        "RutaArchivo": null
    },
    {
        "Id": 2,
        "Titulo": "cv",
        "RutaArchivo": "pdf\\ArchivosPDF-1704863533147-513425762.pdf"
    },
    {
        "Id": 3,
        "Titulo": "mi curriculum",
        "RutaArchivo": "pdf\\ArchivosPDF-1704897731215-963591348.pdf"
    },
    {
        "Id": 4,
        "Titulo": "mi curriculum 1",
        "RutaArchivo": "pdf\\ArchivosPDF-1704898205280-653793352.pdf"
    }
]

# POST: http://localhost:3001/api/pdfs'
esta ruta recibe el archivo de esta forma, ejemplo 
File 
{
name: 'Ivan CaggianoCVENFS2.pdf', 
lastModified: 1703867590173, 
lastModifiedDate: Fri Dec 29 2023 13:33:10 GMT-0300 (hora estándar de Argentina),
 webkitRelativePath: '', 
 size: 791867, 
 …
}
lastModified: 1703867590173
lastModifiedDate: Fri Dec 29 2023 13:33:10 GMT-0300 (hora estándar de Argentina) {}
name: "Ivan CaggianoCVENFS2.pdf"
size: 791867
type: "application/pdf"
webkitRelativePath: ""
Y Lo postea en la base de datos utilizando multer.

# GET: http://localhost:3001/api/pdf/count
esta ruta devuelve un objeto el cual contiene el numero de PDFs actuales en la base de datos, ejemplo: 
{total: 3}

Gracias ! :smile:
