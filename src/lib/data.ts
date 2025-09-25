const oracledb = require('oracledb');
// define reusuable database queries
import {connectToOracle} from "../lib/server";

export async function getLawHeaderData(){
let connection = null;

try{
  //establish a connection to the database
  connection = await connectToOracle();

  //validate if the connection is successful
    if (!connection) {
        throw new Error("Database connection is not established");
    }
    //query the Header table 
    const result = await connection.execute(`SELECT * FROM LAW_HEADER`,
      [], 
                 { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
            return result.rows;

        }catch(error){
            console.error('Error fetching data:', error);
            throw new Error("Failed to fetch data from Law_Header table");
    }finally{
      //ensure the connectiom closes
      if (connection){
        try{
          await connection.close();
        }catch(error){
          console.error("Error closing connections:", error);
        }
      }
    }
}

