"use client";

import React from "react";

interface NdaDetails { NDA_ID: string;
    [key: string]: string | string[] | undefined;
}
    
    export default function NdaDetails({ }: { params: Promise<NdaDetails> }) {

    // Simulate fetching NDA details based on the ID
    const ndaDetails = {
        NDA_ID: "ICMNDADMA123",
        ndaType: "Master",
        agreementType: "Standard",
        status: "Executed",
        otherParty: "Test",
        endDate: "Evergreen",
        requesterName: "Chris Fowler",
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">NDA Details</h1>
            <div className="mt-4">
                <p><strong>NDA ID:</strong> {ndaDetails.NDA_ID}</p>
                <p><strong>NDA Type:</strong> {ndaDetails.ndaType}</p>
                <p><strong>Agreement Type:</strong> {ndaDetails.agreementType}</p>
                <p><strong>Status:</strong> {ndaDetails.status}</p>
                <p><strong>Other Party:</strong> {ndaDetails.otherParty}</p>
                <p><strong>End Date:</strong> {ndaDetails.endDate}</p>
                <p><strong>Requester Name:</strong> {ndaDetails.requesterName}</p>
            </div>
        </div>
    );
    }