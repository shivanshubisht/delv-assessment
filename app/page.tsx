import ChatArea from "@/components/chat-area"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <main className="flex h-screen flex-col">
      <SiteHeader />
      <ChatArea />
    </main>
  )
}
