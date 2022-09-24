import React, {useState} from 'react'
import Logo from '../Assets/logo.png'
import {FaBars, FaTimes,FaGithub, FaLinkedin, FaFacebook, FaMailBulk, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handleClick =()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#442969] text-gray-100'>
        <div>
            <img src={Logo} alt='image logo' style={{width: '155px'}} />
        </div>
            
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
     
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#331338] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link></li>
            <li className='py-6 text-3xl'> <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link></li>
            <li className='py-6 text-3xl'> <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link></li>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                        Work
                    </Link></li>
            <li className='py-6 text-3xl'><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link></li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-100' 
                    href='https://www.linkedin.com/in/yubraj-nag/'>
                        Linkedin<FaLinkedin size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-100' 
                    href='https://github.com/SkyCoder31'>
                        Github<FaGithub size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-red-500'>
                    <a className='flex justify-between items-center w-full text-gray-100' 
                    href='mailto:nagyubraj@gmail.com'>
                    Email<HiOutlineMail size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-green-400'>
                    <a className='flex justify-between items-center w-full text-gray-100' 
                    href='https://drive.google.com/file/d/14GDJXaHHv8i7ffF3Sd7E91e3tiyYH6fa/view?usp=sharing'>
                        Resume<BsFillPersonLinesFill size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text-gray-100' 
                    href='https://twitter.com/NagYubraj'>
                        Twitter<FaTwitter size={35}/>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar