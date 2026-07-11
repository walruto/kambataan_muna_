import { Award } from 'lucide-react';

const Volunteering = () => {


  return (
    <section id="volunteering" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...existing volunteering content... */}
      </div>

      {/* Join Our Impact Story CTA (copied from Impact.tsx) */}
      <div id="join-impact-story" className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 text-center text-white shadow-2xl border border-red-500/30 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 mt-12 max-w-4xl mx-auto">
        <div className="bg-yellow-400/20 rounded-full p-6 w-fit mx-auto mb-8 hover:bg-yellow-400/30 transition-colors duration-300">
          <Award className="w-16 h-16 text-yellow-400 hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-4xl font-bold mb-6 hover:text-yellow-300 transition-colors duration-300">Join Our Impact Story</h3>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
          Every contribution, volunteer hour, and community connection helps us create lasting positive change for Filipino families.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1krLL-L-xPC8Br36n9W2BAo0EK-v2zjKot_vnFCbKver1Dw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl w-full md:w-auto">
              Start a Chapter
            </button>
          </a>
          <a
            href="https://www.remind.com/join/kabataanm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl w-full md:w-auto">
              Volunteer
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;