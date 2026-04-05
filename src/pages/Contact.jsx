import SocialIcons from "../Components/Connect";

function Contact() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              <a href="#home">
                web<span className="text-[#FF7F11]">Base.</span>
              </a>
            </h1>

            <p className="text-gray-400 leading-relaxed">
              We build modern scalable websites for startups and businesses
              around the world.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>

            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>UI / UX Design</li>
              <li>SEO Optimization</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>

            <ul className="space-y-2 text-gray-400">
              <li>📧 se.ahmed1010@gmail.com</li>
              <li>📍 Kigali, Rwanda</li>
              <li>⏱ Response within 24 hours</li>
            </ul>
          </div>

          {/* Social */}
          <div className="w-fit">
            <h2 className="text-lg font-semibold mb-6 text-center lg:text-left">
              Connect with me
            </h2>

            <SocialIcons />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} WebBase — All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Contact;