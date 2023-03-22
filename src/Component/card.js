import React from 'react'
import E from  '../asset/e.svg'
import L from  '../asset/l.svg'
import K from  '../asset/k.svg'

const Card = () => {
  return (
    <div className="contain" style={{marginTop:"150px"}}>
         <div className="row gy-5 justify-content-between align-items-center">
             <div className="col-xs-12 col-sm-6 col-md-4  trapezium">
                 <div className='cardMain '>
                    <div className='cardIn'>
                    <img src={K} class="card-img-top cardImg" alt="..."/>
                    <div class="">
                        <h1 class="cardTitle">Sustainable Yield Savings</h1>
                            <p class="cardText text-white">
                                Borrow $KOIN : Is an Over-Collateralized destablecoin backed by decentralizes,yeild-bearing assets to generate sustainable yields
                            </p>
                        </div>

                    </div>
                 </div>
             </div>
             <div className="col-xs-12 col-sm-6 col-md-4  trape ">
             <div className='cardMain ' style={{border:"1px solid #FC087E"}}>
                    <div className='cardIn'>
                    <img src={L} class="card-img-top cardImg" alt="..."/>
                    <div class="">
                        <h1 class="cardTitle">Lend And Borrow Glitch Assets</h1>
                            <p class="cardText text-white">
                                Earn high yield and save crypto from violatity by supplying $GLCH assets and/or stablecoin as collateral to borrow crypto assets
                            </p>
                        </div>

                    </div>
                 </div>
             </div>
             <div className="col-xs-12 col-sm-6 col-md-4  trapezium">
             <div className='cardMain '>
                    <div className='cardIn'>
                    <img src={E} class="card-img-top cardImg" alt="..."/>
                    <div class="">
                        <h1 class="cardTitle">Enhance Your Earning</h1>
                            <p class="cardText text-white">
                                    Stake $KOIN and $MAZ to generate compettive APY.Open staking vaults on Mazu and start earning $MAZ for putting your asset to work for you.
                            </p>
                        </div>

                    </div>
                 </div>
             </div>
         </div>
       
    </div>
  )
}

export default Card
