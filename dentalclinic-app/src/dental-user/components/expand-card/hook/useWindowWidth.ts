import { useUtils } from '@/common/utils';
import { useState, useEffect } from 'react';

export const useWindowInnerWidth = (delay = 300) => {
  const [size, setSize] = useState<number>(window.innerWidth);
  const { debounce } = useUtils();
  const isMobile = size < 744;

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize(window.innerWidth);
    }, delay);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return { size, isMobile };
};
