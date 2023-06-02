import React from "react";

import { Image } from "react-bootstrap"

import profilePic from '../assets/tbb.jpg';

const Home=() => {
    return (
        <section>
            <h2>
                Home
            </h2>
            <Image className="profile-pic" src={profilePic} rounded style={{ maxWidth: '14vw', margin: '0 2vw'}} />
            <div class="container">
            <p>
                I am a full stack web developer with a passion for learning and creating. I have a background in the arts, a career in retail, and a passion for volunteering my time to develop young creative scientists. I am excited to bring my creativity and problem solving skills to the world of web development. 
             </p>
             <p>   
                I am currently working on a certificate in full stack web development from the University of California, Berkeley. I am proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js. I am a team player and I am excited to work with others to create something amazing.
            </p>
            </div>
        </section>
    )
}
export default Home