import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00335c] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold mb-2">About BookNest</h2>
            <p className="text-sm">
              BookNest is your go-to library for finding and borrowing books. Whether you love fiction, non-fiction, or academic resources, we have a collection tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/allbooks" className="hover:underline">All Books</a></li>
              <li><a href="/addbook" className="hover:underline">Add Books</a></li>
              <li><a href="/borodedBooks" className="hover:underline">Borrowed Books</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p className="text-sm">123 Library Street, BookTown</p>
            <p className="text-sm">Phone: +123 456 789</p>
            <p className="text-sm">Email: support@booknest.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
