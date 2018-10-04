import React, { Component } from 'react';

import elbrujo from '../assets/FL_EternalTimeHeroes_CharacterProfiles_ElBrujo.png';
import bigboi from '../assets/FL_EternalTimeHeroes_CharacterProfiles_BigBoi.png';
import rowdy from '../assets/FL_EternalTimeHeroes_CharacterProfiles_Rowdy.png';
import bestia from '../assets/FL_EternalTimeHeroes_CharacterProfiles_Bestia.png';
import ruby from '../assets/FL_EternalTimeHeroes_CharacterProfiles_Ruby.png';
import hank from '../assets/FL_EternalTimeHeroes_CharacterProfiles_Hank.png';
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
                        <h4>El Brujo</h4>
                        <p>
                        A true and tried master of the dark arts, El Brujo possesses exceptional magical powers that not only give him powerful attacks with damage dealt over time but also the noteable ability to self-heal. Not shabby for a 200 year old man.
                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={rowdy} />
                        <h4>Rowdy</h4>
                        <p>
What Rowdy lacks in size, she makes up in brains, agility and spunk. As a highly trained assassin with state of the arts weaponry and gear, she can melt down an opponent -- as long as she manages to stay on her feet.

                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={bigboi} />
                        <h4>Big Boi</h4>
                        <p>
Big Boi is -- well, a big boy. A survivor of the apocalypse equipped with unorthodox attacks, he is not an opponent to underestimate. While he’s not exactly the most nimble hero, his durability is hard to match and his hits are definitely nothing to sneeze at.

                        </p>
                    </div>
                </div>
                <h2>Special Beta Access Edition Grunts</h2>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={bestia} />
                        <h4>Bestia</h4>
                        <p>
                        
Although summoned by witchcraft, Bestia’s skillset really lies in being a grumpy, stinky cat. He has a penchant for knocking objects over (and into opponents) and a breath that kills -- literally.

                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={hank} />
                        <h4>Hank</h4>
                        <p>
                        
Pieced together in a cutting-edge laboratory, Hank is built to be a little walking killing machine. Equipped with taser-like nails and the ability to shoot laser beams, he has the potential to be a world-class soldier, as long as he doesn’t get distracted by snacks.

                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={ruby} />
                        <h4>Ruby</h4>
                        <p>
Once a mild-mannered kitty, Ruby burned one of her nine lives, falling into a vat of radioactive waste some time during the apocalypse and morphed into a little hellion with newly evolved slashing speed, toxic projectile hairball vomits, and a chip on her shoulder.

                        </p>
                    </div>
                
                </div>
                <div className='feature-bgs'>
                    <h2>E.T.H.'s First Three Discovered Timelines</h2>
                    <div className='feature-bg-imgs'>
                        <div className='feature-bg-single'>
                            <img src={c3bcBackground} alt='c3bc-background' />
                            <p>Circa 3000 B.C. (C3BC)</p>
                        </div>
                        <div className='feature-bg-single'>
                            <img src={runnerBackground} alt='runner-background' />
                            <p>Runner</p>
                        </div>
                        <div className='feature-bg-single'>
                            <img src={postapocBackground} alt='postapoc-background' />
                            <p>Post-Apocalyptic</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
