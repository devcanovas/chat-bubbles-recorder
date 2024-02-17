import { useEffect, useState } from "react";
import { Configuration } from "../shared/configuration";
import { ChatTyping } from "./chat-typing";
import { ChatHistory } from "./chat-history";

const blockedKeys: string[] = [
  "Dead",
  "Alt",
  "Control",
  "CapsLock",
  "Shift",
  "Backspace",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
  "ArrowDown",
  "Tab"
];

export function ChatBubbles({
  configuration,
}: {
  configuration: Configuration;
}) {
  const [content, setContent] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [content]);

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    switch (key) {
      case "Backspace": {
        const deletedCharContent = content.substring(0, content.length - 1);
        setContent(deletedCharContent);
        break;
      }
      case "Enter": {
        const addedHistory = [...history, content];
        setHistory(addedHistory);
        setContent("")
        break;
      }
      default: {
        if (blockedKeys.includes(key)) break;
        const handleContent = content + key;
        setContent(handleContent);
      }
    }
  }

  return (
    <section>
      <div className="absolute bottom-24 left-5 flex flex-col space-y-2">
        {history && (
          <ChatHistory configuration={configuration} history={history} />
        )}
      </div>
      {content && <ChatTyping>{content}</ChatTyping>}
    </section>
  );
}
