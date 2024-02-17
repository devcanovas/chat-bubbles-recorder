import { Configuration } from "../shared/configuration";

export function ChatHistory({
  configuration,
  history,
}: {
  configuration: Configuration;
  history: string[];
}) {
  return history.map((message) => (
    <div className="flex space-x-2 transition-all duration-1000">
      {configuration.imageUrl && (
        <img src={configuration.imageUrl} className="size-20 rounded-full" />
      )}
      <div className="bg-white p-4 border rounded-3xl rounded-tl-none flex items-center h-fit mt-auto">
        {configuration.username && <h2 className="font-black text-red-400">{configuration.username}</h2>}
        <p>{message}</p>
      </div>
    </div>
  ));
}
