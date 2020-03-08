import './App.css';

import React from 'react';

import InputText from '../components/InputText';
import ShowText from '../components/ShowText';
import ShowUsers from '../components/ShowUsers';
import { TextContextProvider } from '../contexts/text-context';
import { UsersApiContextProvider } from '../contexts/users-api-context';

function App() {
  return (
    <UsersApiContextProvider>
      <TextContextProvider>
        <main>
          <h2>тестирование передачи хуков/состояний вниз</h2>
          <InputText />
          <ShowText />
          <h2>тестирование работы с API и async</h2>
          <ShowUsers />
        </main>
      </TextContextProvider>
    </UsersApiContextProvider>
  );
}

export default App;
