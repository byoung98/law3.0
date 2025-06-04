"use client";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { ResponsiveDialog } from "./ndaDetails/responsiveDialog";
import{
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuTrigger,}
from "@/components/ui/dropdown-menu";

import{
   ColumnDef, 
   ColumnFiltersState,
   SortingState,
   VisibilityState,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,   
   useReactTable,
} from "@tanstack/react-table";
import { 
   Table, 
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
}

export function DataTable<TData, TValue>({
   columns,
   data,
}: DataTableProps<TData, TValue>) {
   const [sorting, setSorting] = React.useState<SortingState>([]);
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
   const[columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
   const[rowSelection, setRowSelection] = React.useState({});
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
         sorting,
         columnFilters,
         columnVisibility,
         rowSelection,
      },
   });

   return (
      <div>
         
         <div className="flex items-center p-4">
            <Input
               placeholder="Filter by NDA ID"
               value={(table.getColumn("ndaID")?.getFilterValue() as string) ?? ""}
               onChange={(event) =>
                  table.getColumn("ndaID")?.setFilterValue(event.target.value)
               }
            />
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="m1-auto">
                     Columns</Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  {table
                  .getAllColumns()
                  .filter(
                     (column) => column.getCanHide() && column.id !== "actions" && column.id !== "ndaID")
                  .map((column) => {
                     return (
                     <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                           column.toggleVisibility(!!value)
                        }
                     >
                       {column.id} 
                     </DropdownMenuCheckboxItem>
                     );
                  })}
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
         
      <div className="rounded-md border">
         <Table>
            <TableHeader>
               {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                     {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                           {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                           )}
                        </TableHead>
                     ))}
                  </TableRow>
               ))}
            </TableHeader>
            <TableBody>
               {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                     {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                           {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                           )}
                        </TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
      <div className="text-muted-foreground flex justify-center text-sm">
         {table.getFilteredSelectedRowModel().rows.length} of{" "}
         {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center justify-between p-4">
         <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
         >
            Previous
         </Button>
         <span>
            Page{" "}
            <strong>
               {table.getState().pagination.pageIndex + 1} of{" "}
               {table.getPageCount()}
            </strong>
         </span>
         <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
         >
            Next
         </Button>
         
      </div>
      </div>
      
   );
}