import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";


export default function AppLayout() {
  return (
     <div className="min-h-screen font-body text-slate-800 bg-white overflow-x-hidden">

        
          <Navbar />
           <Toaster position="top-center" />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
  )
}
