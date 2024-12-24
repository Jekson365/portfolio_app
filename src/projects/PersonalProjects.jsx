import {Grid, Box, Stack} from "@mui/material";
import {FaPython} from "react-icons/fa";
import {DiRuby} from "react-icons/di";
import {FaReact} from "react-icons/fa";


export const PersonalProjects = () => {
    const arr = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
            title: "Georgian Quizz",
            description: 'questions tests how much georgian is in you',
            tools: [
                <DiRuby/>,
                <FaReact/>
            ]
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
            title: 'Ecommerce Website',
            description: 'fully functional websites for online shop',
            tools: [
                <DiRuby/>,
                <FaReact/>
            ]
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
            title: 'QR code generator',
            description: 'App gives you opportunity to create qr code and concatenate it with your image',
            tools: [
                <DiRuby/>,
                <FaReact/>,
                <FaPython/>
            ]
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
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}