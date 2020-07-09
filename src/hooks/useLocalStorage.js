import { useState } from "react";

// Build a function called useLocalStorage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue.
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    //Save State
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
// We need a key (String) and a value (anything)
