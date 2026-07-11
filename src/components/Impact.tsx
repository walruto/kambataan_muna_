import { BookOpen, Users } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    { icon: Users, number: "1,300+", label: "Students Impacted", color: "text-yellow-400", bg: "bg-yellow-400/20" },
    { icon: BookOpen, number: "3,200+", label: "School Supplies Provided", color: "text-blue-400", bg: "bg-blue-400/20" },
    { icon: null, number: "2,160+", label: "Meals Provided", color: "text-red-400", bg: "bg-red-400/20", img: "/lumpia.png" },
    { icon: null, number: "1,300+", label: "Slippers Donated", color: "text-yellow-500", bg: "bg-yellow-500/20", img: "/slippers.jpeg" },
  ];

  const achievements = [
    {
      title: "David Elementary School",
      description: "Helped <span class=\"font-bold\">980+</span> students get <span class=\"font-bold\">1600+</span> school supplies, <span class=\"font-bold\">980+</span> pairs of slippers, and a feeding program as well <span class=\"font-bold\">50K</span> Philippine pesos into their flood and typhoon relief fund.",
      image: "/david_elementary.jpeg",
      year: "2025",
      impact: "<span class=\"font-bold\">980+</span> students"
    },
    {
      title: "Teresa Elementary School",
      description: "Helped provide students with <span class=\"font-bold\">school supplies</span> and <span class=\"font-bold\">slippers</span>.",
      image: "/att.RphFG_h8K5D7mil84wal0LM1xI-JlZAkGMIq8bvdMRg.JPG",
      year: "2025",
      impact: "<span class=\"font-bold\">340+</span> students"
    },
    {
      title: "Batang-Batang Proper Elementary School ",
      description: "We’re beyond honored to have shared joy with the <span class=\"font-bold\">135</span> amazing students of Batang-Batang Proper Elementary School through <span class=\"font-bold\">950</span> school supplies items, <span class=\"font-bold\">135</span> pairs of slippers, and a feeding program.",
      image: "/514731525_17876759391362172_3996493482058914439_n.jpg",
      year: "2025",
      impact: "<span class=\"font-bold\">100+</span> students"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 hover:scale-105 transition-transform duration-300">
            Making a Difference
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 hover:text-yellow-300 transition-colors duration-300 cursor-default">Our Impact</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Measuring our success through the positive changes we've brought to Filipino youth across the region.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 justify-center">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 transform hover:scale-105 hover:-translate-y-2 group">
                <div className={`${stat.bg} rounded-2xl p-4 w-fit mx-auto mb-6 group-hover:scale-125 transition-transform duration-300`}>
                  {stat.icon ? (
                    <stat.icon className={`w-12 h-12 ${stat.color} group-hover:animate-bounce`} />
                  ) : (
                    stat.label === 'Slippers Donated' ? (
                      <span className="inline-block w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mt-2">
                        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                          <rect x="7" y="20" width="18" height="5" rx="2.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
                          <path d="M10 20 Q16 10 22 20" stroke="#F59E0B" strokeWidth="2" fill="none" />
                          <ellipse cx="11" cy="22.5" rx="2" ry="1" fill="#fff" stroke="#F59E0B" strokeWidth="1" />
                          <ellipse cx="21" cy="22.5" rx="2" ry="1" fill="#fff" stroke="#F59E0B" strokeWidth="1" />
                        </svg>
                      </span>
                    ) : (
                      <img src={stat.img} alt={stat.label} className="w-16 h-16 object-contain mx-auto mt-2" />
                    )
                  )}
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-blue-200 font-semibold group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 hover:text-yellow-300 transition-colors duration-300">Recent Achievements</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-4 transform">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {achievement.year}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:scale-110 transition-transform duration-300">
                    <span dangerouslySetInnerHTML={{ __html: achievement.impact || '' }} />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{achievement.title}</h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: achievement.description }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 hover:text-yellow-300 transition-colors duration-300">Impact in Pictures</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/514665707_17876759361362172_3815011098568818000_n.jpg",
              "/514731525_17876759391362172_3996493482058914439_n.jpg",
              "/515266476_17876759442362172_2179501875300654299_n.jpg",
              "/515304661_17876759328362172_5849118144692824853_n.jpg",
              "/515583763_17876759418362172_4345575558701282870_n.jpg",
              "/515859098_17876759430362172_8351423006579517962_n.jpg",
              "/515902578_17876759382362172_2743566175393380686_n.jpg",
              "/516037454_17876759346362172_4599886073729098940_n.jpg",
              "/david_gallery_1.jpeg",
              "/david_gallery_2.jpg",
              "/david_gallery_3.jpg",
              "/david_elementary_4.jpeg",

            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={image}
                  alt={`Impact ${index + 1}`}
                  className="w-full h-56 md:h-64 xl:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 aspect-[16/7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

  {/* ...removed Join Our Impact Story CTA... */}
      </div>
    </section>
  );
};

export default Impact;