import { useEffect, useState } from 'react';
import soundUrl from "./sounds/please.mp3";

function play() {
  new Audio(soundUrl).play()
}

export const BoopButton = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      play()
    }, [value])
    return <button onClick={() => setValue(value+1)}>Boop!</button>;
  };
