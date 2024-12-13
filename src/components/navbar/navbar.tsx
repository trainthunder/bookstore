import CategoryLinks from "./categoryLinks";
import DropDownListMenu from "./dropDownListMenu";
import Logo from "./logo";
import SearchButton from "./searchButton";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col bg-white fixed z-10">
      {/* ชั้น 1 */}
      <div className="w-full flex justify-center border border-b-[1px]">
        <div className="w-full max-w-[1160px] p-[20px] flex justify-between">
          <SearchButton />
          <Logo />
          <DropDownListMenu />
        </div>
      </div>
      {/* ชั้น 2 */}
      <div className="w-full justify-center py-[20px] border border-b-[1px] hidden md:flex">
        <CategoryLinks />
      </div>
    </nav>
  );
};
export default Navbar;
