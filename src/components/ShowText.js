import React from 'react';

import { useTextState } from '../contexts/text-context';

function ShowText() {
  const text = useTextState();

  return (
    <div>
      <h2>текст: {text}</h2>
    </div>
  );
}

export default ShowText;
