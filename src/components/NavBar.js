import React, { Component } from 'react';

import logo from '../assets/FL_Logo_Horizontal.svg';
import hamburger from '../assets/hamburger.png'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMobileMenu: false
        }
    }

    showMenu = () => {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }
    render() {
        return (
            <div id='navbar'>
                <img src={logo} alt='Finality Labs logo' />
                <ul className="desktop-menu">
                    <li><a href='#synopsis'>Introduction</a></li>
                    <li><a href='#portal-main'>Portal</a></li>
                    <li><a href='#features'>Game Features</a></li>
                    <li><a href='#techtext'>Technical Info</a></li>                    
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#social'>Contact</a></li>
                </ul>
                
                <img className="hamburger" src={hamburger} alt="hamburger menu icon" onClick={this.showMenu}/>
                <ul className={`mobile-menu ${this.state.showMobileMenu ? 'show' : 'hide'}`}>
                    <li><a href='#synopsis'>Introduction</a></li>
                    <li><a href='#portal-main'>Portal</a></li>
                    <li><a href='#features'>Game Features</a></li>
                    <li><a href='#techtext'>Technical Info</a></li>                    
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#social'>Contact</a></li>
                </ul>
            
            </div>
        );
    }
}

export default NavBar;
