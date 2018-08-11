import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <div id='navbar'>
                <h1>Finality Labs</h1>
                <ul>
                    <li><a href='#synopsis'>About</a></li>
                    <li><a href='#portal-main'>Portal</a></li>
                    <li><a href='#features'>Game Features</a></li>
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#social'>Contact</a></li>
                </ul>
            
            </div>
        );
    }
}

export default NavBar;
