import { useCallback, useEffect } from "react";

type Keylist = {
  [key: number]: () => void;
};

const useKeyboardInput = (keylist: Keylist) => {
  const handleUserKeyPress = useCallback(
    (event) => {
      const { key } = event;

      if (keylist[key]) {
        keylist[key].call(this);
      }
    },
    [keylist]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
};

export default useKeyboardInput;
