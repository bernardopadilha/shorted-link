import { useState } from "react"
import { toast } from 'react-toastify'

interface CardShortedLinkProps {
  lastLink: string
  newLink: string
}

export function CardShortedLink({ lastLink, newLink }: CardShortedLinkProps) {
  const [currentCopy, setCurrentCopy] = useState(false)


  function handleCopy() {
    navigator.clipboard.writeText(newLink);
    setCurrentCopy(true)
    toast.success('Texto copiado!')
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between bg-white gap-3 md:gap-0 rounded-md py-2 md:px-5">
      <h1 className="text-zinc-900 font-medium md:text-base ml-5">{lastLink}</h1>
      
      <div className="border border-zinc-200 w-full md:hidden" />

      <div className="flex w-full md:w-auto px-5  md:items-center justify-center gap-4 flex-col md:flex-row">
        <h1 className="text-cyan-400 font-medium">{newLink}</h1>
        <button 
          onClick={handleCopy} 
          className={`${currentCopy ? 'bg-[#3A3053]' : 'bg-cyan-400'} w-full md:w-auto md:py-2 py-[10px] px-4 rounded-md hover:opacity-70 text-sm font-medium`}
        >
          {currentCopy ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}