import { useCallback, useRef, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modal = useRef();

  function handleShowModal() {
    setModalIsOpen(true);
    modal.current.open();
  }

  const handleCloseModal = useCallback(function handleCloseModal() {
    setModalIsOpen(false);
    modal.current.closeModal();
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} closeModal={handleCloseModal} ref={modal} />
      <h1 className="text-9xl text-zinc-800 mb-16">Progress Modal</h1>
      <button onClick={handleShowModal} className="bg-zinc-800 text-white p-4 text-4xl rounded-md">
        Show Modal
      </button>
    </>
  );
}

export default App;
