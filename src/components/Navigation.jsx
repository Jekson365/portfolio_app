import {Stack} from "@mui/material";

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
                    <h2 className={'c-orange main-font'}>Jeko</h2>
                    <Stack
                        flexDirection={'row'}
                        gap={'35px'}
                    >
                        <div className={'c-orange main-font nav-item'}
                        >+995 557 98 37 61
                        </div>
                        <div className={'c-orange main-font nav-item'}>jeko.erg@gmail.com</div>
                    </Stack>
                </Stack>
                {/*<div className={'icon'}></div>*/}
            </Stack>
        </>
    )
}
