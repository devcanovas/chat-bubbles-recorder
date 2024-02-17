import { Configuration } from "../shared/configuration";

export function ChatHistory({
  configuration,
  history,
}: {
  configuration: Configuration;
  history: string[];
}) {
  return history.map((message) => (
    <div className="flex space-x-2 animatecss animatecss-slideInLeft">
      {configuration.imageUrl && (
        <img src={configuration.imageUrl} className="size-20 rounded-full" />
      )}
      <div className="bg-white p-4 border rounded-3xl rounded-tl-none flex justify-center h-fit mt-auto flex-col">
        {configuration.username && (
          <h2 className="font-black text-zinc-700">{configuration.username}</h2>
        )}
        <p>{message}</p>
      </div>
    </div>
  ));
}
