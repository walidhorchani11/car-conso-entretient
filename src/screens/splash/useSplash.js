import { useState, useEffect } from "react";

const useSplash = (timeOut) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), timeOut);

    return clearTimeout();
  }, []);

  return {isLoading};

}

export default useSplash;
