import { LoginForm } from "@/components/ui/login-form";
export default function Home() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
              <div className="container mx-auto p-4 relative">
                  <div className="bg-white border-2 border-red-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col justify-center">
                      <h1 className="text-4xl text-red-700 font-bold  md-4 pl-100 whitespace-nowrap">
                                     Welcome to LawNDA 3.0</h1>   
                                     <br></br>                      
                                     <LoginForm />
                         
                      </div>
                  </div>
  
              </div>
              <div className="bg-red-800 hidden md:block absolute top-0 right-0 bottom-0 left-3/4 z-0"></div> 
          </main>
    );
  }