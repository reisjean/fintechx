import { Button } from '@/components/ui/button';
import React from 'react';
import { IoSend } from 'react-icons/io5';

interface ChatFormProps {
  input: string;
  formRef: React.RefObject<HTMLFormElement>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setIsChatting: (value: boolean) => void;
}

export function ChatForm({
  input,
  handleInputChange,
  handleSubmit,
  setIsChatting,
  formRef
}: ChatFormProps) {
  return (
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
  );
}