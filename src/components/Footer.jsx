import React from 'react';
import './Footer.css'; // Import your CSS file for custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">CANDY</h1>
                
                <h2>Contact</h2>
                
                <address>
                    5534 Somewhere In. The World 22193-10212<br />
                    <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>
            
            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">About us</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Contact us</a>
                        </li>

                        <li>
                            <a href="#">Return Policy</a>
                        </li>
                            
                        <li>
                            <a href="#">Alternative Ads</a>
                        </li>
                    </ul>
                </li>
                
                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Media mention</h2>
                    
                    <ul className="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">instagram</a>
                        </li>
                        
                        <li>
                            <a href="#">facebook</a>
                        </li>
                        
                        <li>
                            <a href="#">twiter</a>
                        </li>
                        
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                        
                        <li>
                            <a href="#">fiver</a>
                        </li>
                        
                        <li>
                            <a href="#">Snapchat</a>
                        </li>
                    </ul>
                </li>
                
                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>
                    
                    <ul className="nav__ul">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        
                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </li>
            </ul>
            
            <div className="legal">
                <p>&copy; 2024 Something. All rights reserved.</p>
                
                <div className="legal__links">
                    <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
