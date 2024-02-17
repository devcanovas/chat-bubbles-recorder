import { useEffect, useState } from "react";
import { ChatBubble } from "./components/chat-bubble";

export function App() {
  const [oldBubbles, setOldBubbles] = useState<string[]>([]);
  const [actuaBubbleContent, setActuaBubbleContent] = useState<string>("");

  useEffect(() => {
    window.addEventListener("keydown", detectKeyDown);

    return () => {
      window.removeEventListener("keydown", detectKeyDown);
    };
  }, [actuaBubbleContent]);

  const detectKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Dead": {
        break;
      }
      case "Alt": {
        break;
      }
      case "Control": {
        break;
      }
      case "CapsLock": {
        break;
      }
      case "Shift": {
        break;
      }
      case "Backspace": {
        let content = actuaBubbleContent;
        content = content.slice(0, -1);
        setActuaBubbleContent(content);
        break;
      }
      case "Enter": {
        const array = oldBubbles;
        array.push(actuaBubbleContent);
        setOldBubbles(array);
        setActuaBubbleContent('');
        break;
      }
      default: {
        const content = actuaBubbleContent + e.key;
        setActuaBubbleContent(content);
      }
    }
  };

  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col space-y-4 absolute bottom-0 left-5">
        {oldBubbles.length > 0 && oldBubbles.map(oldBubble => <ChatBubble>{oldBubble}</ChatBubble>)}
        {actuaBubbleContent && <ChatBubble><span className="animate-bounce font-black text-zinc-600">...</span></ChatBubble>}
      </div>
    </main>
  );
}
