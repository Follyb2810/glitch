import React from 'react'
import logo from '../asset/logo.svg'

const NavBar = () => {
  return (
     <div className="contain">
        <nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
         <img src={logo} alt='l' className='img-fluid'/>
    </a>
    <button className="navbar-toggler"style={{background:'#FC087E'}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white'}}>Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white'}}>Markets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white'}}>WhitePaper</a>
        </li>
        
      </ul>
        <span className="launch">
          <a className="" href="#" >Launch App</a>
        </span>
      
    </div>
  </div>
    </nav>
     </div>
  )
}

export default NavBar
