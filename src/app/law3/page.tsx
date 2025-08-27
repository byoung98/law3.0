import { columns } from "@/app/law3/ndaInfo/columns";
import { auth } from '@/auth';
import { DataTable } from '@/components/datatable';
import { redirect } from "next/navigation";

//fetch and display the data
async function fetchData() {
  try{
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/ndas`, {
      method: "GET",
});

if(!response.ok){
  throw new Error("Failed to fetch data");
}

const result = await response.json();
  return result.data;
} catch (error){
  console.error("Error fetching data:", error);
  return [];
  }
}
export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const data = await fetchData();

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
        All Submitted NDAs
      </h1>
      <br/>
      <div className="container mx-auto py-10">
        <div className="bg-gray-50 p-6 rounded-lg border">
          <DataTable
            columns={columns}
            data={data}
            filterColumn="ndaID"
            filterColumnDisplay="Filter By NDA"
            disallowColumnHideList={['select', 'actions', 'ndaID']}
          />
        </div>
      </div>
    </>
    );
  }
