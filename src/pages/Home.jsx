import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Slider from "@/components/Slider";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import StudyResources from "@/components/StudyResources";
import ScratchMe from "@/components/ScratchMe";
import ContactForm from "@/components/ContactForm";

import { BlurFade } from "@/components/ui/magicui/blur-fade";
const Home = () => {
  return (
    <div className="pb-20">
      <BlurFade duration={0.4}>
        <Header />
        <Intro />
        <AboutMe />
        <Slider />
        <Projects />
        <StudyResources />
        <ScratchMe />
        <ContactForm />
      </BlurFade>
    </div>
  );
};

export default Home;
