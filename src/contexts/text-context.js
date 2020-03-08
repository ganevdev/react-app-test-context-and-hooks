import React, { useState } from 'react';
const TextStateContext = React.createContext();
const InputTextFunContext = React.createContext();

function useInputText(initialOn = '') {
  const [text, setText] = useState(initialOn);
  const inputTextFun = (e) => setText(e.target.value);
  return [text, inputTextFun];
}

function TextContextProvider({ children }) {
  const [text, inputTextFun] = useInputText('дефолтный текст');

  return (
    <TextStateContext.Provider value={text}>
      <InputTextFunContext.Provider value={inputTextFun}>
        {children}
      </InputTextFunContext.Provider>
    </TextStateContext.Provider>
  );
}

function useTextState() {
  const context = React.useContext(TextStateContext);
  if (context === undefined)
    throw new Error('useTextState must be used within a TextContextProvider');
  return context;
}

function useInputTextFun() {
  const context = React.useContext(InputTextFunContext);
  if (context === undefined)
    throw new Error(
      'useInputTextFun must be used within a TextContextProvider'
    );
  return context;
}

export { TextContextProvider, useTextState, useInputTextFun };
