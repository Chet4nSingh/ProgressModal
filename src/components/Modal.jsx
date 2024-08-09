import { useEffect } from "react";
import { useState } from "react";

export default function Modal() {
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
    }, 3000);
  }, []);

  return (
    <dialog
      className="p-16 w-[40%] h-[40%] bg-zinc-800 text-white text-3xl flex flex-col justify-between"
      open
    >
      <p>This modal will close in 3s</p>
      <button className="p-4 py-2 self-end text-zinc-800 bg-white">
        Close
      </button>
      <progress value={`${timeRemaining}`} max="30" />
    </dialog>
  );
}
