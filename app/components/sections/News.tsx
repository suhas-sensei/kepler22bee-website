import { Newspaper } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  image: string;
  category?: string;
}

const NewsCard = ({ title, image, category = "NEWS" }: NewsCardProps) => (
  <div
    className="group rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl backdrop-blur-lg"
    style={{
      background:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
      boxShadow:
        "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0px 0 rgba(255, 255, 255, 0.2)",
    }}
  >
    <div className="flex h-32 relative z-10">
      {/* Left side - Content */}
      <div className="flex-1 p-6 pr-4 flex flex-col justify-between">
        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight group-hover:text-white/90 transition-colors drop-shadow-lg">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-white/70 drop-shadow-sm" />
          <span className="text-white/60 text-[0.6rem] sm:text-xs md:text-sm font-semibold tracking-wider uppercase drop-shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-r-xl">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
    </div>
  </div>
);

// Demo component showing the card in action
const App = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="max-w-2xl space-y-6   ">
        <NewsCard
          title="Kepler22b Studios take on FOCG"
          image="image2.png"
          category="BLOG"
        />

        <NewsCard
          title="When to expect Blockrooms alpha release?"
          image="image5.jpg"
          category="GAME"
        />

        <NewsCard
          title="Roadblocks with 3D onchain games"
          image="image3.png"
          category="TECHNOLOGY"
        />

        <NewsCard
          title="Design or Infra? Choosing what's best for the market"
          image="image4.jpeg"
          category="DESIGN"
        />
      </div>
    </div>
  );
};

export default App;
