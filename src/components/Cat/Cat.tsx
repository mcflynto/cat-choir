import CatCDefault from "../cats/CatCDefault";
import CatCSinging from "../cats/CatCSinging";
import CatDDefault from "../cats/CatDDefault";
import CatDSinging from "../cats/CatDSinging";
import CatEDefault from "../cats/CatEDefault";
import CatESinging from "../cats/CatESinging";
import "./Cat.css";

type Cats = {
  [key: string]: {
    default: JSX.Element;
    singing: JSX.Element;
  };
};

let cats: Cats = {
  c: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
  d: {
    default: <CatDDefault />,
    singing: <CatDSinging />,
  },
  e: {
    default: <CatEDefault height={300} />,
    singing: <CatESinging height={300} />,
  },
  f: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
  g: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
  a: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
  b: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
  c4: {
    default: <CatCDefault />,
    singing: <CatCSinging />,
  },
};

const Cat = ({
  note,
  isPlaying,
  onClick,
}: {
  note: string;
  isPlaying: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="cat" onClick={() => onClick()}>
      {!isPlaying && cats[note].default}
      {isPlaying && cats[note].singing}
    </div>
  );
};

export default Cat;
