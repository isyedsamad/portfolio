import Image from "next/image";
import Header from "./Component/UI/Header";
import HeroSection from "./Component/UI/HeroSection";
import PageProgress from "./Component/UI/PageProgress";
import AboutUs from "./Component/UI/AboutUs";
import Marquee from "./Component/UI/Marquee";

export default function Home() {
  return (
    <>
      {/* <PageProgress /> */}
      <Header />
      <HeroSection />
      <Marquee />
      <AboutUs />
    </>
  );
}
