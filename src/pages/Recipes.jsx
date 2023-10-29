import { useState } from "react";
import RecipesHeader from "../features/Recipes/RecipesHeader";
import RecipesMain from "../features/Recipes/RecipesMain";
import useDebounce from "../hooks/useDebounce";

function Recipes() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  return (
    <div>
      <RecipesHeader search={search} setSearch={setSearch} />
      <RecipesMain search={debouncedSearch} />
    </div>
  );
}

export default Recipes;
