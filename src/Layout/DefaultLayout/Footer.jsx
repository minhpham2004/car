import React from 'react'
import '../../css/footer.css'

function Footer() {
    return (
        <div>
            <div className="footer_container">
                <div className="upper_footer">
                    <div className="footer_banner">
                        <h2 className='footer_morent'>MORENT</h2>
                        <h4 className='footer_ad'>Our vision is to provide convenience and help increase your sales business.</h4>
                    </div>
                    <div className="footer_links">
                        <div className="footer-col">
                            <h3 className="footer-title">About</h3>
                            <ul className="footer_lists">
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">How it works</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Featured</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Partnership</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Business Relation</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3 className="footer-title">Community</h3>
                            <ul className="footer_lists">
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Events</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Blog</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Podcast</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Invite a friend</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3 className="footer-title">Socials</h3>
                            <ul className="footer_lists">
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Discord</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Instagram</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Twitter</a>
                                </li>
                                <li className="footer_item">
                                    <a href="" className="footer-item_link">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lower_footer">
                    <h4>©2022 MORENT. All rights reserved</h4>
                    <div className='left_footer'>
                        <h4>Privacy & Policy</h4>
                        <h4 className='term'>Terms & Condition</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer