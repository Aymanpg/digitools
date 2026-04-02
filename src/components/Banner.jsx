import bannerImg from "../assets/banner.png";
import PlayImg from "../assets/Play.png";

export default function Banner() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          
          <span className="bg-purple-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-black">
            Supercharge Your<br />Digital Workflow
          </h1>

          <p className="text-gray-500 mb-6">
            Access premium AI tools, design assets, templates, and productivity software — 
            all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex gap-4">
            
            {/* Explore Button */}
            <button className="bg-gradient-to-b from-[#4F39F6] to-[#2E2190] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Explore Products
            </button>

            {/* Watch Demo Button (Updated) */}
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 flex items-center gap-2 transition">
              <img 
                src={PlayImg} 
                alt="play" 
                className="w-5 h-5 object-contain"
              />
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={bannerImg} 
            alt="banner" 
            className="w-[500px] h-[590px] rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}