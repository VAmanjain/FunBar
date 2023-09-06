import { useState } from "react"
import  './counter.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Counter(){


    const [count, setCount] = useState(0)
    const[Heading, setHeading]=useState("You can rate here:")

    function addCount(){
        console.log("check add");
        if (count<10){
        setCount(count + 1);
        }
        if(count==10){
            setHeading("Thanks for your support 😊😊");
        }
        else if(count<10){
            setHeading("You can rate here:");
        }
    }
    
    function subCount(){
        console.log("check sub");
        if(count<=10){
            setHeading("You can rate here:");
        }
        if (count>0){
        setCount(count - 1);
        }
        
    }

    return(
        <div>
        <div className="counter">
            <div className="my">
                    <div className="photo">
                         <img src="my.png" alt="" style={{width:"250px"}} />
                    </div>
                <div className="data">
                    <h1>
                        Hello, Everyone &#x1F44B;
                    </h1>
                    <p>
                        I'm front-End develepor . I'm make this website for my practise .
                        I hope you enjoyed my website . You can rate me below.  &#x1F447; &#x1F447;
                    </p>

                    <h2>My socials</h2>
                    <div className="socails">
    <a href="https://instagram.com/iamanjain17?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank">{<InstagramIcon/>}</a>
    <a href="https://www.linkedin.com/in/aman-jain-416321256" target="_blank">{<LinkedInIcon/>}</a>
    <a href="https://github.com/VAmanjain" target="_blank">{<GitHubIcon/>}</a>

             </div>
                </div>
            </div>
           <div className="count">
        <h1>{Heading} {count} 🌟 </h1>
        <button className="First" onClick={addCount}>+</button>
        <button className="Second" onClick={subCount}>-</button>
            </div>  
        </div>
        </div>
    )
}

export default Counter