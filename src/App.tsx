import { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";
import { Configuration } from "./shared/configuration";
import { Constants } from "./shared/utils/constants";
import { ChatBubbles } from "./components/chat-bubbles";

export function App() {
  const [username, setUsername] = useState<string>(Constants.INITIAL_STATE_EMPTY_STRING);
  const [imageUrl, setImageUrl] = useState<string>(Constants.INITIAL_STATE_EMPTY_STRING);
  const [configuration, setConfiguration] = useState<Configuration>(
    new Configuration()
  );

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    handleConfig();
    toast.success(Constants.SUCCESSFULL_SAVE_SETTINGS_MESSAGE);
  }

  function handleConfig() {
    const newConfiguration = new Configuration();
    newConfiguration.isSetted = true;
    newConfiguration.username = username;
    newConfiguration.imageUrl = imageUrl;
    setConfiguration(newConfiguration);
  }

  return (
    <>
      <main className="flex w-screen h-screen">
        {!configuration.isSetted && (
          <section className="border w-fit h-fit mx-auto my-auto rounded-lg bg-white p-6">
            <h1 className="text-center mb-2 text-xl font-bold">
              Chat Bubbles Recorder
            </h1>
            <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4">
              <label>URL image source:</label>
              <input
                className="bg-slate-200 rounded-lg py-2 px-4 outline-none text-sm"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setImageUrl(event.target.value);
                }}
              />
              <label>User name:</label>
              <input
                className="bg-slate-200 rounded-lg py-2 px-4 outline-none text-sm"
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setUsername(event.target.value);
                }}
              />

              <button className="px-4 py-2 bg-sky-400 text-white rounded-lg">
                Save
              </button>
            </form>
          </section>
        )}
        {configuration.isSetted && (
          <ChatBubbles configuration={configuration} />
        )}
      </main>
      <Toaster />
    </>
  );
}
