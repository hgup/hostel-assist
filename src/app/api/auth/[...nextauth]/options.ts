import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/db"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "UID", type: "number", placeholder: "16001" },
        password: {
          label: "Uassword",
          type: "password",
          placeholder: "enter your password",
        },
      },
      // authorize function
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }
        // const thisYear = prisma.$queryRaw(`select  from `)

        console.log(credentials)
        const user = await prisma.stu_details.findFirst({
          where: { Uid: Number(credentials?.username) },
        })
        console.log(user)
        if (!user) {
          return null
        }

        if (user.Pwd !== credentials.password) {
          return null
        }
        const datasend = {
          id: user.Uid.toString(),
          name: user.Name,
          password: user.Pwd,
        }
        return datasend
      },
    }),
  ],
}
