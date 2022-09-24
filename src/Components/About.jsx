import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#5b186e] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>
                      About
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold '>
                <p>This is about me!</p>
              </div>
              <div>
                <p>
                I was born and raised in the southern part of the city of Kolkata. I always had a knack for computers from an early age. Later on I learnt to write code in simple BASIC language and going further learnt Java. I always wondered how these websites which we visit so often, work so seamingly fast. This motivated me to learn more about websites and its functionalities. Now, here I am try to build some of the coolest websites ! 
                </p>
              </div>

            </div>

        </div>

    </div>
  )
}

export default About