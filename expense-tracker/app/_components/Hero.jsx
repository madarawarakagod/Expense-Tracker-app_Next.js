import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className="bg-grey-50 flex items-center flex-col">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
       Manage your Expense
        <strong className="text-gray-400 "> Control your Money </strong>

      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Start creating your budget and save ton of money</p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-black bg-black px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-slate-600"
          href="/dashboard"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
  <Image src="/1.png" alt='dashboard'
  width={1000}
  height={700}
  className='-mt-9 rounded-xl border-2'/>
</section>
  )
}

export default Hero