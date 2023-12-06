import Link from "next/link"
import prisma from "@/lib/db"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Home() {
  const students = await prisma.stu_details.findMany(
  )
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Link href="/tasks">Go to Tasks</Link>
      </div>
      <h1>Some furious headings</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {students.map((student) => {
          return (
            <Card key={student.Uid + student.acaYear}>
              <CardHeader>
                <CardTitle>{student.Name}</CardTitle>
                <CardDescription>
                  {student.Class} {student.section}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
