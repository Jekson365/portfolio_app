import {Intro} from "./homecomps/Intro.jsx";
import {Projects} from "./homecomps/Projects.jsx";
import {TechStack} from "./techstack/TechStack.jsx";
import {PersonalProjects} from "../projects/PersonalProjects.jsx";
import {Cover} from "./cover/Cover.jsx";

function Home() {
  return (
    <>
        <Intro/>
        <Projects/>
        <TechStack/>
        <PersonalProjects/>
    </>
  )
}

export default Home