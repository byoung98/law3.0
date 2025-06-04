export default function Home() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
              <div className="container mx-auto p-4 relative">
                  <div className="bg-white border-2 border-red-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col justify-center">
                          <h1 className="text-4xl text-red-700 font-bold mb-4">Welcome to LawNDA 3.0</h1>
                          <p className="text-lg text-gray-700 mb-4">
                             This version of LawNDA is written in TypeScript and Next.js 14. It is a complete rewrite of the original LawNDA application, which was written in JavaScript and Spring MVC.
                              The new version is more robust, easier to maintain, and has better performance.
                          </p>
                          <a href="/law3/dataHome" className="outline outline-1 outline-offset-2 border-red-700 text-red-700 hover:text-white py-2 px-4 rounded hover:bg-red-800 md:w-auto">
                            Enter Here
                          </a>
                      </div>
                  </div>
  
              </div>
              <div className="bg-red-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0"></div> 
          </main>
    );
  }