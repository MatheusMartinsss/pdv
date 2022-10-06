import React from 'react'
import { styled} from '@mui/material/styles';

type TContent = {
    drawerWidth: number
    open: boolean
    children: React.ReactNode
}

const Content: React.FC<TContent> = ({ drawerWidth, open, children }) => {
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));
    return (
        <Main open={open}>
            {children}
        </Main>
    )
}
export default Content