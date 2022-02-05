import React from 'react';
import AvoLayout from './avo-project/AvoLayout';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter BrowserRouter >
        <Routes>
          <Route exact path="/" element={<AvoLayout />} />
          <Route exact path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter >
    </div>



  );
}

export default App;
