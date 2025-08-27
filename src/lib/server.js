//initialize and manage database connection - utility for db operations
const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

//Enable thick mode
oracledb.initOracleClient({libDir: "C:\Oracle\instantclient_19_26"});

const { ORACLE_USER, ORACLE_PASSWORD, ORACLE_CONNECTION_STRING } = process.env;

   async function connectToOracle(){
    try{
        const connection = await oracledb.getConnection({
          user: ORACLE_USER,
          password: ORACLE_PASSWORD,
          connectString:ORACLE_CONNECTION_STRING,   
        });

        console.log("Connected to database");
        return connection;
    }
    catch(err){
        console.error("Error connecting to database:", err);
        throw err;
        }
    }
    module.exports = { connectToOracle};

//         //return rows as JSON obects with column names
//         const result = await connection.execute(`SELECT * FROM LAW_HEADER`,
//            // const result = await connection.execute(`SELECT SYSDATE FROM DUAL`,
//             [], 
//             { outFormat: oracledb.OUT_FORMAT_OBJECT }
//                 );  //return column names instead of arrays
        
//             await connection.close();
//             res.status(200).json(result.rows);

//         }catch(error){
//             console.error('Oracle Error: cannot fetch data from Header table:', error);
//             res.status(500).json({error: 'Failed to fetch data'});
//     }
// });
//     app.listen(3001, ()=> {
//         console.log('Server running on http://localhost:3001');



    

