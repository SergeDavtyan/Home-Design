import React from 'react';
import "./About.css";
import AboutPic from "../../assetc/images/p3.jpg";

const About = () => {
  return (
    <div className='about borpad'>

      <div className="container">
      <h3>About</h3>

      <div className="flex">

        <div className="left">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores saepe eius illo dolore optio recusandae ipsum reiciendis rerum eaque eos repellat, maxime quo? Repellat accusamus, odio nulla optio sint consequuntur accusantium esse nam tempora. Tenetur accusamus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora asperiores saepe eius illo dolore optio recusandae ipsum reiciendis rerum eaque eos repellat, maxime quo? Repellat accusamus, odio nulla optio sint consequuntur.</p>
          <p>Lorem ipsum dolor.</p>
        </div>

        <div className="right">
            <img src={AboutPic} alt="About Pic" />
        </div>

      </div>

      </div>

    </div>
  )
}

export default About;