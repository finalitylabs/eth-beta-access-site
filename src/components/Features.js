import React, { Component } from 'react';

import elbrujo from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_ElBrujo.svg';
import bigboi from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_BigBoi.svg';
import rowdy from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Rowdy.svg';
import bestia from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Bestia.svg';
import ruby from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Ruby.svg';
import hank from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Hank.svg';
import c3bcBackground from '../assets/ETH_C3BC_Bg_NoCharacters.png';
import runnerBackground from '../assets/ETH_Runner_Bg_NoCharacters.png';
import postapocBackground from '../assets/ETH_PostApocalyptic_Bg_NoCharacters.png';


class Features extends Component {
    render() {
        return (
            <div id='features'>
                <div className='feature-desc'>
                    <h1>Beta Access Game Features</h1>
                    <p>With the purchase of a QRT coin and / or the portal conversion of a CryptoKitty, players will gain both E.T.H.’s Beta Access as well as access to the official release.
                    <br />
                    A QRT purchase comes with a limited edition Advanced Hero (power level: 100) from a timeline of the player’s choice. A portal conversion of a CryptoKitty comes with a limited edition CryptoKitties-inspired grunt (power level: 20) from a timeline of the player’s choice. Players may purchase a QRT as well as convert a CryptoKitty to acquire both the Advanced Hero and the CryptoKitties-inspired grunt.
                    </p>
                </div>
                <h2>Special Beta Access Edition Heroes</h2>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={elbrujo} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={rowdy} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={bigboi} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>
                </div>
                <h2>Special Beta Access Edition Grunts</h2>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={bestia} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={hank} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={ruby} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>
                
                </div>
                <div className='feature-bgs'>
                    <h2>E.T.H.'s First Three Discovered Timelines</h2>
                    <img src={c3bcBackground} alt='c3bc-background' />
                    <p>Circa 3000 B.C. (C3BC)</p>
                    <img src={runnerBackground} alt='runner-background' />
                    <p>Circa 3000 B.C. (C3BC)</p>
                    <img src={postapocBackground} alt='postapoc-background' />
                    <p>Circa 3000 B.C. (C3BC)</p>
                </div>
            </div>
        );
    }
}

export default Features;
