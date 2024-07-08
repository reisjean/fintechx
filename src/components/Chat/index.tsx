'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { type PreMessages, usePreMessages } from "@/hooks/usePreMessages";
import { useChat } from 'ai/react';
import { useLayoutEffect, useRef, useState } from "react";
import { ChatForm } from "./ChatForm";
import { ChatMessage, ChatMessageTypes } from "./ChatMessage";
import { Header } from "./Header";
import { InteractiveButton } from "./InteractiveButton";

export const Chat = () => {
  const { preMessages, isLoading } = usePreMessages()
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const [isChatting, setIsChatting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)

  const randomMessages: PreMessages = !isLoading ? preMessages || [] : []

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
                {randomMessages.map((button) => (
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
          <ChatForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsChatting={setIsChatting}
            formRef={formRef}
          />
        </div>
      </div>
    </section>
  )
}