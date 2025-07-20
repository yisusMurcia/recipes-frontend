import './App.css'
import IdentifyUser from './components/identifyUser.jsx'
import Main from './components/main.jsx';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {user? <Main />:<IdentifyUser setUser={setUser} />}
    </>
  )
}

export default App
