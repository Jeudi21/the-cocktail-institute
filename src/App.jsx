import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Store from "./pages/Store";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import Recipes from "./pages/Recipes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="store" element={<Store />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
