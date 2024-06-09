import dumbbell from '../assets/dumbbell.png';

export default function Navbar() {
    return (
        <div className="navbar">
        <div className="navlogo"><img src={dumbbell} alt="" ></img></div>
        <div className="navlist">
            <div className="navli"><a href="">HOME</a></div>
            <div className="navli"><a href="">ABOUT</a></div>
            <div className="navli"><a href="">CONTACT</a></div>
            <div className="navli" id="book_button"><a href="">BOOK NOW</a></div>
            {/* <a href="#" onclick="return false" className="toggle-button navli">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a> */}
        </div>
        </div>
    )
}