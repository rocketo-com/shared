import { useEffect } from 'react';

// Hook that alerts clicks outside of the passed ref
function clickOutsude(ref, onClickOutside) {
  if (!onClickOutside) throw new Error('prop onClickOutside for clickOutsude is required');

  // Hook that alerts clicks outside of the passed ref
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

export default clickOutsude;
