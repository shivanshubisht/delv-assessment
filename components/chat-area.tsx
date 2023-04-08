import { Textarea } from "@/components/ui/textarea"

export default function ChatArea() {
  return (
    <>
      <h1 className="h-full">Index Page</h1>
      {/* <div className="px-10 py-5"> */}
      <div className="bg-gray-300 dark:bg-gray-700/60">
        <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:my-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
          <div className="relative flex w-full grow flex-col rounded-md bg-white py-2 shadow-md dark:bg-gray-700 dark:text-white md:py-3 md:pl-4">
            <Textarea placeholder="Send a message..." />
            <button className="absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent dark:hover:bg-gray-900 enabled:dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-1 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
