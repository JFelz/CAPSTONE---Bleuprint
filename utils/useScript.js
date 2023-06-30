import { useEffect } from 'react';

const useScript = (src) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://viewer.marmoset.co/main/marmoset.js';
    document.body.appendChild(script);
  }, [src]);
};

export default useScript;
