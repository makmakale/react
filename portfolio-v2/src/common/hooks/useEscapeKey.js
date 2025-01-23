import { useEffect } from 'react';

export default function useEscapeKey(onClose) {
  function handleEscapeKey(e) {
    if (e.keyCode === 27 && onClose) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
