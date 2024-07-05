'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';
import { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Button } from "../ui/button";
import { ChatMessage } from "./ChatMessage";
import { InteractiveButton } from "./InteractiveButton";

const preMessages = [
  {
    id: '019084f7-65c6-7237-9d8e-f2304a16f08e',
    text: 'Quais são os horários de atendimento da FinTechX?'
  },
  {
    id: '019084f7-83c4-7965-818c-0f22a87d663d',
    text: 'Onde estão localizados os escritórios da FinTechX?'
  },
  {
    id: '019084f7-a376-72f6-92ac-fd13fa83ecc6',
    text: 'Quem fundou a FinTechX e quando?'
  },
  {
    id: '019084f7-d682-7f04-8ced-63c025d8529d',
    text: 'Como a FinTechX protege as minhas informações pessoais?',
  }
]

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const [isChatting, setIsChatting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handlePreMessageButtonClick = (message: string) => {
    setIsChatting(true)
    setInput(message)
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.requestSubmit()
      }
    }, 0)
  }

  return (
    <main className="text-center grid items-center h-screen">
      <div className={`w-full h-screen bg-white dark:bg-dark grid ${isChatting ? 'grid-rows-[120px_1fr_min-content]' : 'grid-rows-[120px_min-content_1fr_min-content]'}`}>
        <header className="grid grid-cols-[50px_auto_54px] w-full items-center px-8">
          <Button variant="ghost" className="bg-grey-4 dark:bg-boxBgDark text-grey-6 rounded-xl h-12">
            <FaChevronLeft />
          </Button>
          <h3 className="text-lg text-dark dark:text-white">Assuntos Gerais</h3>
          <Button variant="ghost" className="bg-none rounded-xl h-12 text-grey-1 dark:text-grey-3">
            <BsThreeDots className="h-10 w-10" />
          </Button>
        </header>

        {isChatting ? (
          <ScrollArea className="w-100">
            {messages.map(m => (
              <ChatMessage key={m.id} type={m.role as 'assistant' | 'user'} text={m.content} />
            ))}
          </ScrollArea>
        ) : (
          <>
            <h1 className="text-4xl font-semibold text-grey-3 p-12 pt-8">FinTechX</h1>

            <div>
              <ScrollArea className="w-100">
                <div className="flex flex-col gap-4 box-border px-8">
                  {preMessages.map((button) => (
                    <InteractiveButton
                      key={button.id}
                      text={button.text}
                      onClick={() => handlePreMessageButtonClick(button.text)}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </>
        )}

        <div className="p-8 pb-6 pt-2 w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-flow-col grid-cols-[1fr_min-content] items-center border-neutral-600 border-[1px] rounded-lg bg-boxBgDark"
          >
            <input
              placeholder="Envie sua pergunta"
              className="bg-transparent border-none focus:outline-none pl-4 text-md w-full text-grey-2"
              value={input}
              onChange={handleInputChange}
            />
            <Button
              variant="ghost"
              type="submit"
              className="bg-none text-white rounded-xl h-12 w-14"
              size="icon"
              onClick={(e) => {
                setIsChatting(true)
              }}
            >
              <IoSend className="text-slate-300 h-6 w-8" />
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}