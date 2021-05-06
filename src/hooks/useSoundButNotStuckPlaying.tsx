import { useEffect, useState } from "react";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

type Sound = {
  [key: string]: {
    play: PlayFunction;
    isPlaying: boolean;
  };
};

const useSoundButNotStuckPlaying = (): Sound => {
  const [playC, { sound: soundC }] = useSound("/sounds/c.mp3");
  const [playD, { sound: soundD }] = useSound("/sounds/d.mp3");
  const [playE, { sound: soundE }] = useSound("/sounds/e.mp3");
  const [playF, { sound: soundF }] = useSound("/sounds/f.mp3");
  const [playG, { sound: soundG }] = useSound("/sounds/g.mp3");
  const [playA, { sound: soundA }] = useSound("/sounds/a.mp3");
  const [playB, { sound: soundB }] = useSound("/sounds/b.mp3");
  const [playC4, { sound: soundC4 }] = useSound("/sounds/c4.mp3");

  const [isPlayingC, setIsPlayingC] = useState(false);
  const [isPlayingD, setIsPlayingD] = useState(false);
  const [isPlayingE, setIsPlayingE] = useState(false);
  const [isPlayingF, setIsPlayingF] = useState(false);
  const [isPlayingG, setIsPlayingG] = useState(false);
  const [isPlayingA, setIsPlayingA] = useState(false);
  const [isPlayingB, setIsPlayingB] = useState(false);
  const [isPlayingC4, setIsPlayingC4] = useState(false);

  useEffect(() => {
    soundC?.on("play", () => setIsPlayingC(true));
    soundC?.on("end", () => setIsPlayingC(false));

    soundD?.on("play", () => setIsPlayingD(true));
    soundD?.on("end", () => setIsPlayingD(false));

    soundE?.on("play", () => setIsPlayingE(true));
    soundE?.on("end", () => setIsPlayingE(false));

    soundF?.on("play", () => setIsPlayingF(true));
    soundF?.on("end", () => setIsPlayingF(false));

    soundG?.on("play", () => setIsPlayingG(true));
    soundG?.on("end", () => setIsPlayingG(false));

    soundA?.on("play", () => setIsPlayingA(true));
    soundA?.on("end", () => setIsPlayingA(false));

    soundB?.on("play", () => setIsPlayingB(true));
    soundB?.on("end", () => setIsPlayingB(false));

    soundC4?.on("play", () => setIsPlayingC4(true));
    soundC4?.on("end", () => setIsPlayingC4(false));
  }, [soundC, soundD, soundE, soundF, soundG, soundA, soundB, soundC4]);

  return {
    c: { play: playC, isPlaying: isPlayingC },
    d: { play: playD, isPlaying: isPlayingD },
    e: { play: playE, isPlaying: isPlayingE },
    f: { play: playF, isPlaying: isPlayingF },
    g: { play: playG, isPlaying: isPlayingG },
    a: { play: playA, isPlaying: isPlayingA },
    b: { play: playB, isPlaying: isPlayingB },
    c4: { play: playC4, isPlaying: isPlayingC4 },
  };
};

export default useSoundButNotStuckPlaying;
