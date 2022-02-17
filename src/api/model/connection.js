require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = (
  process.env.URI || 'mongodb+srv://AdmUserTest:AdmUserTest@taticalcluster.sgi9z.mongodb.net/TaticalCluster'
);

let db = null;

const connection = (dataBase) => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(dataBase);
      return db;
    }));

module.exports = connection;
