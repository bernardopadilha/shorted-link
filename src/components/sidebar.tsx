export function Sidebar() {
  return (
        <aside className=" bg-[#3A3053] p-10 rounded-md flex flex-col items-center justify-center gap-4 absolute top-20 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-lg font-semibold hover:opacity-70 cursor-pointer">Features</h1>
            <h1 className="text-lg font-semibold hover:opacity-70 cursor-pointer">Pricing</h1>
            <h1 className="text-lg font-semibold hover:opacity-70 cursor-pointer">Resources</h1>
          </div>

          <div className="border border-zinc-500 w-full" />

          <div className="flex flex-col w-full  items-center gap-6">
            <button className="w-full text-lg font-semibold p-2 hover:opacity-70">Login</button>
            <button className="w-[280px] py-2 px-5 text-white font-semibold rounded-full bg-cyan-400 hover:opacity-70 duration-150">Sign Up</button>
          </div>
        </aside>
  )
}