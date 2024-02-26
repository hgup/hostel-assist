"use client"

import { Metadata } from "next"
import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
// export const metadata: Metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// }
import getTransactions from "./getTransactions"

export default async function TaskPage() {
  const [uid, setuid] = useState(16453)
  const [tasks, setTasks] = useState({})
  useEffect(() => {
    getTransactions(uid).then((task) => setTasks(task))
  }, [uid])

  return (
    <main className="flex flex-col md:m-5 p-3 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row min-w-full justify-between p-4 border-dotted border-gray-200 rounded-lg border-2 items-top  space-x-4 ">
          <div className="flex flex-col">
            <div>Hursh Gupta</div>
            <div className="text-sm font-light">MPC</div>
          </div>
          <Input
            placeholder="Filter tasks..."
            value={uid}
            onChange={(e) => setuid(parseInt(e.target.value))}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </main>
  )
}
