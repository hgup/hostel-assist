import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { UserNav } from "@/components/user-nav"
import { taskSchema } from "@/data/schema"
import mockData from "./mock"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  // api call here
  // id, title, label, status, priority
  const tasks = await prisma?.transactions.findMany({
    where: {
      Uid: 16453

    },
    select: {
      transactionID: true,
      Particulars: true,
      Place: true,
      acaYear: true,
      Quantity: true
      
    }
  })
  const vals = tasks?.map( t => ({
    id: t.transactionID.toString(),
    title: t.Particulars,
    label: t.Place,
    status: t.acaYear,
    priority: t.Quantity.toString(),
  }))

  return z.array(taskSchema).parse(vals)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div> */}
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
