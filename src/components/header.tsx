import { useState } from "react";
import { Sidebar } from "./sidebar";
import { List, X } from "@phosphor-icons/react";

export function Header() {
  const [hasActiveSidebar, setHasActiveSidebar] = useState(false)

  return(
    <header className="w-full flex items-center justify-between py-3 md:py-6">
      <div className="flex items-center justify-between md:gap-5">
        <h1 className="text-2xl font-bold text-zinc-900">Shortly</h1>

        <div className="md:flex items-center gap-3 hidden">
          <a href="/" className="text-sm text-zinc-500 hover:text-black font-semibold">Features</a>
          <a href="/" className="text-sm text-zinc-500 hover:text-black font-semibold">Pricing</a>
          <a href="/" className="text-sm text-zinc-500 hover:text-black font-semibold">Resources</a>
        </div>
      </div>

      <div className="md:flex items-center gap-8 hidden">
        <button className="text-sm font-semibold text-zinc-500 p-2 hover:opacity-70">Login</button> 
        <button className="py-2 px-5 text-white font-semibold rounded-full bg-cyan-400 hover:opacity-70 duration-150">Sign Up</button>
      </div>

      <button
        onClick={() => hasActiveSidebar ? setHasActiveSidebar(false) : setHasActiveSidebar(true)}
        className='md:hidden p-2 md:p-3 text-zinc-600 rounded-full bgButton hover:opacity-80 duration-150'
      >
        {hasActiveSidebar ? <X size={32} className="w-full h-full transition-transform transform rotate-180 duration-300" /> : <List size={32} className="w-full h-full transition-transform transform rotate-0 duration-300" />}
      </button>

        {hasActiveSidebar && (
          <Sidebar />
        )}
    </header>
  )
}