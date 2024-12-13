import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks } from "@/utils/categoryLinks";

const CategoryLinks = () => {
  return (
    <div className="flex gap-[30px]">
      {navLinks.map((items, index) => {
        return (
          <Button variant="ghost" className="group" key={index}>
            <Link href={items.href} className="group-hover:text-green-600">
              {items.nameCategory}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};
export default CategoryLinks;
