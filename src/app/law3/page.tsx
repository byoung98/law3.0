import { columns, ColumnDefProps } from "@/app/law3/ndaInfo/columns";
import { auth } from "@/auth";
import { DataTable } from "@/components/datatable";
import { redirect } from "next/navigation";

async function fetchData(): Promise<ColumnDefProps[]> {
  // Simulate fetching data from an API or database
  return [
    {
      ndaID: "ICMNDADMA123",
      ndaType: "Master",
      agreementType: "standard",
      status: "Executed",
      otherParty: "Test",
      endDate: "Evergreen",
      requesterName: "Chris Fowler",
    },
    {
      ndaID: "ICMNDADMA183",
      ndaType: "Master",
      agreementType: "standard",
      status: "Executed",
      otherParty: "Other Country - Test",
      endDate: "Evergreen",
      requesterName: "Jennifer Anniston",
    },
    {
      ndaID: "ICMNDADMA199",
      ndaType: "Master",
      agreementType: "standard",
      status: "Pending",
      otherParty: "N/A",
      endDate: "Evergreen",
      requesterName: "Jane Doe",
    },
  ];
}

export default async function Page() {
  // //////////////////////////////////////////////
  // Check session
  // //////////////////////////////////////////////
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  // const userId = session?.user?.id;
  // const roles = session?.user?.roles;
  // const name = session?.user?.name as string;

  const data = await fetchData();
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
        All Submitted NDAs
      </h1>
      <br></br>
      <div className="container mx-auto py-10">
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2>NDAs</h2>
          <DataTable
            columns={columns}
            data={data}
            filterColumn="ndaID"
            filterColumnDisplay="Filter By NDA"
            disallowColumnHideList={["select", "actions", "ndaID"]}
          />
        </div>
      </div>
    </>
  );
}