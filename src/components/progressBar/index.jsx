import React, { useRef } from 'react';

function ProgressBar() {
  let x = 50;
  const ref = useRef();

  const interval = () => {
    setInterval(() => {
      x += 10;
      document.getElementById('pg').style.width = x;
    }, 1000);

    setTimeout(() => {
      clearInterval();
    }, 1000);
  };
  return (
    <div className="w-full bg-red-200 h-2.5">
      <div
        className="bg-red-600 h-2.5 w-0"
        ref={ref}
      />
    </div>
  );
}

export default ProgressBar;
