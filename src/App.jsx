import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal />
      <h1 className="text-9xl text-zinc-800 mb-16">Progress Modal</h1>
      <button className="bg-zinc-800 text-white p-4 text-4xl rounded-md">
        Show Modal
      </button>
    </>
  );
}

export default App;
