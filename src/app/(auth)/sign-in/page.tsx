"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-md border border-zinc-400 p-4">
        <h3 className="text-2xl font-bold">Sign In</h3>
        
        <Button
          className="flex items-center gap-3"
          size="lg"
          onClick={() => signIn("google")}
        >
          <FaGoogle />
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Page;
