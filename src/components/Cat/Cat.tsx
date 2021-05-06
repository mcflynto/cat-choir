import "./Cat.css";

const Cat = ({
  note,
  isPlaying,
  width,
  onClick,
}: {
  note: string;
  isPlaying: boolean;
  width: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="cat"
      style={{ width: `${width}px` }}
      onClick={() => onClick()}
    >
      <img
        style={{ display: `${isPlaying ? "none" : "block"}` }}
        src={`/cats/cat-${note}-default.svg`}
        alt="A relaxed cat"
      ></img>
      <img
        style={{ display: `${isPlaying ? "block" : "none"}` }}
        src={`/cats/cat-${note}-singing.svg`}
        alt="A singing cat"
      ></img>
    </div>
  );
};

export default Cat;
