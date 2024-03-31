import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';


export const Tag = () => {
  const textWrapperRef = useRef(null);

  
  
 
  useEffect(() => {
    // Wrap each letter in a span
    const textWrapper1 = textWrapperRef.current;
    textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Anime.js animation timeline
    anime.timeline({loop: true})
      .add({
        targets: '.letter',
        opacity: [0, 4],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i+4)
      }).add({
        targets: textWrapper1,
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }, []);
  return (<div>
        <h1 ref={textWrapperRef} className='intro'>Develope By Rana Ali</h1>
        </div>
     );
  
}


