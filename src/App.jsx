import './App.css'
import IdentifyUser from './components/identifyUser.jsx'
import Main from './components/main.jsx';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipe from './components/recipe.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={user? <Main user={user} />:<IdentifyUser setUser={setUser} />} />
      <Route path='/new' element={<Recipe user={user}/>}/>
    </Routes>
  )
}

export default App