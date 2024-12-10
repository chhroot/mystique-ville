import { FooterSection } from "@/components/Footer/FooterSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import RoomSection from "@/components/RoomSection/RoomSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import TopBar from "@/components/TopBar/TopBar";
import Trekking from "@/components/Trekking/Trekking";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function Home() {
  return (
    <>
      <TopBar />
      <HeroSection />
      <ServiceSection />
      <Trekking />
      <RoomSection />
      <Testimonials />
      <FooterSection />
    </>
  );
}
