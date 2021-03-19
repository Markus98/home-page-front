import "./Footer.css"
import { SocialIcon } from 'react-social-icons';

function Footer() {
    const iconSize = 40;
    const iconSizeStyle = { height: iconSize, width: iconSize };

    return (
        <div className="footer">
            <hr id="footer-hr" />
            <span id="footer-tuominen-text">tuominen.net</span>
            <div id="footer-icon-container">
                <SocialIcon 
                    url="https://www.linkedin.com/in/markus-tuominen-706b0a17a/" network="linkedin" 
                    bgColor="var(--primaryTextColor)"
                    className="footer-link-icon"
                    style={iconSizeStyle}
                />
                <SocialIcon url="https://github.com/Markus98" network="github" 
                    bgColor="var(--primaryTextColor)"
                    className="footer-link-icon"
                    style={iconSizeStyle}
                />
            </div>
        </div>
    );
}

export default Footer;