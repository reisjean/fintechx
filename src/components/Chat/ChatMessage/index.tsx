import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserLarge } from "react-icons/fa6";

interface ChatMessageProps {
  type: 'assistant' | 'user'
  text: string
}

export const ChatMessage = ({ type, text }: ChatMessageProps) => {
  const isAssistant = type === 'assistant'

  return (
    <div className={`${isAssistant ? '' : 'bg-boxBgDark'} flex items-start p-8 gap-3`}>
      <Avatar>
        {isAssistant
          ? <>
            <AvatarFallback>{isAssistant ? 'FX' : 'EU'}</AvatarFallback>
            <AvatarImage src="fx.png" />
          </>
          : <div className="bg-white grid center w-full h-full place-items-center">
            <FaUserLarge className="w-4 h-4" />
          </div>
        }
      </Avatar>
      <p className={`text-left ${isAssistant ? 'text-white' : 'text-grey-6'}`}>
        {text}
      </p>
    </div>
  )
}