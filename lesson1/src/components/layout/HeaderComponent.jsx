import CategoryNav from "./CategoryNav";
import MainHeader from "./MainHeader";
import TopBar from "./TopBar";




function HeaderComponent() {
  return (
    <header className="flex w-full flex-col items-center">
      <TopBar/>
      <MainHeader/>
      <CategoryNav />
    </header>
  );
}

export default HeaderComponent;
