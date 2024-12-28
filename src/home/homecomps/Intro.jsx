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
                        data-aos-duration="1500"
                        data-aos="fade-up"
                        direction='column'
                        gap={'10px'}
                    >
                        <h1><span>Hi! </span>My name is Jeko</h1>
                        <div className={'main-desc'}>
                            Friendly,Motivated and passionate web developer with 3 years of experience in full-
                            stack development. Proficient in front-end and back-end
                            development technologies. Thrilled to embrace new challenges
                            and continuously expand my skills to stay at the forefront of technology.
                        </div>
                    </Stack>
                </div>
                <img
                    width={'500px'}
                    data-aos-duration="1500"
                    data-aos="fade-down"
                    className={'intro-image'}
                    src={PersonImage}/>
            </Stack>
        </>
    )
}
