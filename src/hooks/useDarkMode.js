import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export function useDarkMode() {
  const [storedValue, setValue] = useLocalStorage("site-theme", "light");
  useEffect(
    () => {
      const element = window.document.documentElement;
      if (storedValue === "dark") {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    },
    [storedValue] // Only re-call effect when value changes
  );
  // Return enabled state and setter
  return [storedValue, setValue];
}
