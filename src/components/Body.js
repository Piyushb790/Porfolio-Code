import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Personalinfo from "./Personalinfo";
import Skills from "./Skills";
const Body = () => {
  return (
    <div className="px-5 md:px-0">
      <Home />
      <About />
      <Skills />
      <Personalinfo />
      <Contact />
    </div>
  );
};
export default Body;
