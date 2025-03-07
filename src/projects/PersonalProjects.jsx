import { Grid, Box, Stack } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import quizzGif from "../assets/gifs/quizz.gif";
import dozaiGif from "../assets/gifs/dozai.gif";
import cafiendGif from "../assets/gifs/cafiend.gif";
import empGif from "../assets/gifs/emp.gif";
import guessGif from "../assets/gifs/guess.gif";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";

export const PersonalProjects = () => {
  const arr = [
    {
      img: guessGif,
      title: "Geo guesser",
      description:
        "app contains georgian locations only. try guess location",
      tools: [
        <FaReact />,
        <TbBrandCSharp />,
        <AiOutlineDotNet />,
        <BiLogoPostgresql />,
      ],
      github: "https://github.com/Jekson365/guesser_api",
      live: "http://gs.jergemlidze.com.ge",
    },
    {
      img: empGif,
      title: "Employee Managment",
      description: "application which helps manage employees and their tasks",
      tools: [
        <FaReact />,
        <TbBrandCSharp />,
        <AiOutlineDotNet />,
        <BiLogoPostgresql />,
      ],
      github: "https://github.com/Jekson365/EmpManagment",
      live: "https://foo.jergemlidze.com.ge",
    },
    {
      img: quizzGif,
      title: "Georgian Quizz",
      description: "questions tests how much georgian is in you",
      tools: [<DiRuby />, <FaReact />, <BiLogoPostgresql />],
      github: "https://github.com/Jekson365/guess_api",
      live: "http://guess.testpuzzle.ge/",
    },
    {
      img: dozaiGif,
      title: "Dozai",
      description: "Design is Taken from webflow.com.",
      tools: [<FaReact />],
      github: "https://github.com/Jekson365/dozai",
      live: "http://dozai.jergemlidze.com.ge",
    },
    {
      img: cafiendGif,
      title: "Cafiend",
      description: "Design is Taken from webflow.com.",
      tools: [<FaReact />],
      github: "https://github.com/Jekson365/cafiend",
      live: "http://cafiend.jergemlidze.com.ge/",
    },
  ];
  return (
    <>
      <Box mt={4}></Box>
      <div className={"headline"}>Projects</div>
      <div className={"underline c-gray"}>My personal Projects</div>
      <Grid container spacing={5} mt={2}>
        {arr.map((e) => {
          return (
            <Grid xs={6} item>
              <Stack
                data-aos={"fade-up"}
                direction={"column"}
                alignItems={"flex-start"}
                minHeight={"450px"}
                maxHeight={"600px"}
                className={"project-item"}
              >
                <div
                  className={"project-item-image"}
                  style={{ backgroundImage: `url('${e.img}')`, height: "100%" }}
                ></div>
                <Stack
                  direction={"column"}
                  justifyContent={"space-between"}
                  style={{
                    height: "200px",
                  }}
                >
                  <Stack gap={"5px"} mt={1}>
                    <h4 className={"c-orange"} style={{ fontSize: "25px" }}>
                      {e.title}
                    </h4>
                    <div className={"c-gray"} style={{ fontSize: "20px" }}>
                      {e.description}
                    </div>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} mt={2}>
                    {e.tools.map((t) => {
                      return (
                        <>
                          <div className={"own-project-icon"}>{t}</div>
                        </>
                      );
                    })}
                  </Stack>
                  <Stack mt={1} direction={"row"} gap={"5px"}>
                    <button className={"button-min-main"}>
                      <a href={e.live}>Live</a>
                    </button>
                    <button className={"button-min-main"}>
                      <a href={e.github}>Source</a>
                    </button>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
