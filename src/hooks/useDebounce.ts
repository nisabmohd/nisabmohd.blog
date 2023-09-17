import { useEffect } from "react";

type cleanUpFn = () => void;

export default function useDebounce(
  cb: () => void | cleanUpFn,
  deps: Array<unknown>,
  delay: number = 800
) {
  useEffect(() => {
    let rt: void | cleanUpFn;
    const timer = setTimeout(() => {
      rt = cb();
    }, delay);
    return () => {
      clearTimeout(timer);
      rt?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
}
