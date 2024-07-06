'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';
import { useLayoutEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { Button } from "../ui/button";
import { ChatMessage, ChatMessageTypes } from "./ChatMessage";
import { Header } from "./Header";
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
  const lastMessageRef = useRef<HTMLDivElement>(null)

  const handlePreMessageButtonClick = (message: string) => {
    setIsChatting(true)
    setInput(message)
    setTimeout(() => {
      if (formRef.current) formRef.current.requestSubmit()
    }, 0)
  }

  const scrollToEnd = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: "end"
      });
    }
  }

  useLayoutEffect(() => {
    scrollToEnd()

    setTimeout(() => {
      if (lastMessageRef.current) scrollToEnd()
    }, 1000)
  }, [messages.length])

  return (
    <section className="text-center grid items-center">
      <div className={`w-full h-dvh bg-white dark:bg-dark grid ${isChatting ? 'grid-rows-[120px_minmax(0,1fr)_min-content]' : 'grid-rows-[120px_min-content_minmax(0,1fr)_min-content]'}`}>
        <Header />

        {isChatting ? (
          <ScrollArea>
            {messages.map((message, index) => (
              <div key={message.id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                <ChatMessage
                  type={message.role as ChatMessageTypes}
                  text={message.content}
                />
              </div>
            ))}
          </ScrollArea>
        ) : (
          <>
            <h1 className="text-4xl font-semibold text-grey-3 p-12 pt-8">FinTechX</h1>

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
          </>
        )}

        <div className="px-8 py-6 pt-2 w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-2 grid grid-flow-col grid-cols-[1fr_min-content] items-center border-neutrals-1 dark:border-neutral-600 border-[1px] rounded-lg bg-white dark:bg-boxBgDark"
          >
            <input
              placeholder="Envie sua pergunta"
              className="bg-transparent border-none focus:outline-none pl-4 text-md w-full text-grey-3 dark:text-grey-2"
              value={input}
              onChange={handleInputChange}
            />
            <Button
              variant="ghost"
              type="submit"
              className="bg-none text-white rounded-xl h-12 w-14 hover:bg-transparent"
              size="icon"
              aria-label="Enviar mensagem"
              onClick={() => { setIsChatting(true) }}
            >
              <IoSend className="text-slate-300 h-6 w-8" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}