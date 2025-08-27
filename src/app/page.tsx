import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import TiAuthButton from "../components/ti-auth-button"; 
import { redirect } from "next/navigation";

export default async function Home() {
  // //////////////////////////////////////////////
  // Check session
  // //////////////////////////////////////////////
  const session = await auth();
  if (session) {
    redirect("/law3");
  }

  return (
    <SessionProvider>
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-red-100 rounded-lg p-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl text-red-700 font-bold mb-4 md:mb-0 pl-4 md:pl-8 whitespace-normal">
              Welcome to LawNDA 3.0
            </h1>
            {/* iniitiates TISignInButtonContent function */}
            <TiAuthButton />
          </div>
        </div>
      </div>
      <div className="bg-red-800 hidden md:block absolute top-0 right-0 bottom-0 left-3/4 z-0"></div>
    </main>
    </SessionProvider>
  );
}