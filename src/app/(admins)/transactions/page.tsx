import { Metadata } from "next"
import { z } from "zod"

import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { transactions } from "@/data/transactions-schema"
import prisma from "@/lib/db"
import { Input } from "@/components/ui/input"
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTransactions() {
  // api call here
  // id, title, label, status, priority
  const _transactions = await prisma?.transactions.findMany({
    where: {
      Uid: 16453,
    },
    select: {
      transactionID: true,
      Particulars: true,
      Amount: true,
      Date: true,
      Place: true,
      commodityId: true,
      acaYear: true,
    },
  })
  const vals = _transactions?.map((t) => ({
    id: t.transactionID,
    particulars: t.Particulars,
    amount: t.Amount,
    date: t.Date?.toDateString().split(" ").splice(0, 3).join(" "),
    place: t.Place,
    commodityId: t.commodityId,
    acaYear: t.acaYear,
  }))

  return z.array(transactions).parse(vals)
}

export default async function TaskPage() {
  const tasks = await getTransactions()
  //const [uid, setuid] = useState()

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
            value={16053}
            // onChange={(event) => console.log("okay")}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </main>
  )
}
