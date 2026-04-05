import "../App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Price() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const openForm = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const onsubmission = () =>{
    setIsOpen(false);
    
  }
  return (
    <section
      id="price"
      className="container min-h-screen min-w-full py-20 bg-[#0d0d0d] "
    >
      <h1 className="text-amber-100 text-4xl font-bold text-center">Price</h1>
      <div className="flex justify-center gap-20 p-20 text-2xl">
        {/* Standard Card */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          class="cards__inner w-120"
        >
          <div class="cards__card card">
            <p class="card__heading">Standard Plan</p>
            <p class="card__price">$100/month</p>
            <ul class="card_bullets flow" role="list">
              <li> 🔸Up to 5 Website Pages</li>
              <li> 🔸Responsive Design (mobile, tablet, desktop)</li>
              <li> 🔸Basic SEO Setup</li>
              <li> 🔸Contact Form</li>
              <li> 🔸Fast Loading Optimization</li>
              <li> 🔸1 Month Free Support</li>
              <li> 🔸2 Revisions</li>
            </ul>
            <button
              onClick={() => openForm("Standard Plan")}
              class="card__cta cta cursor-pointer"
              href="#standardPlan"
            >
              Get Started
            </button>
          </div>
          <div class="overlay cards__inner"></div>
        </motion.div>

        {/* Pro Card */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          class="cards__inner w-120 "
        >
          <div class="cards__card card">
            <p class="card__heading">
              <img
                src="src/assets/4a2e85a3890f1f51c13010ef5fc49369-removebg-preview.png"
                alt=""
                className="w-15 -rotate-z-12  "
              />
              Pro Plan
            </p>
            <p class="card__price">$250/month</p>
            <ul class="card_bullets flow" role="list">
              <li> 🔸Up to 15 pages website</li>
              <li> 🔸Custom UI/UX Design</li>
              <li> 🔸Advanced SEO Optimization</li>
              <li> 🔸CMS Integration (WordPress / Headless CMS)</li>
              <li> 🔸Performance Optimization</li>
              <li> 🔸Analytics Integration</li>
              <li> 🔸3 Months Support</li>
              <li> 🔸Unlimited Revisions</li>
            </ul>
            <button
              onClick={() => openForm("Pro Plan")}
              class="card__cta cta cursor-pointer"
              href="#basic"
            >
              Get Started
            </button>
          </div>
          <div class="overlay cards__inner"></div>
        </motion.div>
      </div>
      {/* Default Services */}
      <div class="cards__inner w-250 mx-115">
        <div class="card1">
          <p class="text-3xl font-bold">By Default our services includes:</p>
          <ul class="card_bullets flow text-2xl" role="list">
            <li> 🔸Responsive design (Mobile, Tablet, Desktop)</li>
            <li> 🔸SEO-friendly structure</li>
            <li> 🔸Fast loading performance</li>
            <li> 🔸Security best practices</li>
            <li> 🔸Cross-browser compatibility</li>
            <li> 🔸Clean and scalable code</li>
            <li> 🔸Deployment support</li>
            <li> 🔸Basic documentation</li>
            <li> 🔸Testing & quality assurance</li>
            <li> 🔸Accessibility improvements</li>
          </ul>
        </div>
        <div class="overlay cards__inner"></div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[400px]">
            <h2 className="text-xl font-bold mb-4">Request a Website</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                value={selectedPlan}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              <textarea
                placeholder="Tell us about your project"
                className="w-full border p-2 rounded"
              />

              <button onClick={onsubmission} className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer">
                Send Request
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray-500 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Price;
