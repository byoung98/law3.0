import {columns, NDAs} from "@/app/law3/ndaInfo/columns";
import {DataTable} from "@/app/law3/ndaInfo/datatable";

// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
import { headers } from "next/headers";

async function fetchData() {
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  if (!host) throw new Error("Unable to determine host");

  const baseUrl = `${protocol}://${host}`;
  const response = await fetch(`${baseUrl}/api/ndas`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch data from the database");
  }

  return response.json();
}


export default async function Page() {
    const data = await fetchData();
  
    return (
      <>
        <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
          All Submitted NDAs
        </h1>
        <br></br>
  
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </>
    );
  }