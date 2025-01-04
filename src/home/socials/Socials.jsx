import {Stack} from "@mui/material";
import {LinkedIn} from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Socials = () => {
    const arr = [
        {
            icon: <LinkedIn/>,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jeko-ergemlidze-199730225/',
            downloadable: false,
        },
        {
            icon: <ArticleIcon/>,
            name: 'Resume',
            link: '../../../jeko_ergemlidze.pdf',
            downloadable: true,

        },
        {
            icon: <GitHubIcon/>,
            name: 'GitHub',
            link: 'https://github.com/Jekson365',
            downloadable: false
        }
    ]
    return (
        <>
            <Stack
                direction={'column'}
                gap={'10px'}
                className={'socials'}
            >
                {arr.map((e) => {
                    return (
                        <>

                            <a href={e.link}>
                                <div className={'soc-icon'}>
                                    <Stack direction={'row'} alignItems={'center'} gap={'10px'}
                                    >
                                        <div>
                                            {e.icon}
                                        </div>
                                        <div className={'c-white soc-font'}>
                                            {e.name}
                                        </div>
                                    </Stack>
                                </div>
                            </a>
                        </>
                    )
                })}
            </Stack>
        </>
    )
}