import React, { Component } from 'react';

import elbrujo from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_ElBrujo.svg';
import bigboi from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_BigBoi.svg';
import rowdy from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Rowdy.svg';
import bestia from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Bestia.svg';
import ruby from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Ruby.svg';
import hank from '../assets/FL_ExtremeTimeHeroes_CharacterProfiles_Hank.svg';

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
                    <h2>Special Beta Access Edition Heroes</h2>
                </div>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={elbrujo} />
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
                    <div className='feature-col'>
                        <img src={rowdy} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>
                    <div className='feature-col'>
                        <img src={bestia} />
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
                    <div className='feature-col'>
                        <img src={hank} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere neque sit amet diam laoreet, id ultrices quam mollis. Vivamus venenatis maximus lacinia. Mauris non odio dui. Proin eget purus erat. Etiam lacinia sollicitudin efficitur. Cras hendrerit aliquam sem, vel interdum metus faucibus quis. Integer eros nunc, blandit eu egestas eget, lobortis vitae velit.
                        </p>
                    </div>
                     
                </div>
                
            </div>
        );
    }
}

export default Features;
