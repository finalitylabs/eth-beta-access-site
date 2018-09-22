import React, { Component } from 'react';
import twitter from '../assets/social/twitter.png';
import github from '../assets/social/github.png';
import instagram from '../assets/social/instagram.png';

class Social extends Component {
    render() {
        return (
            <div id='social'>
                <p>A Finality Labs Production | JOIN THE FIGHT!</p>
                <div className='social-inner'> 
                    <div>       
                    <a href='https://twitter.com/HeroesExtreme' target='_blank' rel='noopener noreferrer'>
                        <img className='twitter' src={twitter} alt='twitter'/>
                    </a>
                    </div>
                    <div>
                    <a href='https://github.com/finalitylabs' target='_blank' rel='noopener noreferrer'>
                        <img className='github' src={github} alt='github'/>
                    </a>
                    </div>
                    <div>
                    <a href='https://www.instagram.com/extremetimeheroes/?hl=en' target='_blank' rel='noopener noreferrer'>
                        <img className='instagram' src={instagram} alt='instagram'/>
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;
