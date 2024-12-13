import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import SignOutLinks from "./signOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const DropDownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>BookStore</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* ยังไม่ล็อคอิน */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* ล็อคอินแล้ว */}
        <SignedIn>
          <DropdownMenuItem>
            <button>
              <Link href="/checkout/cart">cart</Link>
            </button>
          </DropdownMenuItem>
          <SignOutLinks />
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropDownListMenu;
