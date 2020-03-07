import React from 'react';

function ShowText({ text = '' }) {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

export default ShowText;
