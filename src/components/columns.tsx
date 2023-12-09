"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { acaYears, places } from "@/data/transactions-data"
import { Transaction, transactions } from "@/data/transactions-schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { LucideIcon } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TID" />
    ),
    cell: ({ row }) => <div className="w-[60px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "particulars",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Particulars" />
    ),
    cell: ({ row }) => {
      const commodityId = row.original.commodityId
      return (
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex space-x-2 cursor-alias">
              <span className="max-w-[100px] md:max-w-[300px] truncate font-medium">
                {row.getValue("particulars")}
              </span>
              {!!commodityId && <Badge variant="outline">{commodityId}</Badge>}
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-[400px]">
            <div className="flex space-x-2">
              <span className="font-large">{row.getValue("particulars")}</span>
              {!!commodityId && <Badge variant="outline">{commodityId}</Badge>}
            </div>
          </HoverCardContent>
        </HoverCard>
      )
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("amount")}</div>,
    enableHiding: false,
    // TODO
    // footer: ({ table }) => {
    //   let amountSum = 0
    //   console.log(table.getFilteredRowModel().flatRows.values)
    //   return <div>hi</div>
    // },
  },
  {
    accessorKey: "place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      const place = places.find(
        (place) => place.value === row.getValue("place")
      )

      if (!place) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {place.icon && (
            <place.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{place.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("date")}</div>,
    enableHiding: true,
  },
  {
    accessorKey: "acaYear",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Academic Year" />
    ),
    cell: ({ row }) => {
      const acaYear:
        | {
            label: string
            value: string
            icon: LucideIcon
          }
        | undefined = acaYears?.find(
        (year) => year?.value === row.getValue("acaYear")
      )

      if (!acaYear) {
        return null
      }

      return (
        <div className="flex items-center">
          {acaYear.icon && (
            <acaYear.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{acaYear.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
