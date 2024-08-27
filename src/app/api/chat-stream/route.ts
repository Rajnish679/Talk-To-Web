import { ragChat } from "@/app/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async(req: NextRequest)=>{


     const {messages, sessionId}= await req.json()

     const lastMessages= messages[messages.length -1].content

     const response = await ragChat.chat(lastMessages, {streaming: true, sessionId})
     console.log(response);


     return aiUseChatAdapter(response)
}