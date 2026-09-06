import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";
import Experience from "./components/experience";
import MoreAbout from "./More-About";
function Home() {
  return (
    <>
      <Hero />
      <Project />
      <Skills />
      <Experience />
      <MoreAbout />
    </>
  );
}

export default Home;