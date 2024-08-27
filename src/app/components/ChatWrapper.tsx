"use client";

import Messages from "./Messages";

import { useChat, Message } from "ai/react";

import ChatInput from "./ChatInput";

export const ChatWrapper = ({ sessionID, initialMessages }: { sessionID: string, initialMessages: Message[] }) => {
  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionID },
    initialMessages,

  });

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between ">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col ">
        {JSON.stringify(messages)}
      </div>

  

      <Messages messages={messages} />

      <ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setInput={setInput} />

      {/* <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} type="text" />
        <button type="submit"> send</button>
      </form> */}


    </div>
  );
};
