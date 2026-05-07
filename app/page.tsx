import { HeroSection } from "@/components/top/HeroSection";
import { ConceptSection } from "@/components/top/ConceptSection";
import { MessageSection } from "@/components/top/MessageSection";
import { FeaturedConcertSection } from "@/components/top/FeaturedConcertSection";
import { FollowSection } from "@/components/top/FollowSection";
import { NewsSection } from "@/components/top/NewsSection";
import { MembersSection } from "@/components/top/MembersSection";
import { ContactSection } from "@/components/top/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <MessageSection />
      <FeaturedConcertSection />
      <FollowSection />
      <NewsSection />
      <MembersSection />
      <ContactSection />
    </>
  );
}
