import { useEffect, useState } from "react";

export const useConnection = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const addEvent = () => {
      window.addEventListener("online", () => setIsOnline(true));
      window.addEventListener("offline", () => setIsOnline(false));
    };
    addEvent();

    return () => addEvent();
  });

  return isOnline;
};
