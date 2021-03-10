import './Header.css';
import HeaderLink from './HeaderLink';
import DarkToggle from './DarkToggle';
import {useLocation} from "react-router-dom";

function Header() {
    const pathname = useLocation().pathname;

    return (
        <header className="App-header">
            <div className="App-header-left">

            </div>
            <div className="App-header-content">
                <HeaderLink name="Home" to="/" location={pathname} />
                <HeaderLink name="Projects" to="/projects" location={pathname} />
                <HeaderLink name="Contact" to="/contact" location={pathname} />
            </div>
            <div className="App-header-right">
                <DarkToggle />
            </div>
        </header>
    )
}

export default Header;