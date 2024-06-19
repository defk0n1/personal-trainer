import "../hero.css" 
import hero from "../assets/heroo.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Hero() {
    useGSAP(()=>{
        var tl = gsap.timeline();
        tl.from(".hero-heading",
            {
                opacity:0,
                yPercent:-30,
                duration:1,
                ease:'power1'


            }
        );
        tl.from(".hero-sub", {
            opacity:0,
            yPercent:-30,
            duration:1,
            ease:'power1'


        });
        tl.from(".hero-buttons", {
            opacity:0,
            yPercent:-30,
            duration:1,
            ease:'power1'


        });
    })

    return(
    <div className="hero-wrapper">
        <div className="hero-content">
            <div className="hero-heading">
                        UNLOCK YOUR FULL POTENTIAL.     </div>
            <div className="hero-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi inventore odio. Quis non maxime nulla perspiciatis eaque id sit, nobis earum ut minima, nisi, fugiat iste ratione facilis cupiditate!
            </div>
            <div className="hero-buttons">
            <a href="">BOOK NOW</a>

                
            </div>
        </div>
        <div className="hero-img">
            <img src={hero} alt="" />
        </div>


    </div>
    )





}

export default Hero;