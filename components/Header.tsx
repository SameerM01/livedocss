import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-bold">LiveDox</h1>
      <div>
        {children}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
