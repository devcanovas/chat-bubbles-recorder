import logo from "../assets/logo-photo.jpg";

interface ChatBubbleProps {
  children: React.ReactNode;
}

export function ChatBubble({ children }: ChatBubbleProps) {
  return (
    <div className="flex space-x-4">
      <img src="https://github.com/devcanovas.png" className="size-20 rounded-full shadow-md" />
      <div className="flex flex-col space-y-3">
        <span className="font-normal px-6 py-4 text-xl bg-white text-zinc-800 rounded-tr-3xl rounded-bl-3xl shadow-md flex items-start justify-center flex-col">
          <h2 className="text-lg font-bold text-red-400">devcanovas</h2>
          {children}
        </span>
      </div>
    </div>
  );
}
