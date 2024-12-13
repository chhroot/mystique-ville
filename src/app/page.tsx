import HeroSection from "@/components/HeroSection/HeroSection";
import RestaurantSection from "@/components/RestaurantSection/RestaurantSection";
import RoomSection from "@/components/RoomSection/RoomSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Trekking from "@/components/Trekking/Trekking";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Trekking />
      <RoomSection />
      <RestaurantSection />
      <Testimonials />
    </>
  );
}
