import "./App.css";

const App = () => {
  const removeTransition = (e: any) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };

  const playSound = (e: KeyboardEvent) => {
    const audio: HTMLAudioElement | null = document.querySelector(
      `audio[data-key="${e.key}"]`
    );
    const cat = document.querySelector(`div[data-key="${e.key}"]`);

    if (!audio || !cat) return;

    cat.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  };

  const keys = ["a", "s", "d", "f", "g", "h", "j", "k"];

  const cats = Array.from(document.querySelectorAll(".cat"));
  cats.forEach((cat) =>
    cat.addEventListener("transitionend", (e) => removeTransition(e))
  );
  window.addEventListener("keydown", (e) => playSound(e));

  return (
    <div className="App">
      <h1>Cat Choir</h1>

      {keys.map((n) => (
        <div className="cat" data-key={n} key={n}>
          {n}
        </div>
      ))}

      <audio data-key="a" src="sounds/c.wav"></audio>
      <audio data-key="s" src="sounds/d.wav"></audio>
      <audio data-key="d" src="sounds/e.wav"></audio>
      <audio data-key="f" src="sounds/f.wav"></audio>
      <audio data-key="g" src="sounds/g.wav"></audio>
      <audio data-key="h" src="sounds/a.wav"></audio>
      <audio data-key="j" src="sounds/b.wav"></audio>
      <audio data-key="k" src="sounds/c4.wav"></audio>
    </div>
  );
};

export default App;
