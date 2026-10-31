import Hero from "@/component/maincomp/Hero";
import Features from "@/component/maincomp/Features";
import UpEvent from "@/component/maincomp/UpEvent";
import Gallery from "@/component/maincomp/Gallery";
import NewsLetter from "@/component/maincomp/NewsLetter";

export default function Home() {
  return (
    <>
      {/* Main Content Area */}

      <Hero />
      <div className="flex flex-col w-full">
        {/* Features Section */}
        <Features />

        {/* Recent Upcoming Events Section (Dynamic Query .limit(6)) */}
        <UpEvent />

        {/* Community Gallery Section (Moments of Impact) */}
        <Gallery />

        {/* Newsletter Subscription Section */}
        <NewsLetter />
      </div>
    </>
  );
}
