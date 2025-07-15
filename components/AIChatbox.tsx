"use client";

import { useChat } from "@ai-sdk/react";
import { Message } from "ai";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Bot, XCircle, User } from "lucide-react";
import { useEffect, useRef } from "react";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const SUGGESTED_QUESTIONS = [
  "What side projects are you working on?",
  "Can you tell me about your most challenging project?",
  "What is your experience with backend development?",
  "How do you approach problem-solving?",
  "What are your favorite tools or frameworks?"
];

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const { messages, input, handleInputChange, handleSubmit, status, error } = useChat({});

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Add a ref to the form to allow programmatic submission
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";
  
  // Handler for suggestion click
  const handleSuggestionClick = (question: string) => {
    handleInputChange({ target: { value: question } } as React.ChangeEvent<HTMLInputElement>);
    setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 0);
  };

  console.log('messages', messages)
  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      {/* Header Title Section */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border border-gray-300 bg-background rounded-t">
        <span className="font-normal text-lg">My work experience Assistant</span>
        <button onClick={onClose} className="ms-auto block">
          <XCircle size={30} />
        </button>
      </div>
      <div className="flex h-[600px] flex-col rounded-b border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {status === "submitted" && lastMessageIsUser && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Something went wrong. Please try again.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <Bot />
              <span>Ask me anything about my work experience</span>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <Button
                    key={q}
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => handleSuggestionClick(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            ref={inputRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}


function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 shrink-0" />}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {content}
      </p>
      {!isAiMessage && (
        <User className="ml-2 h-10 w-10 rounded-full object-cover text-gray-400" />
      )}
    </div>
  );
}
