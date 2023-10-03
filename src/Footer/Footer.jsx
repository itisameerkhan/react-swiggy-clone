import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-1">
                <img src="https://driver-media-assets.swiggy.com/drivers/q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/footer.png" alt="" className='footer-logo' />
                <p>© 2023 Bundl Technologies Pvt. Ltd</p>
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