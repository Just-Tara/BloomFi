import Img from "next/image"
import { Plus, ArrowRight } from "lucide-react"
import Link from "next/link"
export default function Home() {
  return(
   <main className="py-2 md:px-6">
    <section className=" h-screen ">
      <div className="relative md:h-full h-screen w-full md:rounded-2xl overflow-hidden">
      <Img
        src="/images/heroImage.png"
        alt="hers-section-bg"
        fill
        className="lg:object-cover h-full"
        priority/>
        <div className="absolute inset-0 bg-black/10">
          <div className="relative z-10 h-full flex flex-col items-center text-center md:mt-30 mt-20 ">
            <Img
              src="/images/logo2.png"
              alt="Backed companies"
              width={1200}
              height={600}
              className="mx-auto md:w-20 w-15 h-auto"
              priority
            />
            <h1 className="text-3xl md:text-5xl font-bold">Where Money Grows</h1>
            <p className="mt-4 max-w-xs text-gray-700">A programmable, utility-driven stable token designed for native value accural and seamless integration into DeFi.</p>
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
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 h-full">

      <div className="relative md:col-span-2 h-[50vh] rounded-3xl overflow-hidden">
        <Img
          src="/images/FlowerImage.png"
          alt="hero-section-bg"
          fill
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

<section className=" lg:flex gap-2 items-center justify-between px-6 py-10">
  <div>
    <p className="text-lg text-gray-600 mt-3 lg:max-w-xs">
      Backed by the best companies and visionary agents
    </p>
  </div>

  <div className="mt-6">
    <Img
      src="/images/names.png"
      alt="Backed companies"
      width={1200}
      height={700}
      className="w-full h-auto"
      priority
    />
  </div>
</section>



<section className="px-6 py-8">
  <div className="lg:flex  lg:gap-8">
    <div className="lg:w-1/2 mb-6 md:mb-0">
      <p className="lg:text-[18px] text-gray-600 max-w-xs mb-3">USD Bloom in Action</p>
      <h2 className="text-4xl font-semibold mb-5">Use cases</h2>
      <p className="lg:text-[18px] text-gray-800 lg:max-w-xs  md:max-w-xl lg:mb-2 mb-8 ">
        USD Bloom offers a variety of use cases for developers, 
        businesses and treasuries seeking secure and profitable
        stablecoin integrations.
      </p>
    </div>
    <div className="lg:w-1/2 relative md:h-screen h-[70vh] rounded-3xl overflow-hidden">
      <Img
        src="/images/houseImage.png"
        alt="House-image"
        fill
        className="lg:object-cover "
        priority
      />
      <div className="absolute left-6 top-6">
        <h1 className="text-2xl md:text-4xl font-semibold mb-5">Business</h1>
        <p className="md:text-[16px] text-xs text-gray-700 max-w-xl mb-3 pr-5">
          Boost user engagement by offering USD Bloom, 
          a secure fiat-backed stablecoin with high yields,
          allowing customers to earn effortlessly on your platform.
        </p> 
        <div className="flex items-center gap-2 md:text-[16px] text-sm">
          <ArrowRight size={20} className="bg-gray-300 p-1 rounded-full"/>
          <Link href="#" className="text-gray-600 ">Learn more</Link>
        </div>
      </div>
    </div>

  </div>
</section>


   </main>
  )
}