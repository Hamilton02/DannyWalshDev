import { useEffect, useState } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}

export const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                callback(); //Do what you want to handle in the callback
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
};