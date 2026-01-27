import Img from "next/image"
import { Plus } from "lucide-react"
export default function Home() {
  return(
   <main className="py-2 md:px-6">
    <section className=" h-screen ">
      <div className="relative h-full w-full md:rounded-2xl overflow-hidden">
      <Img
        src="/images/heroImage.png"
        alt="hers-section-bg"
        fill
        className="object-cover h-full"
        priority/>
        <div className="absolute inset-0 bg-black/10">
          <div className="relative z-10 h-full flex flex-col items-center text-center ">
            <Plus size="40" className="text-black"/>
            <h1 className="text-3xl md:text-5xl font-bold">Where Money Grows</h1>
            <p className="mt-4 max-w-xs text-gray-700">A programmable, utility-driven stable token designed for native value accural.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 md:flex py-8">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold">What is USD bloom?</h2>
          <button className="mt-4 rounded-full bg-gray-900 text-white px-5 py-2">Explore now</button>
        </div>
        
          <p className="text-gray-700">USd Bloom is a yield-bearing stablecoin 
            that helps your capital 
            grow while staying pegged to the U.S dollar.
          </p>
      
      </div>
    </section>

<section className="px-6 py-8">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-4 h-full">

      <div className="relative md:col-span-2 h-[50vh] rounded-3xl overflow-hidden">
        <Img
          src="/images/FlowerImage.png"
          alt="hero-section-bg"
          fill
          className=""
          priority
        />
        
          <div className="absolute left-6 top-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Capital that grows</h1>
          </div>
         <div className="absolute left-6 bottom-6">
             <p className="text-gray-800 max-w-xs mt-2 md:mt-6 lg:mt-10">
            Earn passive income as your stablecoins are deployed into high-performing DeFi protocols.
          </p>
         </div>
    </div>

   
   <div className="bg-gray-900 p-6 rounded-3xl text-white w-full flex flex-col justify-between h-full">
    <div>
      <h1 className="text-2xl font-semibold">Always liquid, always stable</h1>
    </div>
    <div>
      <p className="md:text-[16px] text-gray-400 max-w-xs">
        Stay fully dollar-pegged with instant access to your funds—no lockups or delays.
      </p>
    </div>
   </div>

   <div className="bg-gray-900 p-6 rounded-3xl text-white w-full flex flex-col justify-between h-full">
    <div>
      <h1 className="text-2xl font-semibold">100% hands-free</h1>
    </div>
    <div>
      <p className="md:text-[16px] text-gray-400 max-w-xs">
         No money to mange strategies manually. USD Bloom works in the background for you.
      </p>
    </div>
   </div>
  </div>
</section>

<section className="px-6 md:flex py-8">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold">What is USD bloom?</h2>
          <button className="mt-4 rounded-full bg-gray-900 text-white px-5 py-2">Explore now</button>
        </div>
          <div className="relative md:col-span-2 h-[50vh] rounded-3xl overflow-hidden">
            <Img
              src="/images/FlowerImage.png"
              alt="hero-section-bg"
              fill
              className=""
              priority
            />
          <div className="absolute left-6 top-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Capital that grows</h1>
          </div>
        </div>
      
      </div>
    </section>

   </main>
  )
}