import { Route, Routes } from "react-router-dom";
import Layout from "./components/Lasyout";
import Home from "./pages/Home";
import Second from "./pages/Second";

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
