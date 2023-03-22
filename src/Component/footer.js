import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import {BsGithub } from 'react-icons/bs'
import { FaTelegram ,FaTwitterSquare,FaMedium,FaDiscord} from 'react-icons/fa'
const footer = () => {
  return (
    <footer className='contain'>
         <div className='footerIcon'>

                        <h3 className='text-white'>< BiCopyright  /> MAZU Protocool</h3>
                        <ol className='text-white  footerNav'>
                            <li><FaTelegram size={30}/></li>
                            <li><FaTwitterSquare size={30}/></li>
                            <li><BsGithub size={30}/></li>
                            <li><FaMedium size={30}/></li>
                            <li><FaDiscord size={30}/></li>
                        </ol>
                </div>

         
      
    </footer>
  )
}

export default footer
