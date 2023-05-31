import React, { useEffect, useRef } from 'react';

const CounterBox = ({ icon, counter, text, colored }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const startCounter = () => {
      let currentValue = 0;
      const targetValue = parseInt(counter);

      const incrementCounter = () => {
        if (currentValue < targetValue) {
          currentValue += Math.ceil(targetValue / 50);
          counterRef.current.textContent = currentValue;
          requestAnimationFrame(incrementCounter);
        } else {
          counterRef.current.textContent = targetValue;
        }
      };

      incrementCounter();
    };

    startCounter();
  }, [counter]);

  return (
    <div className={`counter-box${colored ? ' colored' : ''}`} style={{ backgroundColor: '#c2d5ee', height: '150px', padding: '20px' }}>
      <i className={`fa ${icon}`}></i>
      <span className="counter" ref={counterRef} style={{ fontSize: '28px', fontWeight: '400', marginTop: '18px' }}></span>
      <p style={{ fontSize: '22px', fontWeight: '200', marginTop: '20px' }}>{text}</p>
    </div>
  );
};

export default CounterBox;
