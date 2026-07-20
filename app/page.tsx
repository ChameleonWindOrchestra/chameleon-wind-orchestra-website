import { HeroSection } from "@/components/top/HeroSection";
import { FeaturedConcertSection } from "@/components/top/FeaturedConcertSection";
import { FollowSection } from "@/components/top/FollowSection";
import { NewsSection } from "@/components/top/NewsSection";
import { MembersSection } from "@/components/top/MembersSection";
import { ContactSection } from "@/components/top/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedConcertSection />
      <FollowSection />
      <NewsSection />
      <MembersSection />
      <ContactSection />
    </>
  );
}
