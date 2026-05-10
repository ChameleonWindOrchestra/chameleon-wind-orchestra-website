import { HeroSection } from "@/components/top/HeroSection";
import { AboutUsSection } from "@/components/top/AboutUsSection";
import { FeaturedConcertSection } from "@/components/top/FeaturedConcertSection";
import { FollowSection } from "@/components/top/FollowSection";
import { NewsSection } from "@/components/top/NewsSection";
import { MembersSection } from "@/components/top/MembersSection";
import { ContactSection } from "@/components/top/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <FeaturedConcertSection />
      <FollowSection />
      <NewsSection />
      <MembersSection />
      <ContactSection />
    </>
  );
}
