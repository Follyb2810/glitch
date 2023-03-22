import React from 'react'
import {BsGithub } from 'react-icons/bs'
import { FaTelegram ,FaTwitterSquare,FaMedium,FaDiscord} from 'react-icons/fa'

const Social = () => {
  return (
    <section className="contain social" >
            <img src={require('../asset/logo.svg').default} alt="a" className='img-fluid'/>
            {/* <div>Term of Use</div> */}
             <div className="socialLink">
                        <ol className='text-white list-unstyled socialList'>
                                <li>Contact Us</li>
                                <li>Gitbook</li>
                                <li>Term of Use</li>

                        </ol>
                        <ol className='text-white list-unstyled socialIcon'>
                                <li><FaTelegram size={30}/></li>
                                <li><FaTwitterSquare size={30}/></li>
                                <li><BsGithub size={30}/></li>
                                <li><FaMedium size={30}/></li>
                                <li><FaDiscord size={30}/></li>
                            </ol>
                        <div className="socialLaunch">
                                <a className="socialLaunchLink" href="#" >Launch App</a>
                         </div>
                            {/* <span className='footerLaunch'>Launch App</span> */}
             </div>
            
 </section>
  )
}

export default Social
