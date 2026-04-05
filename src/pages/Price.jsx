import "../App.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Price() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef();

  // Open modal
  const openForm = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  // Handle click outside to close modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Form submission with EmailJS
  const onsubmission = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xzkihn",
        "template_1d04tzo",
        e.target,
        "NiLP1ViVVOxTTOGKR"
      )
      .then(
        () => {
          setSubmitted(true);
          e.target.reset();

          setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="price"
      className="container min-h-screen min-w-full py-20 bg-[#0d0d0d] text-amber-100"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Price</h1>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-4 md:px-20">
        {/* Standard Card */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="cards__inner w-full md:w-1/3"
        >
          <div className="cards__card card bg-gray-900 p-6 rounded-xl shadow-lg">
            <p className="card__heading text-2xl font-bold mb-4">Standard Plan</p>
            <p className="card__price text-3xl font-extrabold mb-4">$100/Compelete website</p>
            <ul className="card_bullets flow mb-6" role="list">
              <li>🔸 Up to 5 Website Pages</li>
              <li>🔸 Responsive Design (mobile, tablet, desktop)</li>
              <li>🔸 Basic SEO Setup</li>
              <li>🔸 Contact Form</li>
              <li>🔸 Fast Loading Optimization</li>
              <li>🔸 1 Month Free Support</li>
              <li>🔸 2 Revisions</li>
            </ul>
            <button
              onClick={() => openForm("Standard Plan")}
              className="cursor-pointer card__cta cta w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Pro Card */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="cards__inner w-full md:w-1/3"
        >
          <div className="cards__card card bg-gray-900 p-6 rounded-xl shadow-lg">
            <p className="card__heading flex items-center gap-2 text-2xl font-bold mb-4">
              <img
                src="src/assets/4a2e85a3890f1f51c13010ef5fc49369-removebg-preview.png"
                alt=""
                className="w-12"
              />
              Pro Plan
            </p>
            <p className="card__price text-3xl font-extrabold mb-4">$250/compelete website</p>
            <ul className="card_bullets flow mb-6" role="list">
              <li>🔸 Up to 15 pages website</li>
              <li>🔸 Custom UI/UX Design</li>
              <li>🔸 Advanced SEO Optimization</li>
              <li>🔸 CMS Integration (WordPress / Headless CMS)</li>
              <li>🔸 Performance Optimization</li>
              <li>🔸 Analytics Integration</li>
              <li>🔸 3 Months Support</li>
              <li>🔸 Unlimited Revisions</li>
            </ul>
            <button
              onClick={() => openForm("Pro Plan")}
              className="cursor-pointer card__cta cta w-full bg-[#0d0d0d] text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      {/* Default Services */}
      <div className="cards__inner mt-16 mx-4 md:mx-40">
        <div className="card1 bg-gray-800 p-6 rounded-xl shadow-lg">
          <p className="text-3xl font-bold mb-4">By Default our services include:</p>
          <ul className="card_bullets flow text-lg" role="list">
            <li>🔸 Responsive design (Mobile, Tablet, Desktop)</li>
            <li>🔸 SEO-friendly structure</li>
            <li>🔸 Fast loading performance</li>
            <li>🔸 Security best practices</li>
            <li>🔸 Cross-browser compatibility</li>
            <li>🔸 Clean and scalable code</li>
            <li>🔸 Deployment support</li>
            <li>🔸 Basic documentation</li>
            <li>🔸 Testing & quality assurance</li>
            <li>🔸 Accessibility improvements</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d0d0d] p-8 rounded-xl w-11/12 md:w-[500px] text-amber-100"
          >
            <h2 className="text-2xl font-bold mb-4">Request a Website</h2>

            <form onSubmit={onsubmission} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-600 p-2 rounded bg-[#0d0d0d]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-600 p-2 rounded bg-[#0d0d0d]"
                required
              />
              <input
                name="plan"
                type="text"
                value={selectedPlan}
                readOnly
                className="w-full border border-gray-600 p-2 rounded bg-[#0d0d0d]/7"
              />
              <label className="p-2">start Date</label>
              <input className="text-amber-100 p-2 border-2 border-gray-700 rounded-2xl" type="date" name="sDate" id="date" />
              <br />
              <label className="p-2">Deliver Date</label>
              <input className="text-amber-100 p-2 border-2 border-gray-700 rounded-2xl" type="date" name="dDate" id="date" />

              <h3>website type: </h3>
              <select name="websiteType" id="" className="w-full border border-gray-700 p-2 rounded bg-gray-900">
                <option value="e-commerce">e-commerce website</option>
                <option value="Business">business website</option>
                <option value="Portfolio">Portfolio website</option>
                <option value="Landing page">Landing page</option>
                <option value="Blog website">Blog website</option>
                <option value="Educational/courses website">Educational / courses website</option>
                <option value="Saas website">Saas Web Application</option>
                <option value="Personal website">Personal website</option>
              </select>
              <textarea
                name="project"
                placeholder="Tell us about your project (a brief about your ideas)"
                className="w-full border border-gray-600 p-2 rounded bg-[#0d0d0d]"
                required
              />

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#FF7F11]/70 text-amber-100 py-2 rounded hover:bg-[#FF7F11] transition"
              >
                Send Request
              </button>

              {submitted && (
                <div className="bg-green-900 text-green-200 p-4 rounded mt-4">
                  <h2 className="font-bold text-lg">✅ Request Sent Successfully</h2>
                  <p>Our team will contact you within 24 hours.</p>
                  <p className="text-sm mt-1">Thank you for choosing our service!</p>
                </div>
              )}
            </form>
              <h3 className="text-[#FF7F11] p-2">*Please Note that we will connect to you via a video Call ASAP for more information</h3>

            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer mt-4 text-gray-400 hover:text-gray-200 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Price;