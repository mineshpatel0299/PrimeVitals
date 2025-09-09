import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#0C233B] text-white px-6 py-20 text-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div>
          <h1 className="text-2xl font-bold mb-2">VHL</h1>
          <p className="text-gray-400">Vital Healthcare Lab</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-blue-500" />
            <FaTwitter className="hover:text-blue-400" />
            <FaInstagram className="hover:text-pink-500" />
          </div>
          <div className="mt-6">
            <input
              type="email"
              placeholder="care@vitalhealthcare1.com"
              className="rounded px-3 py-2 text-black w-full max-w-xs bg-white"
            />
            <button className="bg-blue-500 mt-2 px-4 py-2 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li> <Link to="/packages">Packages</Link> </li>
            <li> <Link to="/corporate">Corporate Activities</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Basic Package</li>
            <li>Advance Package - Men</li>
            <li>Advance Package - Women</li>
            <li>Comprehensive Package</li>
            <li>Total Package</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li> <a>care@vitalhealthcarelab.com</a></li>
            <li>info@vitalhealthcarelab.com</li>
            <li>+91 9872654265</li>
            <li>
              Plot No - C - 20, Office No - 404, Aruna
              <br />
              Park, Laxmi Nagar Delhi - 110092

            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2025 Edigitify Pvt. Ltd. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-3">
        <a href="https://wa.me/919872654265" target="_blank" rel="noreferrer">
          <div className="bg-green-500 p-3 rounded-full shadow-lg text-white">
            <FaWhatsapp size={20} />
          </div>
        </a>
        <a href="tel:919872654265">
          <div className="bg-blue-500 p-3 rounded-full shadow-lg text-white">
            <FaPhone size={20} />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
