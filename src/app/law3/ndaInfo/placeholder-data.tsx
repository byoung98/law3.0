type NDAs = {
    ndaID: string;
    ndaType: string;
    agreementType: string;
    status: string;
    otherParty: string;
    endDate: string;
    requesterName: string;
 }


export const table: NDAs[] = [
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