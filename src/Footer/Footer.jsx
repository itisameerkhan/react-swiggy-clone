import './Footer.css';
import akLogo from '../../src/assets/aklogomain.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-1">
                <a href="https://github.com/itisameerkhan/react-swiggy-clone" target='_blank'>
                <img src={akLogo} alt="" className='footer-logo' />
                </a>
                <p>© 2023 Developed by Ameer khan B</p>
            </div>
            <div className="footer-2">
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Teams</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </ul>
            </div>
            <div className="footer-3">
                <div className="footer-3-1">
                    <h3>Contact us</h3>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>
                <div className="footer-3-2">
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="footer-4">
                <h3>we deliver to</h3>
                <ul>
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;