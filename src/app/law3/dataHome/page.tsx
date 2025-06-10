import {columns, NDAs} from "@/app/law3/ndaInfo/columns";
import {DataTable} from "@/app/law3/ndaInfo/datatable";


async function fetchData() : Promise<NDAs[]> {
    // Simulate fetching data from an API or database
   return [
    {
        ndaID:"ICMNDADMA123",
        ndaType: "Master",
        agreementType:"standard",
        status:"Executed",
        otherParty:"Test",
        endDate:"Evergreen",
        requesterName:"Chris Fowler"
    },
    {
        ndaID:"ICMNDADMA183",
        ndaType: "Master",
        agreementType:"standard",
        status:"Executed",
        otherParty:"Other Country - Test",
        endDate:"Evergreen",
        requesterName:"Jennifer Anniston"
    },
    {
        ndaID:"ICMNDADMA199",
        ndaType: "Master",
        agreementType:"standard",
        status:"Pending",
        otherParty:"N/A",
        endDate:"Evergreen",
        requesterName:"Jane Doe"
    }
   ]
}



export default async function Page(){

const data = await fetchData()
    return (
   <> 
    <h1 style={{textAlign:'center', fontWeight:'bold', fontSize:'40px'}}>All Submitted NDAs</h1>
    <br></br>

    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
        </div>    </>
            );

}