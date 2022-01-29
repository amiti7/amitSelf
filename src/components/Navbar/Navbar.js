import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import SubMenu from './SubMenu';

class Navbar extends Component {
    state = { clicked:false, subMenu:false}

handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

closeMobileMenu = () => this.setState({clicked:false});

onMouseLeave = () => this.setState({subMenu:false });
onMouseEnter = () => this.setState({subMenu:true});
    
    render() {
        return(
            <nav className='NavbarItems'>
                <Link  style = {{
                     marginRight: '6px',
                     marginLeft: '10px',
                     marginTop: '5px'
                     }} to='/' className='navbar-logo' onClick={this.closeMobileMenu}>
                    <div
                     style = {{
                     marginRight: '6px',
                     }}>
                         aboutAmit
                    </div> 
                    <i className="fas fa-user-secret"></i>
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                        <li onMouseEnter={item.dropDown?this.onMouseEnter:undefined} onMouseLeave={item.dropDown?this.onMouseLeave:undefined} onClick={this.closeMobileMenu} key={index}>
                            <Link to={item.url} className = {item.cName} href={item.url} >
                            {item.title} <i className={item.className ?item.className:''}/>
                            </Link>
                            {this.state.subMenu && item.dropDown? <SubMenu list = {item.dropDown} closeSubmenu={this.onMouseLeave}></SubMenu>:''}
                        </li>)
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar