import { useEffect } from "react";

export default function useDebounce(
  callback: () => void,
  timeout: number
) {
  useEffect(() => {
    const timerID = setTimeout(() => {
      callback();
    }, timeout);

    return () => clearTimeout(timerID);
  }, [timeout, callback]);
}
