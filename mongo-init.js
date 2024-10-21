const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:example@db:27017/';
const dbName = 'test'; 
const collectionName = 'Persona';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const personas = JSON.parse(fs.readFileSync('./Personas.json', 'utf8'));

    try {
        // Verificar si la colección ya contiene documentos
        const count = collection.countDocuments();
        if (count === 0) {
            // Leer el archivo JSON y parsear los datos
            const personas = JSON.parse(fs.readFileSync('./Personas.json', 'utf8'));

            // Insertar los documentos en la colección
            const res = collection.insertMany(personas);
            console.log(`${res.insertedCount} Personas inserted`);
        } else {
            console.log('La colección ya contiene documentos. No se insertaron nuevos registros.');
        }
    } catch (error) {
        console.error('Error al insertar documentos:', error);
    } finally {
        client.close();
    }
});