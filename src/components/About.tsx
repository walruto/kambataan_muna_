

const About = () => {


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
        <p className="text-xl text-gray-700">
          Social justice nonprofit organization with a mission to uplift and empower the underserved youth of the Philippines by providing them with the resources and support necessary to overcome the barriers of poverty and injustice, recognizing education as a key tool to breaking the cycle of poverty
        </p>
      </div>
      {/* Statistics */}
      <div className="max-w-3xl mx-auto px-4 mt-20">
        <div className="bg-gray-900 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2,500+</div>
              <div className="text-gray-300">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">150+</div>
              <div className="text-gray-300">Programs Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;