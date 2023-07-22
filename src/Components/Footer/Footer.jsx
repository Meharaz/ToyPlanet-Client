import React from 'react';
import logo from '../../assets/logo main.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='h-14 w-auto' src={logo} alt="Toy Planet"  />
                    <p>Toy Planet Ltd.<br />Best Toy shop for kids since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Categories</span>
                    <a className="link link-hover">Outdoor</a>
                    <a className="link link-hover">Indoor</a>
                    <a className="link link-hover">Adult Toys</a>
                    <a className="link link-hover">Kids Toys</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Social</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;