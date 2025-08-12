// ...existing code...
import { Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {






  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get involved or need assistance? We're here to help you connect with our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking to volunteer, participate in our programs, or simply learn more about 
                our community, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">kabataanmuna1@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">510-945-9275</div>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/kabataan_muna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-3 rounded-lg text-white hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@kabataan.muna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-3 rounded-lg text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
                  aria-label="TikTok"
                >
                  {/* TikTok SVG icon */}
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 11.7c-2.1 0-4-0.7-5.6-1.9v9.1c0 4.2-3.4 7.6-7.6 7.6s-7.6-3.4-7.6-7.6 3.4-7.6 7.6-7.6c0.3 0 0.6 0 0.9 0.1v3.2c-0.3 0-0.6-0.1-0.9-0.1-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4v-17.1h3.2c0 2.6 2.1 4.7 4.7 4.7h1.5v3.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;