import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typed from "react-typed";
import NewsletterForm from '../components/NewsletterForm';
import { useEffect, useState } from 'react';
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"

const textLines = ['FUTURE.', 'MUSCLES.', 'WEB3.', 'MINDSET.', 'NETWORK.', 'COMMUNITY.']

const App = () => {

  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(true);

  return (
    <div className='h-full'>
      <div className='mx-auto bg-white w-10/12 ml-10 md:ml-auto py-6 pb-12 md:py-14 md:pb-32 mt-10 md:mt-16 rounded-md text-center border-4 border-black shadow-[-20px_20px_0px_0px_rgba(0,0,0,1)]'>
      <img src='https://drive.google.com/uc?export=view&id=1SJr4B_D1Qt3LKcdpqg75zwzbjFeLOYf3' className="w-14 md:w-24 mx-auto"></img>
        <div className='text-2xl md:text-4xl font-montserrat font-black z-0'><h1 className='text-4xl md:text-7xl font-montserrat font-black mt-6 md:mt-10'>BUILDING </h1><Typed strings={textLines} backDelay={1200} typeSpeed={100} backSpeed={80} loop={true}/></div>
        <p className='font-montserrat px-10 md:px-0 md:text-3xl mt-10 md:mt-14 font-medium'>Make sure you receive alpha before it's too late!🫵🏼 </p>
        <MailchimpSubscribe
                url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                <div className='mt-6 md:mt-8'>
                  <NewsletterForm onSubmitted={formData => subscribe(formData)} />
                  {(status == "success" && success == true) && <div className='w-11/12 md:w-3/12 h-36 bg-white fixed right-5 md:left-auto top-5 md:right-5 border-black border-4 rounded-md shadow-[10px_10px_40px_-5px_rgba(0,0,0,0.3)]'>
                    <button type="button" onClick={() => setSuccess(false)} class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 fixed top-7 right-7">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className='mt-5 font-bold text-3xl text-emerald-300'>Success!</h2>
                    <p className='font-medium mt-4 text-xl'>You are now Alpha!</p>
                    </div>}
                </div>
                )}
        />
        <p className='mt-4 md:mt-0 md:mr-56 text-xs'>*By joining I agree with <a href="" className='font-bold'>privcy policy</a></p>
      </div>
      <p className='text-center mt-12 md:mt-16 text-gray-400'>@2022 Gym Alpha All Rights Reserved.</p>
    </div>
  )
}                  

export default App;