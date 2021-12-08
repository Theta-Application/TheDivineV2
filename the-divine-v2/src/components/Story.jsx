import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/about.css';
import dummyPortrait from '../img/portraitfinal.png';
import { Spring } from 'react-spring/renderprops';

function Story() {

  return (
    <AbsoluteWrapper>
        <div className="aboutBlock">
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    delay='200'>
                    {props => <div style={props}>
                        <div className="dummyBlock">
                            <img alt="portrait" className="portrait"src={dummyPortrait} />
                        </div>
                        </div>}
                </Spring>
                <div className="aboutInfo">
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='500'>
                        {props => <div style={props}>
                            <h1>A professional web developer with experience across all creative platforms.</h1>
                        </div>}
                    </Spring>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='700'>
                        {props => <div style={props}>
                            <p>
                                I am a full stack web developer who creates compelling websites 
                                and user-friendly apps. Through the Lambda School intensive training 
                                course, I mastered engineering intuitive and dynamic user interfaces 
                                that are both efficient and secure. My extensive experience in graphic 
                                design and video production, as well as my education in media 
                                communications, give me the creative cutting edge in providing practical 
                                and effective solutions within any technical environment. I am eager to 
                                work with motivated and open-minded people that are ready to tackle big 
                                challenges and produce innovative results in software and web development. 
                            </p>
                        </div>}
                    </Spring>
                </div>
        </div>
    </AbsoluteWrapper>
  );
}

export default Story;
