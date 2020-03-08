import './App.css';

import React from 'react';

import InputText from '../components/InputText';
import ShowText from '../components/ShowText';
import { TextContextProvider } from '../contexts/text-context';

function App() {
  return (
    <TextContextProvider>
      <main>
        <h1>тестирование передачи хуков/состояний вниз</h1>
        <InputText />
        <ShowText />
      </main>
    </TextContextProvider>
  );
}

export default App;
