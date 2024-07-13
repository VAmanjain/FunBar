import { useState } from "react";
import "./about.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SiBento } from "react-icons/si";
import XIcon from "@mui/icons-material/X";

function About() {
  const [count, setCount] = useState(0);
  const [Heading, setHeading] = useState("How much do you like a website? ");

  function addCount() {
    console.log("check add");
    if (count < 10) {
      setCount(count + 1);
    }
    if (count === 10) {
      setHeading("Thanks for your support 😊😊");
    } else if (count < 10) {
      setHeading("How much do you like a website? ");
    }
  }

  function subCount() {
    console.log("check sub");
    if (count < 10) {
      setHeading("How much do you like a website? ");
    }
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="about">
        <div className="info_container">
          <div className="info">
            <div className="dp">
              <img src="myimg.jpg" alt="" />
            </div>
            <a
                href="https://aman-protfolio.netlify.app"
                target="_blank"
              >
                <div className="name">Aman Jain</div>
              </a>
            
            <div className="des">Front End Developer</div>
            <div className="socails">
              <a href="https://x.com/Jain17Vaman" target="_blank">
                <XIcon className="s-icon x " />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-jain-416321256"
                target="_blank"
              >
                <LinkedInIcon className="s-icon ln " />
              </a>
              <a href="https://github.com/VAmanjain" target="_blank">
                <GitHubIcon className="s-icon git " />
              </a>
              <a href="https://bento.me/vamanjain" target="_blank">
                <SiBento className="s-icon b " />
              </a>
            </div>
          </div>
        </div>

        <div className="desc_container">
          <div className="intro">
            <h1>Hello, Everyone &#x1F44B;</h1>
            <p>
              I am Aman Jain, as a front-end engineer, I design and develop user
              interfaces for web applications, focusing on visual appeal,
              usability, and responsiveness. I am eager to build cool and
              creative products.
            </p>
            <p>
              My motive in creating this website is to build a one-stop
              destination for multiple games. These games serve as a refreshing
              break from the challenges of coding, helping me to lift my mood
              and mindset. I plan to keep adding more creative games to the
              platform.
            </p>
            <p>
              By building this website, I've gained important new skills and
              knowledge. I've learned how to set up app routing, improve my
              JavaScript logic, and create React components using the MVC
              (Model-View-Controller) approach. I've also gained the expertise
              needed to successfully host the website.
            </p>
            <div className="star-box">
              Star or fork my GitHub repo!
              <a
                href="https://github.com/VAmanjain/FunBar"
                target="_blank"
                className="star"
              >
                <span className="repo_name">FunBar</span>
                <GitHubIcon className="icons  " />
              </a>
            </div>
          </div>

          <div className="count">
            <h1>
              {Heading} {count} /10
            </h1>
            <button className="First" onClick={addCount}>
              +1
            </button>
            <button className="Second" onClick={subCount}>
              -1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
