import {Stack} from "@mui/material";
import PersonImage from '../../assets/Light bulb-cuate.svg'

export const Intro = () => {
    return (
        <>
            <Stack
                direction='row'
                width={'100%'}
                justifyContent={'space-between'}
                minHeight={'60vh'}
                gap={'100px'}
                alignItems={'center'}
            >
                <div className={'intro-desc'}>
                    <Stack
                        direction='column'
                        gap={'10px'}
                    >
                        <h1><span>Hi! </span>My name is Gia</h1>
                        <div className={'main-desc'}>
                            Friendly,Motivated and passionate web developer with 3 years of experience in full-
                            stack development. Proficient in front-end development with React and back-end
                            development using Ruby on Rails and other techs. Thrilled to embrace new challenges
                            and continuously expand my skills to stay at the forefront of technology.
                        </div>
                    </Stack>
                </div>
                <img
                    width={'500px'}
                    className={'intro-image'}
                    src={PersonImage}/>
            </Stack>
        </>
    )
}