import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserLarge } from "react-icons/fa6";

export type ChatMessageTypes = 'assistant' | 'user'

interface ChatMessageProps {
  type: ChatMessageTypes
  text: string
}

export const ChatMessage = ({ type, text }: ChatMessageProps) => {
  const isAssistant = type === 'assistant'

  return (
    <div className={`${isAssistant ? '' : 'bg-grey-4 dark:bg-boxBgDark'} flex items-start p-8 gap-3`} data-testid="chat-message-item">
      <Avatar>
        {isAssistant
          ? <>
            <AvatarFallback>{isAssistant ? 'FX' : 'EU'}</AvatarFallback>
            <AvatarImage src="fx.png" />
          </>
          : <div className="bg-grey-6 dark:bg-white grid center w-full h-full place-items-center">
            <FaUserLarge className="w-4 h-4 text-grey-4 dark:text-grey-6" />
          </div>
        }
      </Avatar>
      <p className="text-left text-grey-3 dark:text-white">
        {text}
      </p>
    </div>
  )
}