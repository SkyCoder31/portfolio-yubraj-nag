import { HiArrowCircleRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
{/*import React, { useCallback, useMemo, useRef } from "react";
import { extend, Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Color, PMREMGenerator, Quaternion, Vector3 } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import Raymarcher from "three-raymarcher";*/}

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#442969] '>
      <div className='max-w-[1000px] mx-auto px-39 flex flex-col justify-center h-full'>
        <p  className='text-2xl text-yellow-400'>I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Yubraj Nag</h1>
        <h2 className='text=3xl sm:text-7xl font-bold text-[#8892b0]'>A Developer</h2>
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>Hello Everyone, this is my personalized portfolio website. Here you can find all about me, what are the technologies I like to work on, some of my projects and to look around and share your opinion. So have a look! </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500'><Link to="work" smooth={true} offset={50} duration={500}>
            Check out my works
            </Link> 
          <span className='group-hover:rotate-90 duration-200'>
          <HiArrowCircleRight className='ml-3'/>
          </span>
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default Home