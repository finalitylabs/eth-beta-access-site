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
                    <h1>BETA ACCESS GAME FEATURES</h1>
                    <p>
                        With the purchase of a QRT token and / or the portal conversion of a CryptoKitty, players will gain both game access to the Beta version as well as the official release of Eternal Time Heroes (E.T.H.).

                        A QRT token purchase comes with a limited edition, legendary hero from one of E.T.H.’s original three timelines. Similarly, a portal conversion of a CryptoKitty comes with a moderately rare CryptoKitties-inspired grunt. But why choose between the two options when you can do both and start building your battle forces?
                        <br/><br/>
                        *Note: While the Kitty Conversion Portal will remain open post-Beta, the three legendary heroes listed below are only available through E.T.H.’s Beta Access sale.
                        <br/><br/>
                        What kind of a fighter are you and where does your allegiance lie? Are you ready to find out?
                    </p>
                </div>
                <h2>Special Beta Access Edition Heroes</h2>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={elbrujo} />
                        <p>
                        El Brujo
                        <br/><br/>
                        A true and tried master of the dark arts, El Brujo possesses exceptional magical powers that not only give him powerful attacks with damage dealt over time but also the noteable ability to self-heal. Not shabby for a 200 year old man.
                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={rowdy} />
                        <p>
                        Rowdy
                        <br/><br/>
What Rowdy lacks in size, she makes up in brains, agility and spunk. As a highly trained assassin with state of the arts weaponry and gear, she can melt down an opponent -- as long as she manages to stay on her feet.

                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={bigboi} />
                        <p>
                        Big Boi
                        <br/><br/>
Big Boi is -- well, a big boy. A survivor of the apocalypse equipped with unorthodox attacks, he is not an opponent to underestimate. While he’s not exactly the most nimble hero, his durability is hard to match and his hits are definitely nothing to sneeze at.

                        </p>
                    </div>
                </div>
                <h2>Special Beta Access Edition Grunts</h2>
                <div className='feature-page'>
                    <div className='feature-col'>
                        <img src={bestia} />
                        <p>
                        Bestia
                        <br/><br/>
                        
Although summoned by witchcraft, Bestia’s skillset really lies in being a grumpy, stinky cat. He has a penchant for knocking objects over (and into opponents) and a breath that kills -- literally.

                        </p>
                    </div>                    
                    <div className='feature-col'>
                        <img src={hank} />
                        <p>
                        Hank
                        <br/><br/>
                        
Pieced together in a cutting-edge laboratory, Hank is built to be a little walking killing machine. Equipped with taser-like nails and the ability to shoot laser beams, he has the potential to be a world-class soldier, as long as he doesn’t get distracted by snacks.

                        </p>
                    </div> 
                    <div className='feature-col'>
                        <img src={ruby} />
                        <p>
                        Ruby
                        <br/><br/>
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
