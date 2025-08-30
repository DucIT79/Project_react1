import React, { useState } from 'react';

export const Example2 = () => {
  const [old, setOld] = useState(0);

  const handle_change_old = () => {
    setOld(old + 5);
  };

  console.log("Render Example 2");

  return (
    <div>
      <p>old: {old}</p>
      <button onClick={handle_change_old}>Change Old</button>
    </div>
  );
};
