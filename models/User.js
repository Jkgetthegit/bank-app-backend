// models/User.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bankdetails',
  password: 'postgres',
  port: 5432, // Default PostgreSQL port
});


class User {
  async createUser(email_id, password, full_name ,account_number) {
    const client = await pool.connect();
    try {
    //   const result = await client.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);
      const result = await client.query('INSERT INTO user_login (email_id, password, full_name , account_number) VALUES ($1, $2, $3 , $4) RETURNING *', [email_id, password, full_name , account_number]);       
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

module.exports = new User();
