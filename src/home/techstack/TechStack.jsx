import {Box, Grid} from '@mui/material'
import {useEffect} from "react";

export const TechStack = () => {
    const stacks = [
        'PHP', 'Laravel', 'React', 'Python', 'Javascript', 'HTML', 'CSS', 'Ruby', 'Ruby on rails', 'CI/CD',
        'Git', 'SQL', 'Postgresql', 'Mysql'
    ]
    return (
        <>
            <Box mt={3}></Box>
            <div className={'headline'}>Tech Stack</div>
            <div className={'underline c-secondary'}>Technologies that I mastered</div>
            <Box mt={6}></Box>
            <Grid container spacing={2}>
                {stacks.map((e) => {
                    return (
                        <>
                            <Grid item xs={2}>
                                <div className={'tech-item'}>
                                    {e}
                                </div>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}