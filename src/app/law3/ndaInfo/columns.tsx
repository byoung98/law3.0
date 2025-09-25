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

export type NDAs = {
  get(NDA_ID: string, CONTRACT_ADMIN: string, CIP: string, STATUS: string, BU: string, ENDDATE: string, REQUESTER_NAME: string): unknown;
  NDA_ID: string;
  CONTRACT_ADMIN: string;
  CIP: string;
  STATUS: string;
  BU: string;
  ENDDATE: string;
  REQUESTER_NAME: string;
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
         onClick={() => navigator.clipboard.writeText(row.original.NDA_ID)}
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
          <Label htmlFor="NDA_ID">NDA ID</Label>
          <Input
            id="NDA_ID"
            value={row.original.NDA_ID}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="CONTRACT_ADMIN">NDA Type</Label>
          <Input
            id="CONTRACT_ADMIN"
            value={row.original.CONTRACT_ADMIN}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="CIP">Agreement Type</Label>
          <Input
            id="CIP"
            value={row.original.CIP}
            readOnly
            className="mb-4"
          />
          <Label htmlFor="STATUS">STATUS</Label>
          <Input
            id="STATUS"
            value={row.original.STATUS}
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
    accessorKey: "NDA_ID",
    header: "NDA ID",
    },
  {
    accessorKey: "CONTRACT_ADMIN",
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
    accessorKey: "CIP",
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
    accessorKey: "STATUS",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "BU",
    header: "Other Party",
  },
  {
    accessorKey: "ENDDATE",
    header: "End Date",
  },
  {
    accessorKey: "REQUESTER_NAME",
    header: "Requester Name",
  },
];