export function ChatTyping({ children }: { children: string }) {
  return (
    <div className="bg-white p-4 border rounded-full rounded-tl-none absolute bottom-5 left-5 duration-1000">
      <span>{children}</span>
      <span className="animate-pulse h-full p-[0.1px] bg-black" />
    </div>
  );
}
