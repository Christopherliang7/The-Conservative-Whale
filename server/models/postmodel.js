const mysql = require('mysql');
const { mysql_password } = require('../../config.js')

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mysql_password,
  database: 'Whales'
});

const db = dbConnection;
db.connect((error) => error ? console.log('Error connecting to Db: ', err) : console.log('Connected to Db!'));

module.exports = { 
  modelsGetPosts: (callback) => {
  const getQuestionsQuery = `SELECT * FROM SightingsPost LIMIT 20;`;
    db.query(getQuestionsQuery, (error, result) => {
      if (error) {
        console.log('Error with getPosts query: ', error);
      } else {
        callback(null, result);
      }
    });
  }, 
  modelsPostPost: (params, callback) => {
    const getQuestionsQuery = `INSERT INTO SightingsPost (title, description) VALUES (?, ?);`;
      db.query(getQuestionsQuery, params, (error, result) => {
        if (error) {
          console.log('Error with postingPosts query: ', error);
        } else {
          callback(null, result);
        }
      });
    }
}
