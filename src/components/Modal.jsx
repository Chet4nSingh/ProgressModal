import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { forwardRef } from "react";

export default forwardRef(function Modal({}, ref) {
  const [timeRemaining, setTimeRemaining] = useState(3000);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      closeModal() {
        dialog.current.close();
      },
    };
  });

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTimeRemaining((prevState) => prevState - 10);
  //   }, 10);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <dialog ref={dialog} className="w-[40%] bg-zinc-800 text-white text-3xl backdrop:bg-black backdrop:opacity-70">
      <div className="p-16">
        <p className="mb-14">This modal will close in 3s</p>
        <div className="text-right">
          <button onClick={() => dialog.current.close()} className="p-4 py-2 self-end text-zinc-800 bg-white">
            Close
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
