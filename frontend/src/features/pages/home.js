import React from 'react'
import {
    CloudArrowUpIcon,
    CircleStackIcon,
    
    
} from '@heroicons/react/24/solid'


import ourServices from './searchConsultation'


const Home = () => {
  return (
    < div >
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
              
            </div>
            
        </div>
        
    </div>

    <div className=''>
                <p>our Services</p>
                <div className='flex justify-between flex-wrap px-4' >
                    <p className='flex px-4 py-2 text-slate-500'><CloudArrowUpIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><CircleStackIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><CircleStackIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><CircleStackIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div>
    </div>
  )
}

export default Home