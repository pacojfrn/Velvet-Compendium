const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:example@db:27017/';
const dbName = 'test';
const collectionName = 'Persona'; 

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    try {
        const personas = JSON.parse(fs.readFileSync('./Personas.json', 'utf8'));
        collection.insertMany(personas);
    } catch (error) {
        console.error('Error al insertar documentos:', error);
    } finally {
        client.close();
    }
});