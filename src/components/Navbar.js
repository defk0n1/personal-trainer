import dumbbell from '../assets/dumbbell.png';
import '../Navbar.css'
import { useState } from 'react';


export default function Navbar() {
    // const toggleButton = document.getElementsByClassName('toggle-button')[0];
    // const navLinks  = document.getElementsByClassName('navli');

  
    const [menuOpen,setMenuOpen] = useState(false);
   

    

    return (
        <div className="navbar">
        <div className={menuOpen ? "navlogo-mobile":"navlogo"}><img src={dumbbell} alt="" ></img></div>
        <div className={menuOpen ? "navlist-mobile":"navlist"}>
            <div className={menuOpen ? "navli-mobile":"navli"}><a href="">HOME</a></div>
            <div className={menuOpen ? "navli-mobile":"navli"}><a href="">ABOUT</a></div>
            <div className={menuOpen ? "navli-mobile":"navli"}><a href="">CONTACT</a></div>
            <div className={menuOpen ? "navli-mobile":"navli"} id="book_button"><a href="">BOOK NOW</a></div>
            <div href="#" onClick={()=>{setMenuOpen(!menuOpen);console.log(menuOpen)}} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
        </div>
    )
}