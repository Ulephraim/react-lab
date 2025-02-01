/** @format */

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseStateHook from './projects/Hooks/useStateHook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseStateHook />}></Route>

        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
