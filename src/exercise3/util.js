import { useEffect, useState } from "react";

export const ACCOUNT_KEY = "currentAccount";

export const getLocalStorageValue = (key, defaultValue) => {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};

export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const isEmailValid = (email) => {
  if (!email) {
    return true;
  }

  // TODO: missing a more complete email address validation
  return email.indexOf("@") > 0;
};

export const isPasswordValid = (password) => {
  if (!password) {
    return true;
  }

  // TODO: missing validation of the rest of the rules
  return password.length >= 8;
};

export const navigateToIndex = () => {
  window.location.hash = "#/exercise3";
};
