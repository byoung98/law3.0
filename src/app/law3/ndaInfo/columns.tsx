"use client";
import { ColumnDef } from "@tanstack/react-table";
import {ArrowUpDown} from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } 
from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//import { useState } from "react";


export type NDAs = {
  ndaID: string;
  ndaType: string;
  agreementType: string;
  status: string;
  otherParty: string;
  endDate: string;
  requesterName: string;
};

export const columns: ColumnDef<NDAs>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()||
          (table.getIsSomeRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table. toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    id: "actions",
      cell: ({ row }) => {
        //const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state
        //const [selectedNdaID, setSelectedNdaID] = useState<string | null>(null); // Store selected NDA ID

        //const handleViewDetails = (ndaID: string) => {
          //  setSelectedNdaID(ndaID); // Set the selected NDA ID
            //setIsDialogOpen(true); // Open the dialog
       // };
        return (
          <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem
         onClick={() => navigator.clipboard.writeText(row.original.ndaID)}
          >
            Copy NDA ID
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
           <Dialog>
        <DialogTrigger asChild>
          <Button>View NDA Details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>NDA Details</DialogTitle>
            <DialogDescription>
      The following are details of this NDA
            </DialogDescription>
          </DialogHeader>
          <Label htmlFor="ndaID">NDA ID</Label>
          <Input
            id="ndaID"
            value={row.original.ndaID}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="ndaType">NDA Type</Label>
          <Input
            id="ndaType"
            value={row.original.ndaType}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="agreementType">Agreement Type</Label>
          <Input
            id="agreementType"
            value={row.original.agreementType}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="status">Status</Label>
          <Input
            id="status"
            value={row.original.status}
            readOnly
            className="mb-4" ></Input>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
    </Dialog>
    
                    </DropdownMenuContent>
                </DropdownMenu>
                 
                
                  </>
              );
          },
      },

    {
    accessorKey: "ndaID",
    header: "NDA ID",
    },
  {
    accessorKey: "ndaType",
    header: ({ column }) => {
      return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        NDA Type          
        <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    },
  {
    accessorKey: "agreementType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Agreement Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "otherParty",
    header: "Other Party",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "requesterName",
    header: "Requester Name",
  },
];