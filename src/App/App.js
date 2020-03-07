import './App.css';

import React, { useState } from 'react';

import InputText from '../components/InputText';
import ShowText from '../components/ShowText';

function App() {
  const [textForInput, setTextForInput] = useState('');

  return (
    <main>
      <h1>тестирование передачи хуков/состояний вниз</h1>
      <InputText />
      <ShowText text={textForInput} />
    </main>
  );
}

export default App;
