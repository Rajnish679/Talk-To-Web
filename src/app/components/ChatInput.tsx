"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import {useChat } from 'ai/react'

type handleInputChange = ReturnType <typeof useChat>["handleInputChange"]
type handleSubmit = ReturnType <typeof useChat>["handleSubmit"]
type setInput = ReturnType <typeof useChat>["setInput"]

interface ChatInputProps{
input: string    
handleInputChange: handleInputChange
handleSubmit:handleSubmit
setInput: setInput
}

const ChatInput = ({handleInputChange, handleSubmit, setInput, input}: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 bottom-0 left-0 w-full absolute">
      <div
        className="mx-2 gap-3 md:mx-4 md:last:md:mb-6 lg:mx-auto lg:mx-w-2xl xl:max-w-3xl"
      >
        <div className="relative flex h-full items-stretch md:flex-col ">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form onSubmit={handleSubmit} className="relative ">
              <Textarea onChange={handleInputChange}
              onKeyDown={(e)=>{
                if(e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit()
                    setInput("")
                }
              }}
              value={input}
                minRows={4}
                autoFocus
                placeholder="Ask your question..."
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
              />
              <Button
                size="sm"
                type="submit"
                className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
