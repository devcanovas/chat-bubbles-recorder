import { useEffect, useState } from "react";
import { Configuration } from "../shared/configuration";
import { Constants } from "../shared/utils/constants";
import { ChatHistory } from "./chat-history";
import { ChatTyping } from "./chat-typing";

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
  "Tab",
];

export function ChatBubbles({
  configuration,
}: {
  configuration: Configuration;
}) {
  const [content, setContent] = useState<string>(
    Constants.INITIAL_STATE_EMPTY_STRING
  );
  const [history, setHistory] = useState<string[]>(
    Constants.INITIAL_STATE_EMPTY_ARRAY
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [content]);

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    switch (key) {
      case Constants.BACKSPACE_KEY: {
        setContent(content.substring(0, content.length - 1));
        break;
      }
      case Constants.ENTER_KEY: {
        setHistory([...history, content]);
        setContent(Constants.INITIAL_STATE_EMPTY_STRING);
        break;
      }
      default: {
        if (blockedKeys.includes(key)) break;
        if (!event.ctrlKey) setContent(content + key);
        if (event.ctrlKey && key === Constants.D_KEY) resetChatStates();
      }
    }
  }

  function resetChatStates() {
    setContent(Constants.INITIAL_STATE_EMPTY_STRING);
    setHistory(Constants.INITIAL_STATE_EMPTY_ARRAY);
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
