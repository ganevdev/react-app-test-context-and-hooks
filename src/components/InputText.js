import React from 'react';

import { useInputTextFun, useTextState } from '../contexts/text-context';

function InputText() {
  const inputTextFun = useInputTextFun();
  const text = useTextState();

  return (
    <div>
      <input type="text" value={text} onChange={inputTextFun} />
    </div>
  );
}

export default InputText;
