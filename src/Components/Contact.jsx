import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full h-screen bg-[#5b186e] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/101c1ab8-fefd-40a4-bed6-20118676a452' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Have any suggestions ? Let me know</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name='message' rows='10' placeholder='Your suggestions...'></textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>

        </form>

    </div>
  )
}

export default Contact