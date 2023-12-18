import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <Loader2 className="w-10 h-10 animate-spin" />
    </main>
  )
}
