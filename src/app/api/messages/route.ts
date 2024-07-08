import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

export async function GET(req: Request) {
  const filePath = path.join(process.cwd(), "src/json/pre_messages.json")
  const messages = JSON.parse(fs.readFileSync(filePath, "utf-8"))

  const shuffled = messages.sort(() => 0.5 - Math.random())

  return NextResponse.json(shuffled.slice(0, 4))
}
