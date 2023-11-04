import Header from "../../ui/Header";
import StoreMain from "../features/Store/StoreMain";

function Store() {
  return (
    <>
      <Header>
        <Header.ContainerRecipes>
          <Header.SchoolNameRecipes />
          <Header.NavStore />
        </Header.ContainerRecipes>
      </Header>
      <StoreMain />
    </>
  );
}

export default Store;
