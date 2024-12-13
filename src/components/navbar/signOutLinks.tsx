"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

const SignOutLinks = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logout Successfully!!" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full" onClick={handleLogout}>
        LogOut
      </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
