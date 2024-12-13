import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button variant="ghost">
      <Link href="/">Logo</Link>
    </Button>
  );
};
export default Logo;
