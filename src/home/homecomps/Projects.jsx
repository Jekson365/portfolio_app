import {Box, Stack} from "@mui/material";
import Img1 from '../../assets/projects/profesto.png'
import Img2 from '../../assets/projects/storera.png'
import Img4 from '../../assets/projects/vabaco.png'
import Img5 from '../../assets/projects/megapus.png'

export const Projects = () => {
    const experiences = [
        {
            name: 'Vabaco',
            position: 'Back-end Developer',
            exps: [
                'Master the Model-View-Controller design pattern, organizing application\n' +
                'logic effectively.',
                'Build and consume RESTful APIs, including concepts like routing,\n' +
                'controllers, and serialization.',
                'Learn SQL and how to interact with databases like PostgreSQL and\n' +
                'MySQL.',
                'Use testing tools like RSpec for test-driven development (TDD)',
                'Implement user authentication and role-based authorization using Devise,\n' +
                'JWT, or similar gems.',
                'Gain experience with background processing using Sidekiq, Delayed Job.'
            ]
        },
        {
            name: 'Storera (B2C)',
            position: 'Front-end Developer',
            exps: [
                'Master structuring web pages with HTML and styling them using CSS,\n' +
                'including concepts like Flexbox, Grid, and responsive design.',
                'Learn tools like SASS/SCSS for more efficient and organized styling.',
                'Understand how to manage complex application state using tools like\n' +
                'Redux or Context API in React.',
                'Understand how to create web layouts that adapt to various screen sizes\n' +
                'using media queries and mobile-first design principles.'
            ]
        },
        {
            name: 'Mega Plus',
            position: 'IT support',
            exps: [
                'gaining strong problem-solving skills and technical expertise.',
                'Gain experience in managing and configuring operating systems\n' +
                '(Windows, macOS, Linux), user accounts, and permissions',
                'Learn how to use remote desktop and support tools to assist users from\n' +
                'different locations.',
                'Gain experience in installing, configuring, and troubleshooting common\n' +
                'software applications.'
            ]
        },
    ]
    const projects = [
        {
            img: Img1,
            background: false,
            width: "150px",
            height: "35px",
            link: "https://profesto.ge/"
        },
        {
            img: Img2,
            background: true,
            width: "120px",
            height: "40px",
            link: 'https://www.storera.ge/ka'
        },
        {
            img: Img4,
            background: false,
            width: "140px",
            height: "30px",
            link: 'https://vabaco.ge/language/en/home-page/'
        },
        {
            img: Img5,
            background: false,
            width: "140px",
            height: "40px",
            link: 'https://megaplus.ge/'
        },
    ]
    return (
        <>
            <Stack
                direction={'column'}
                alignItems={'flex-start'}
                gap={'10px'}
            >
                <div className={'headline'}>Experience</div>
                <div className={'underline c-secondary'}>Companies that I collaborated in</div>
                <Stack
                    gap={'100px'}
                    width={'100%'}
                    mt={3}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {projects.map((project) => {
                        return (
                            <>
                                <a href={project.link}>
                                    <img
                                        className={`${project.background ? 'has-back' : null} hover-effect`}
                                        width={project.width}
                                        height={project.height}
                                        src={project.img}/>
                                </a>
                            </>
                        )
                    })}
                </Stack>
                <Box mt={6}></Box>
                <div className={'underline'}>acquired experience</div>
                <Stack direction={'column'} gap={'20px'}>
                    {experiences.map((experience) => {
                        return (
                            <>
                                <Stack
                                    direction={'row'}
                                    gap={'10px'}
                                >
                                    <h4>{experience.name} :</h4>
                                    <div>{experience.position}</div>
                                </Stack>
                                {experience.exps.map((e) => {
                                    return (
                                        <>
                                            <Stack
                                                ml={3}
                                                direction={'row'}
                                                alignItems={'center'}
                                                gap={'15px'}
                                            >
                                                <div className={'bullet'}></div>
                                                <div className={'line'}>{e}</div>
                                            </Stack>
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}
                </Stack>
            </Stack>
        </>
    )
}