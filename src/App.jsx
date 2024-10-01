import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Lasyout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import First from "./pages/First";
import Second from "./pages/Second";

import "./App.css";

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
