const express = require('express');
require('dotenv').config();
const route = express.Router();
const { Client } = require('pg');

route.post('/', async (req, res) => {
  const { firstName, lastName, workState, Comment, EmailAdress } = req.body;

  // Create a PostgreSQL client
  const client = new Client({
    user: 'davis',
    password: 'xvtiI1tBmwGJJ8x8dggPew',
    host: 'winkywebus-13922.8nj.gcp-europe-west1.cockroachlabs.cloud',
    database: 'winkywebus',
    port: 26257,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Connect to the PostgreSQL database
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Create the table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS testimonials_tbl (
        testimonial_id SERIAL PRIMARY KEY,
        first_name VARCHAR(10) NOT NULL,
        last_name VARCHAR(10) NOT NULL,
        work_state VARCHAR(255) NOT NULL,
        testimony_message VARCHAR(255),
        email_address VARCHAR(40) UNIQUE
      )
    `;
        //Uncomment the following lines if you want to drop the table
        // const dropTableQuery = 'DROP TABLE testimonials_tbl';
        // await client.query(dropTableQuery);
        // console.log('Table "testimonials_tbl" dropped');




    await client.query(createTableQuery);
    console.log('Table "testimonials_tbl" created or already exists.');

    // Insert data into the table
    const insertDataQuery = `
      INSERT INTO testimonials_tbl (first_name, last_name, work_state, testimony_message, email_address)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await client.query(insertDataQuery, [firstName, lastName, workState, Comment, EmailAdress]);
    res.status(200).json({message:"Comment added"})

    // Fetch data from the table
    const fetchDataQuery = 'SELECT * FROM testimonials_tbl';
    const result = await client.query(fetchDataQuery);

    // Log the result to the console
    console.log('Fetched data:', result.rows);



  } catch (error) {
    console.error('Error connecting to PostgreSQL or executing queries:', error);
    res.status(400).json({message:'error occured'})
  } finally {
    // End the PostgreSQL connection
    await client.end();
    console.log('PostgreSQL connection ended.');
  }

  res.end(); // Sending a response to the client
});









route.get('/',(req,res)=>{
    
    
    async function fetchDataFromCockroachDB() {
      const client = new Client({
        user: 'davis',
        password: 'xvtiI1tBmwGJJ8x8dggPew',
        host: 'winkywebus-13922.8nj.gcp-europe-west1.cockroachlabs.cloud',
        database: 'winkywebus',
        port: 26257,
        ssl: {
          rejectUnauthorized: false,
        },
      });
    
      try {
        // Connect to the CockroachDB (PostgreSQL) database
        await client.connect();
        console.log('Connected to CockroachDB');
    
        // Fetch data from the table
        const fetchDataQuery = 'SELECT * FROM testimonials_tbl';
        const result = await client.query(fetchDataQuery);

        const rows = result.rows;
    
        res.status(200).json(rows);
    
        // Process or use the fetched data as needed
    
      } catch (error) {
        console.error('Error connecting to CockroachDB or executing query:', error);
      } finally {
        // End the CockroachDB connection
        await client.end();
        console.log('CockroachDB connection ended.');
      }
    }
    
    // Call the function to fetch data
    fetchDataFromCockroachDB();
    
})

module.exports = route;

