import React from 'react'
import M from '../asset/M.svg'
const Hero = () => {
  return (
    <div className='contain hero'>
         {/* <div className='d-flex justify-content-between heroContent'> */}
         <div className='row justify-content-between '>
             <div className='col-xs-12 col-sm-6 '>
                 <h1 className='heroText'>The Glitch <br/>Monet Market</h1>
                 <p className='text-white heroContent'>Lend And Borrow Gltch Assets,Mints $KOIN and earn $MAZ Tokens</p>
                 <span className='heroLaunch text-white'>Launch</span>
             </div>
             <div className='col-xs-12 col-sm-6'>
                <div className='heroImg'>
                {/* <div d-flex justify-content-end> */}

                <img src={M} alt='b' className='img-fluid imgHero '/>
                </div>
             </div>

         </div>
          
      
    </div>
  )
}

export default Hero
