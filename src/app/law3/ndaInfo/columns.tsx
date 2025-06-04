"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ColumnFilterState } from "@/components/ui/column-filter-state";
import {ArrowUpDown} from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {Button} from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } 
from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

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
    id: "actions",
    cell: ({ row }) => (
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
          <DropdownMenuItem>View NDA Details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
    },

    {
    accessorKey: "ndaID",
    header: "NDA ID",
  },
  {
    accessorKey: "ndaType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
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