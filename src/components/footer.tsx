export function Footer() {
  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-10 pt-10 pb-20">
      <h1 className="text-2xl font-bold">Shortly</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        <div className="flex items-center md:items-start flex-col gap-1">
          <h1 className="font-semibold mb-2">Features</h1>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Link Shortening</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Branded Links</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Analytics</span>
        </div>

        <div className="flex items-center md:items-start flex-col gap-1">
          <h1 className="font-semibold mb-2">Resources</h1>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Blog</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Developers</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Support</span>
        </div> 

        <div className="flex items-center md:items-start flex-col gap-1">
          <h1 className="font-semibold mb-2">Company</h1>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">About</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Our Team</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Careers</span>
          <span className="text-zinc-300 md:text-zinc-500 hover:text-cyan-400 cursor-pointer">Contact</span> 
        </div> 
      </div>

      <div className="flex items-center justify-center gap-4">
        <img src="/icons/icon-facebook.png" alt="" />
        <img src="/icons/icon-twitter.png" alt="" />
        <img src="/icons/icon-pinterest.png" alt="" />
        <img src="/icons/icon-instagram.png" alt="" />
      </div>
    </div>
  )
}