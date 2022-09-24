import React from 'react'
import WorkImg from '../Assets/workImg.png'
import TodoImg from '../Assets/todolist.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#5b186e]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500'>Work</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#19031a] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-200 tracking-wider'>
                            NumFact Bot
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://discord.com/api/oauth2/authorize?client_id=956618265210290236&permissions=2147551232&scope=bot%20applications.commands'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/SkyCoder31/Num-Fact-Bot'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TodoImg})`}}
                className='shadow-lg shadow-[#19031a] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-200 tracking-wider'>
                            To-do List App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://shielded-savannah-38858.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work