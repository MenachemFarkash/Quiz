import React from 'react';
import ProfilePicture from '../Components/ProfilePicture.jpg';
function AboutMe() {
    // ? a very simple about me that contains a photo of me and some information about the project and me.
    return (
        <div className="aboutContainer">
            <div>
                <img className="profileImage" src={ProfilePicture}></img>
                <h3 className="name"> Menachem Farkash</h3>
            </div>
            <div className="informationAboutMe">
                <p className="info">
                    Im a begginer FullStack developer and this is a project in react implementing Hooks and
                    new techniches i learned in my course
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
