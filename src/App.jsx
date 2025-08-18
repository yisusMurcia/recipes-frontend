import './App.css'
import Main from './components/main.jsx';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipe from './components/recipe.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Main user={user} />} />
      <Route path='/new' element={<Recipe user={user}/>}/>
      <Route path='/edit' element={<Recipe user={user} />}/>
      <Route path="/sign-in" element={<Login setUser={setUser} />}/>
      <Route path='/sign-up' element={<Register setUser={setUser}/>}/>
    </Routes>
  )
}

export default App