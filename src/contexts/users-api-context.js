import React, { useState } from 'react';
const UsersApiContext = React.createContext();
const SetUsersApiContext = React.createContext();

const initialState = [
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg',
  },
];

function UsersApiContextProvider({ children }) {
  const [users, setUsers] = useState(initialState);

  return (
    <UsersApiContext.Provider value={users}>
      <SetUsersApiContext.Provider value={setUsers}>
        {children}
      </SetUsersApiContext.Provider>
    </UsersApiContext.Provider>
  );
}

function useUsersApi() {
  const context = React.useContext(UsersApiContext);
  if (context === undefined)
    throw new Error(
      'useUsersApi must be used within a UsersApiContextProvider'
    );
  return context;
}

function useSetUsersApi() {
  const context = React.useContext(SetUsersApiContext);
  if (context === undefined)
    throw new Error(
      'useSetUsersApi must be used within a UsersApiContextProvider'
    );
  return context;
}

async function fetchUsersFromApi(dispatch, updates) {
  dispatch(updates);
  try {
    let updatedUsers = await fetch('https://reqres.in/api/users?page=2');
    updatedUsers = await updatedUsers.json();
    updatedUsers = updatedUsers.data;
    dispatch(updatedUsers);
  } catch (error) {
    console.log(error);
  }
}

export {
  UsersApiContextProvider,
  useUsersApi,
  useSetUsersApi,
  fetchUsersFromApi,
};
