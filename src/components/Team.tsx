const Team = () => {
  return (
    <section
      id="team"
      className="py-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Team Photo Gallery */}
        <h3 className="text-4xl font-extrabold text-white text-center mb-4 hover:text-yellow-300 transition-colors duration-300">
          Our Team in Action
        </h3>
        <div className="text-yellow-300 text-lg font-semibold text-center mb-6">300+ volunteers across California</div>
        <div className="grid grid-cols-2 gap-14 w-full h-auto">
          {["atwork1.jpeg", "IMG_0778.jpg", "atwork.jpeg","atwork3.jpeg"].map((src, idx) => (
            <div
              key={src}
              className="relative group overflow-hidden rounded-2xl flex items-center justify-center w-full"
            >
              <img
                src={src}
                alt={
                  [
                    "Team Meeting",
                    "Community Outreach",
                    "Planning Sessions",
                    "Team Building"
                  ][idx]
                }
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;