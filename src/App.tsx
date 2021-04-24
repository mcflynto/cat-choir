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

  const keys = ["a", "s", "d"];

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

      <audio data-key="a" src="sounds/cats.mp3"></audio>
      <audio data-key="s" src="sounds/cats.mp3"></audio>
      <audio data-key="d" src="sounds/cats.mp3"></audio>
    </div>
  );
};

export default App;
