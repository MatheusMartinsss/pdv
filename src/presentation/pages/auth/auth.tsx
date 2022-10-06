import React from 'react'
import { Box, Paper, TextField, Divider, Button, Typography } from '@mui/material'
import Logo from '../../components/logo/logo'
const Auth: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems='center'
            minHeight="100vh"
        >
            <Box
                component={Paper}
                elevation={4}
                gap={2}
                sx={{
                    display: 'flex',
                    justifyContent: "center",

                    flexDirection: 'column',
                    maxWidth: '400px',
                    padding: '40px',
                    flexGrow: '1'
                }}
            >
                <Logo />
                <Divider >
                    <Typography variant='h6'>Bem-Vindo</Typography>
                </Divider>
                <TextField fullWidth label='Usuário'></TextField>
                <TextField fullWidth label='Senha' type='password'></TextField>
                <Button color='secondary' fullWidth variant='contained'>Entrar</Button>
            </Box>
        </Box>
    )
}
export default Auth