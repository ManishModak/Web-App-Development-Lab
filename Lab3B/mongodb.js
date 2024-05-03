const {MongoClient}=require('mongodb');
const url='mongodb+srv://manish:y3KnXbSY2VqjjenJ@cluster0.lmolrhr.mongodb.net/'
const database='student';
const client= new MongoClient(url);

const dbConnect= async () => {
    const result = await client.connect();
    const db = await result.db(database);
    return db.collection('profile');
}

module.exports=dbConnect