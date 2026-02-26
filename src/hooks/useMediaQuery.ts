import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", listener);

    return () => mq.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
