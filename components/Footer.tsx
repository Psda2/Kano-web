import Button from './Button';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="contact-us" className="bg-[#0a192f] py-16 px-8 text-gray-300">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                {/* Column 1: About */}
                <div>
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-6">About Kano Travels</h3>
                    <p className="text-sm leading-relaxed mb-6">
                        Your trusted partner in creating unforgettable travel experiences. We specialize in personalized tours, exotic destinations, and seamless travel planning.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Icons */}
                        {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                            <a key={social} href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#38bdf8] hover:text-white transition-colors">
                                <span className="sr-only">{social}</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-[#38bdf8] transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-[#38bdf8] transition-colors">About Us</Link></li>
                        <li><Link href="#popular-destinations" className="hover:text-[#38bdf8] transition-colors">Destinations</Link></li>
                        <li><Link href="#services" className="hover:text-[#38bdf8] transition-colors">Services</Link></li>
                        <li><Link href="#" className="hover:text-[#38bdf8] transition-colors">Blog</Link></li>
                        <li><Link href="#contact-us" className="hover:text-[#38bdf8] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div>
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#38bdf8] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>32 Revolution Road,<br />Colombo, Sri Lanka</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>+94 340 976 442</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>info@kanotravels.com</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Mon - Fri: 9AM - 6PM</span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h3 className="text-xl font-bold text-[#38bdf8] mb-6">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe to get special offers and travel updates!</p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#38bdf8] transition-colors"
                        />
                        <Button type="submit" className="w-full bg-[#38bdf8] hover:bg-[#0284c7] text-white py-3">Subscribe</Button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Kano Travels. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
