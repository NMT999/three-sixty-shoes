import React from 'react'
import Header from './components/Header'
import TextCarousel from './components/TextCarousel'

function App() {
  return (
    <div>
      <Header />
      <main className="h-[calc(100vh-64px)] grid place-items-center relative">
        <TextCarousel />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,1)_1%,rgba(255,255,255,0)_15%,rgba(255,255,255,0)_85%,rgba(255,255,255,1)_99%)]"></div>
        <div className="absolute pointer-events-none max-w-[1480px] mx-auto bottom-5 w-full grid grid-cols-2 gap-4">
          <p className='text-xl font-audiowide leading-6'>Rewriting the rules of footwear, one step at a time <br />
            Where creativity meets precision and nothing is off-limits <br />
            Each pair is engineered to stand out, not blend in <br />
            Made for those who walk like the world is watching</p>
          <div></div>
        </div>
      </main>
    </div>
  )
}

export default App