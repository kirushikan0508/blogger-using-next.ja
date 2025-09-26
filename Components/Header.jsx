import { assets } from '@/Assets/assets'
import React from 'react'
import Image from "next/image";


const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between item-center'>
            <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto"/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-3 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started<Image src={assets.arrow} alt="" /></button>
        </div>
        <div className='tetx-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium text-center'>Latest Vlogs</h1>
            <p className='mt-10 max-w-[740px] mx-auto text-xs text-center sm:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati, saepe repellat asperiores officia aliquid cupiditate illum debitis officiis enim minima ipsa cum, sed accusamus sunt autem aspernatur? Numquam, iure.
            </p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
                <input type="email" placeholder='enter your email' className='pl-4 outline-none' />
                <button type='submit' className='border-[1px] border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white hover:bg-black hover:text-white hover:scale-105 
             transition-all duration-300'>Subscribe</button>
            </form>

        </div>

    </div>
  )
}

export default Header