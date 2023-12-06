import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Link href="/tasks">Go to Tasks</Link>
      </div>
    </main>
  )
}
