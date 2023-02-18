import { useEffect, useState } from 'react';
import soundUrl from "./sounds/hi.mp3";

function play() {
  new Audio(soundUrl).play()
}

export const BoopButton = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      play()
    }, [value])
    return <button onClick={() => setValue(1)}>Boop!</button>;
  };
