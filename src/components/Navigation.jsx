import {Box, Stack} from "@mui/material";
import PersonImage from '../assets/Light bulb-cuate.svg'

export const Navigation = () => {
    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    gap={'40px'}
                >
                    <h2 className={'c-orange main-font'}>Gia</h2>
                    <Stack
                        flexDirection={'row'}
                        gap={'35px'}
                    >
                        <div className={'c-orange main-font nav-item'}>Experience</div>
                        <div className={'c-orange main-font nav-item'}>Projects</div>
                        <div className={'c-orange main-font nav-item'}>Tech Stack</div>
                    </Stack>
                </Stack>
                <div className={'icon'}></div>
            </Stack>
        </>
    )
}