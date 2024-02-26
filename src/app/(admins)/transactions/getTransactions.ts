"use server"
import { z } from "zod"
import { transactions } from "@/data/transactions-schema"
import prisma from "@/lib/db"

// Simulate a database read for tasks.
export default async function getTransactions(uid: number) {
  // api call here
  // id, title, label, status, priority
  console.log("running in server")
  const _transactions = await prisma?.transactions.findMany({
    where: {
      Uid: uid,
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
