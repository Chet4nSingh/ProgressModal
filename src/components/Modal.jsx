import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { forwardRef } from "react";

export default forwardRef(function Modal({ open, closeModal }, ref) {
  const [timeRemaining, setTimeRemaining] = useState(3000);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      closeModal() {
        setTimeRemaining(3000);
        dialog.current.close();
      },
    };
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
    }, 10);

    return () => {
      closeModal();
      clearInterval(intervalId);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const timer = setTimeout(() => {
      console.log("timout");
      closeModal();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [open, closeModal]);

  console.log(timeRemaining);

  return (
    <dialog
      ref={dialog}
      className="w-[40%] bg-zinc-800 text-white text-3xl backdrop:bg-black backdrop:opacity-70"
    >
      <div className="p-16">
        <p className="mb-14">This modal will close in 3s</p>
        <div className="text-right">
          <button
            onClick={closeModal}
            className="p-4 py-2 self-end text-zinc-800 bg-white"
          >
            {timeRemaining}
          </button>
        </div>
      </div>
      <progress
        className="w-full h-4"
        value={`${timeRemaining}`}
        min="0"
        max="3000"
      />
    </dialog>
  );
});
