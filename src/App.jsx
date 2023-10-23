import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/LandingPage";
import Recipes from "./pages/recipes";
import Store from "./pages/store";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="store" element={<Store />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
