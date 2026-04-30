import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    // <div className='w-full h-screen flex relative flex-col background items-center'>
    //   <h1 className='bg-white absolute w-11/12 text-center text-4xl font-bold p-2 mt-4 rounded-xl'>Random GIF</h1>
    //   <div className='flex flex-col'>
    //     <Random/>
    //     <Tag/>
    //   </div>
    //   <div></div>
    // </div>

    <div className="min-h-screen flex flex-col items-center background gap-10 py-10">
  <h1 className="text-4xl font-bold bg-white w-10/12 text-center py-3 rounded-lg">
    RANDOM GIFS
  </h1>

  <Random />
  <Tag />
</div>
  )
}

export default App
