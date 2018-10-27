import React, { Component } from 'react';
import twitter from '../assets/social/twitter.png';
import github from '../assets/social/github.png';
import instagram from '../assets/social/instagram.png';
import TermsOfService from '../components/modals/TermsOfService';

class Social extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            showTerms: false
        }
    }
    toggleTermsOfService = () => {
        this.setState({
            showTerms: !this.state.showTerms
        })
    }
    render() {
        return (
            <div>

            <div id='social'>
                <p>A Finality Labs Production | JOIN THE FIGHT!</p>
                <div className='social-inner'> 
                    <div>       
                    <a href='https://twitter.com/ETimeHeroes' target='_blank' rel='noopener noreferrer'>
                        <img className='twitter' src={twitter} alt='twitter'/>
                    </a>
                    </div>
                    <div>
                    <a href='https://github.com/finalitylabs' target='_blank' rel='noopener noreferrer'>
                        <img className='github' src={github} alt='github'/>
                    </a>
                    </div>
                    <div>
                    <a href='https://www.instagram.com/eternaltimeheroes' target='_blank' rel='noopener noreferrer'>
                        <img className='instagram' src={instagram} alt='instagram'/>
                    </a>
                    </div>
                </div>

            </div>
                    <p className="toggle-terms" onClick={this.toggleTermsOfService}>Terms of service</p>
                    {this.state.showTerms ? <TermsOfService toggleTermsOfService={this.toggleTermsOfService} /> : null}
            </div>
        );
    }
}

export default Social;
