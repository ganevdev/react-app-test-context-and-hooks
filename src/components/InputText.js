import React, { useState } from 'react';

function InputText() {
  const [text, setText] = useState('');

  const inputTextFun = (e) => setText(e.target.value);

  return (
    <div>
      <input type="text" value={text} onChange={inputTextFun} />
    </div>
  );
}

export default InputText;
