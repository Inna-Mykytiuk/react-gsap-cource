import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/common/Lasyout";
import First from "./pages/First";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Second from "./pages/Second";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
