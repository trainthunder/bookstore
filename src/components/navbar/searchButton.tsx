import { Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchButton = () => {
  return (
    <>
      {/* ทำงานเมื่อwidthหน้าจอเล็กกว่า 768px */}
      <button className="md:hidden">
        <Search />
      </button>

      {/* ทำงานเมื่อwidthหน้าจอใหญ่กว่า 768px */}
      <button className="hidden md:flex w-[180px] h-[40px] bg-gray-200 rounded-full items-center px-[20px] gap-[10px]">
        <Search className="text-gray-600" />
        <span className="text-gray-600">ค้นหา</span>
      </button>
    </>
  );
};
export default SearchButton;
