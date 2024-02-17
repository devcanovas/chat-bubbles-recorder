import { useEffect, useState } from "react";
import { Configuration } from "../shared/configuration";

export function ChatBubbles({
  configuration,
}: {
  configuration: Configuration;
}) {
  const [content, setContent] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("keydown", handlerKeyDown);

    return () => {
      window.removeEventListener("keydown", handlerKeyDown);
    };
  }, [content]);

  function handlerKeyDown(event: KeyboardEvent) {
    const handleContent = content + event.key;
    setContent(handleContent);
  }

  return (
    <div>
      is working!
    </div>
  );
}
