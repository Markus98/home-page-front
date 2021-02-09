import "./HeaderLink.css"
import { Link } from "react-router-dom"

function HeaderLink({to, location, name}) {
    const barSelectedStyle = {
        paddingLeft: "100%",
        opacity: 1
    };
    const linkSelectedStyle = {
        color: "var(--primaryTextColor)"
    };
    
    let [ barStyle, linkStyle ] = [{},{}];
    // Additional path check for root "/" (Home page)
    if ((to !== "/" && location.substr(0, to.length) === to) || location === to){
        [ barStyle, linkStyle ] = [barSelectedStyle, linkSelectedStyle];
    }

    return (
        <Link className="App-header-link" to={to} style={linkStyle}>
            {name}
            <div className="header-link-bar" style={barStyle}/>
        </Link>
    )
}

export default HeaderLink