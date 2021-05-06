import "./App.css";
import useSound from "use-sound";
import useKeyboardInput from "./hooks/useKeyboardInput";

const App = () => {
  const [playC, { isPlaying: isPlayingC }] = useSound("/sounds/c.mp3");
  const [playD, { isPlaying: isPlayingD }] = useSound("/sounds/d.mp3");
  const [playE, { isPlaying: isPlayingE }] = useSound("/sounds/e.mp3");
  const [playF, { isPlaying: isPlayingF }] = useSound("/sounds/f.mp3");
  const [playG, { isPlaying: isPlayingG }] = useSound("/sounds/g.mp3");
  const [playA, { isPlaying: isPlayingA }] = useSound("/sounds/a.mp3");
  const [playB, { isPlaying: isPlayingH }] = useSound("/sounds/b.mp3");
  const [playC4, { isPlaying: isPlayingC4 }] = useSound("/sounds/c4.mp3");

  useKeyboardInput({
    1: () => playC(),
    2: () => playD(),
    3: () => playE(),
    4: () => playF(),
    5: () => playG(),
    6: () => playA(),
    7: () => playB(),
    8: () => playC4(),
  });

  return (
    <div className="App">
      <div style={{ color: isPlayingC ? "green" : "yellow" }}>moin</div>
    </div>
  );
};

export default App;
