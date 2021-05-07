import "./App.css";
import useKeyboardInput from "./hooks/useKeyboardInput";
import Cat from "./components/Cat/Cat";
import useSoundButNotStuckPlaying from "./hooks/useSoundButNotStuckPlaying";
import { Keylist } from "./hooks/useKeyboardInput";

export const notes = ["c", "d", "e", "f", "g", "a", "b", "c4"];

const App = () => {
  const sound = useSoundButNotStuckPlaying();

  let keylist: Keylist = {};

  notes.forEach((n, i) => {
    keylist[i + 1] = () => sound[n].play();
  });

  useKeyboardInput(keylist);

  return (
    <div className="App">
      <div className="cats">
        {notes.map((n, i) => {
          return (
            <Cat
              key={i}
              note={n}
              isPlaying={sound[n].isPlaying}
              onClick={() => sound[n].play()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
