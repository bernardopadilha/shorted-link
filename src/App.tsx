import { Card } from "./components/card";
import { useLink } from "./hooks/use-link";
import { Footer } from './components/footer'
import { Header } from "./components/header";

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import { CardShortedLink } from "./components/card-shorted-link";
import { LinkShortedProps } from "./context/short-link-context";

export function App() {
  const { handleShortedLink, handleSubmit, errors, isSubmitting, register, linksShorted } = useLink()


  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-10">
        <Header />

        <div className="w-full flex flex-col-reverse gap-9 md:flex-row items-center justify-between pb-28">
          <div className="flex flex-col items-center md:items-start justify-center gap-8 flex-1">
            <div className="flex flex-col space-y-3 text-center md:text-start">
              <h1 className="md:text-7xl text-5xl text-zinc-900 font-bold">More than just <br /> shorter links</h1>
              <span className="text-zinc-500">Build your brand's recognition and get detailed insights on <br /> how your links are performing</span>
            </div>

            <button className="py-3 px-8 bg-cyan-400 font-semibold rounded-full hover:opacity-70 duration-150">Get Started </button>
          </div>

          <div className="flex-1">
            <img src="/banner.svg" alt="banner" />
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col bg-zinc-200/60">
        <div className="w-full flex flex-col items-center justify-center px-8">
          <div className="relative -top-24  md:-top-16 w-full max-w-5xl flex flex-col gap-4">
            <form
              onSubmit={handleSubmit(handleShortedLink)}
              className="bg-[#3A3053] bg-banner-input bg-cover bg-center bg-no-repeat w-full max-w-5xl flex flex-col md:flex-row items-start gap-4 p-10 rounded-md"
            >
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  className="text-zinc-900 w-full py-3 pl-4 rounded-md outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  {...register('link')}
                />
                {errors.link && (
                  <span className="text-sm text-rose-500">{errors.link.message}</span>
                )}
              </div>
              <button
                type="submit" 
                className="w-full flex items-center justify-center md:w-auto py-3 px-6 bg-cyan-400 font-semibold whitespace-nowrap rounded-md hover:opacity-70 duration-150">
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-transparent border-t-white animate-spin" />
                  ) : (
                    "Shorten it!"
                  )}
              </button>
            </form>
            {linksShorted.map((response: LinkShortedProps, i: number) => {
              return <CardShortedLink key={i} lastLink={response.lastLink} newLink={response.newLink.result_url} />
            })}
          </div>
        </div>

        <div className=" max-w-7xl mx-auto px-10 flex flex-col gap-20 text-center">
          <div className=" flex flex-col space-y-3">
            <h1 className="text-3xl text-zinc-800 font-bold">Advanced Statistics</h1>
            <span className="text-zinc-500">Track how links are performing across the web with <br />    our advanced statistics dashboard</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mb-10 md:mb-0">
            <div className="md:mb-40">
              <Card
                icon='/icons/graphic.png'
                title="Brand Recognition"
                paragraph="Boast your brand recognition with each click.
              Generic links don't mean a thing. Branded links help 
              instil confidence in your content."
              />
            </div>
            <div className="md:w-10 md:mb-20 md:h-0 h-20 border-[3px] border-cyan-400" />
            <div className="md:mb-20">
              <Card
                icon='/icons/compass.png'
                title="Detailed Records"
                paragraph="Gain insights into who is clicking your links. 
              Knowing when and where people engage with your content 
              helps inform better decisions"
              />
            </div>
            <div className="md:w-10 md:h-0 h-20 border-[3px] border-cyan-400" />
            <Card
              icon='/icons/brushes.png'
              title="Fully Customizable"
              paragraph="Improve brand awareness and content discoverability
            through customizable links, supercharging links, supercharging
            audience engagement."
            />
          </div>
        </div>
      </div>

      <div className="bg-banner-boost bg-cover bg-center bg-no-repeat bg-[#3A3053] py-14 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold ">Boost your links today</h1>
        <button className="font-bold px-10 py-4 bg-cyan-400 rounded-full hover:opacity-70">Get Started</button>
      </div>

      <div className="w-full bg-[#232027]">
        <Footer />
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}