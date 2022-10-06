import { Box } from '@mui/material'
import React from 'react'
import LogoIMG from './assets/logo-no-background.png'

const Logo: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Box
                component="img"
                sx={{
                    display: 'flex',
                    flexGrow: '1',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={LogoIMG}
            />
        </Box>

    )
}
export default Logo