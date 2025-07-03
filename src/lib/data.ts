import { NDAs } from '@/app/law3/ndaInfo/columns'
import {neon} from '@neondatabase/serverless'

export default function connectToDB() {
  async function create(data: NDAs) {
    'use server';

    //Connect to the database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const ndaInfo = data.get(
        data.ndaID,
         data.ndaType,
          data.agreementType,
           data.status, data.otherParty,
            data.endDate,
             data.requesterName); 


    //Insert the data into the database
    await sql`INSERT INTO NDA VALUES(${ndaInfo})`;
  }
  return {
    create: async (data: NDAs) => {
      await create(data);
    },
  }


   
  }


}