// import { useEffect } from 'react';

// export function useClickOutside(ref, callback) {
//   const handleClick = e => {
//     if (ref.current && !ref.current.contains(e.target)) {
//       callback();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClick);

//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     };
//   });
// }
