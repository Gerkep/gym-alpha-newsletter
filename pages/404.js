import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const App = () => {

  return (
    <div className='h-full'>
      <div className='mx-auto bg-white w-10/12 ml-10 md:ml-auto py-8 pb-14 md:py-14 md:pb-32 mt-10 md:mt-24 rounded-md text-center border-4 border-black shadow-[-20px_20px_0px_0px_rgba(0,0,0,1)]'>
      <img src='https://drive.google.com/uc?export=view&id=1SJr4B_D1Qt3LKcdpqg75zwzbjFeLOYf3' className="w-14 md:w-24 mx-auto"></img>
        <h1 className='text-4xl md:text-9xl font-montserrat font-black mt-6 md:mt-10'>404 </h1>
        <p className='font-montserrat px-0 md:text-3xl mt-6 md:mt-14 font-medium'>Ooops... There is nothing interesting here. </p>
        <Link href="/"><p className='font-montserrat md:text-3xl mt-8 md:mt-4 font-medium underline'>Back to home</p></Link>
      </div>
      <p className='text-center mt-12 md:mt-16 text-gray-400'>@2022 Gym Alpha All Rights Reserved.</p>
    </div>
  )
}                  

export default App;