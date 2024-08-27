import { cn } from "../lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUsermessage: boolean;
}

const Message = ({ content, isUsermessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUsermessage,
        "bg-zink-900/25": !isUsermessage,
      }, )}
    >
      <div className="p-6">
        <div className="max-w-3xl flex items-start  gap-2.5">
          {isUsermessage ? (
            <div className="flex  gap-5">
              <div className="size-10 bg-blue-900 border border-blue-500 rounded-full flex items-center justify-center">
                <div>
                  {" "}
                  <User className="size-5 text-white" />
                </div>
              </div>

              <div className="flex flex-col gap-5 ">
                <p className="text-sm items-center justify-center text-white">
                  User
                </p>

                <p className="text-sm text-white dark:text-gray-400">
                  {content}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex  gap-5 ">
              <div className="size-10 bg-zinc-800 shrink-0 border border-zinc-500 rounded-full flex items-center justify-center">
                <div>
                  {" "}
                  <Bot className="size-5 text-white" />
                </div>
              </div>

              <div className="flex flex-col gap-5 ">
                <p className="text-sm items-center justify-center text-white">
                  Website
                </p>

                <p className="text-sm text-white dark:text-gray-400">
                  {content}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* <div className="flex mx-auto max-w-3xl gap-2.5 items-start">
                <div className={cn("size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center ", {
                    "bg-blue-950 border-blue-700 text-zinc-200 ": isUsermessage,
                }
            )}>

{
    isUsermessage ? <User className="size-5 " /> : <Bot className="size-5 text-white" />
}
<div className="flex flex-col ml-6 w-full">
    <div className="flex items-center justify-center space-x-2">
        <span className="text-sm font-semibold text-gray-700 dark:text-white">{isUsermessage ? "You" : "website"}</span>
    </div>
</div>

            </div>
            </div> */}
      </div>
    </div>
  );
};

export default Message;
