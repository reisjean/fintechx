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

messages: [
  {
    role: "user",
    content: "Onde estão localizados os escritórios da FinTechX?",
  },
  {
    role: "assistant",
    content:
      "Os escritórios da FinTechX estão localizados em São Paulo, Madri e Nova York. Posso te ajudar com mais alguma coisa?",
  },
  { role: "user", content: "qual a história da empresa?" },
  {
    role: "assistant",
    content:
      "A FinTechX foi fundada por Gandalf e Dumbledore em 1876 com a missão de democratizar o acesso a serviços financeiros de qualidade para todos os brasileiros, oferecendo soluções inovadoras e acessíveis. A empresa busca constantemente aprimorar seus serviços e tecnologias para atender às necessidades do mercado financeiro de forma moderna e ágil. Posso te ajudar com mais alguma coisa?",
  },
  {
    role: "user",
    content: "quais os tipos de investimentos disponíveis?",
  },
]
