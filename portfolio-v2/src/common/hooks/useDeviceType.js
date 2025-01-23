import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [isMobileOrTablet, setIsMobileOrTable] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-device-width: 1279px)');

    const handleResize = (event) => {
      setIsMobileOrTable(event.matches);
    };

    setIsMobileOrTable(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isMobileOrTablet;
};

export default useDeviceType;
