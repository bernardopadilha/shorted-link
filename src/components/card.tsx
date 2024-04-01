interface CardProps {
  icon: string;
  title: string;
  paragraph: string;
}

export function Card({ icon, title, paragraph }: CardProps) {
  return (
    <div className="flex flex-col items-center md:items-start bg-white px-4 pb-5 rounded-md">
      <div className="bg-[#3A3053] flex items-center justify-center p-3 rounded-full relative top-[-30px]">
        <img src={icon} alt="icon" className="w-8" />
      </div>

      <div className="flex flex-col items-start text-start">
        <h1 className="text-xl font-semibold text-[#332D41] ">{title}</h1>
        <span className="text-zinc-500">{paragraph}</span>
      </div>
    </div>
  )
}