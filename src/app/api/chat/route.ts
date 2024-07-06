import config from "@/prompt.json"
import { openai } from "@ai-sdk/openai"
import { streamText, type CoreMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json()

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: config.prompt,
    messages,
  })

  return result.toAIStreamResponse()
}
