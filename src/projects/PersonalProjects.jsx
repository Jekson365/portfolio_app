import {Grid, Box, Stack} from "@mui/material";
import {FaPython} from "react-icons/fa";
import {DiRuby} from "react-icons/di";
import {FaReact} from "react-icons/fa";
import quizzGif from '../assets/gifs/quizz.gif';
import dozaiGif from '../assets/gifs/dozai.gif';


export const PersonalProjects = () => {
    const arr = [
        {
            img: quizzGif,
            title: "Georgian Quizz",
            description: 'questions tests how much georgian is in you',
            tools: [
                <DiRuby/>,
                <FaReact/>
            ],
            github: 'https://github.com/Jekson365/guess_api',
            live:'http://guess.testpuzzle.ge/'
        },
        {
            img: dozaiGif,
            title: "Dozai",
            description: 'Design is Take from webflow.com.',
            tools: [
                <FaReact/>
            ],
            github: 'https://github.com/Jekson365/dozai',
            live:'http://dozai.jergemlidze.com.ge'
        },
    ]
    return (
        <>
            <Box mt={4}></Box>
            <div className={'headline'}>Projects</div>
            <div className={'underline c-gray'}>My personal Projects</div>
            <Grid container spacing={5} mt={2}>
                {arr.map((e) => {
                    return (
                        <Grid xs={4} item>
                            <Stack
                                direction={'column'}
                                alignItems={'flex-start'}
                                minHeight={'350px'}
                                maxHeight={'600px'}
                                className={'project-item'}>
                                <div className={'project-item-image'}
                                     style={{backgroundImage: `url('${e.img}')`, height: "100%"}}
                                >
                                </div>
                                <Stack
                                    direction={'column'}
                                    justifyContent={'space-between'}
                                    style={{
                                        height:"200px",
                                    }}
                                >
                                    <Stack gap={'5px'} mt={1}>
                                        <h4 className={'c-orange'}>{e.title}</h4>
                                        <div className={'c-gray'}>{e.description}</div>
                                    </Stack>
                                    <Stack
                                        direction={'row'}
                                        gap={'5px'}
                                        mt={2}
                                    >
                                        {e.tools.map((t) => {
                                            return (
                                                <>
                                                    <div
                                                        className={"own-project-icon"}
                                                    >
                                                        {t}
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </Stack>
                                    <Stack
                                        mt={1}
                                        direction={'row'}
                                        gap={'5px'}
                                    >
                                        <button className={'button-min-main'}>
                                            <a href={e.live}>Live</a>
                                        </button>
                                        <button className={'button-min-main'}>
                                            <a href={e.github}>Source</a>
                                        </button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}