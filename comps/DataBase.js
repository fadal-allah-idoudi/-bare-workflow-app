import * as SQLite from 'expo-sqlite';

// Open or create the database
const db = SQLite.openDatabaseSync('test4.db');

// Initialize the database and create the table if it doesn't exist
export async function init() {
    
    try {
        
        await db.execAsync(
            `PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS test4 (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL
            );`
        );
        console.log('Table created or already exists');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

// Insert an image into the table
export async function insertImage(image,) {
    try {
        await db.runAsync(
            `INSERT INTO test4 ( title, imageUri) VALUES ( ?, ?);`,
            [ image.title, image.Url]
        );
        console.log('Image inserted');
    } catch (error) {
        console.error('Error inserting image:', error);
    }
}

// Fetch all data from the table
export async function fetchdata(db) {
    try {
        const result = await  db.getAllAsync('SELECT * FROM test4');
        // console.log('DATA', result);
        const Images=[];
        for (const dp of result ){
            Images.push({
                ids: dp.id,
                title: dp.title,
                imageUri: dp.imageUri
            });
        }
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
