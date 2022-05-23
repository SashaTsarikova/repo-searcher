import React, { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { NameContext } from './components/context';

function App() {
  const [login, setLogin] = useState('');

  return (
    <NameContext.Provider value={login}>
      <div className="App">
        <Header setLogin={setLogin}></Header>
        <Main></Main>
      </div>
    </NameContext.Provider>
  );
}

export default App;
