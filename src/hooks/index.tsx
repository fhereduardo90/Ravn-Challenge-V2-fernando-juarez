import { useState, useEffect } from 'react';

type WindowsSizeType = {
  width?: number;
  height?: number;
};

export const useWindowSize = (): WindowsSizeType => {
  const [windowSize, setWindowSize] = useState<WindowsSizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
