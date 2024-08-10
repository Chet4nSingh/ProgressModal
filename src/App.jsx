import { useRef } from "react";
import Modal from "./components/Modal";

function App() {

  const modal = useRef();

  function handleShowModal() {
    modal.current.open();
  }

  return (
    <>
      <Modal ref={modal} />
      <h1 className="text-9xl text-zinc-800 mb-16">Progress Modal</h1>
      <button onClick={handleShowModal} className="bg-zinc-800 text-white p-4 text-4xl rounded-md">
        Show Modal
      </button>
    </>
  );
}

export default App;
