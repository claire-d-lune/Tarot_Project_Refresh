import React, { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Routes, Route} from 'react-router-dom';
import Library from './components/Library';
import FortuneTeller from './components/FortuneTeller';


function App() {
  //Below I am creating an instance of client to be passed to child components using the provider -- just like context 
  const client = new QueryClient();


  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route element={<Library/>} path="/"></Route>
      </Routes>
    </QueryClientProvider>
  )

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
}

export default App
