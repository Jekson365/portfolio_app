import {Intro} from "./homecomps/Intro.jsx";
import {Projects} from "./homecomps/Projects.jsx";
import {TechStack} from "./techstack/TechStack.jsx";

function Home() {
  return (
    <>
        <Intro/>
        <Projects/>
        <TechStack/>
    </>
  )
}

export default Home