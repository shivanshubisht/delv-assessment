import { OpenAIStream, type OpenAIStreamPayload } from "@/utils/openai-stream"

type RequestData = {
  prompt: string
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI")
}

export const runtime = "edge"

export default async function handler(request: Request) {
  const { prompt } = (await request.json()) as RequestData

  console.log(prompt)

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 })
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2048,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
