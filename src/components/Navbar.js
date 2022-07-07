import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default class Navbar extends Component {

  constructor(){
    super();
    this.state={
        show: true,
    }
 }

  render(){
  return (
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <a className="navbar-brand logo-text" href="*">MADHANAM INN</a>
      <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                        {this.state.show ? <MenuIcon color='secondary'/> : <CloseIcon color='primary'/>}
      </button>
      <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link" href="#header">Home</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="#services">Services</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#pricing">Pricing</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#rooms">Rooms</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#footer">Contact Us</a>
           </li>
           
        </ul>
      </div>
    </div>
  </nav>

  )
}

}