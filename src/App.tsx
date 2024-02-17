import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <main className="flex w-screen h-screen">
        <div className="border w-fit h-fit mx-auto my-auto rounded-lg bg-white p-6">
          <h1 className="text-center mb-2 text-xl font-bold">
            Chat Bubbles Recorder
          </h1>
          <form className="flex flex-col space-y-4" action="">
            <label>URL image source:</label>
            <input
              className="bg-slate-200 rounded-lg py-2 px-4 outline-none text-sm"
              type="text"
            />
            <label>User name:</label>
            <input
              className="bg-slate-200 rounded-lg py-2 px-4 outline-none text-sm"
              type="text"
            />

            <button className="px-4 py-2 bg-sky-400 text-white rounded-lg">
              Save
            </button>
          </form>
        </div>
      </main>
      <Toaster />
    </>
  );
}
