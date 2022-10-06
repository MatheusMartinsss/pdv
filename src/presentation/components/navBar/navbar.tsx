import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Content from './components/content';
import Header from './components/header';
import { DrawerHeader } from './components/menu-left';
import MenuLeft from './components/menu-left'

type navBar = {
    children: React.ReactNode
}
const drawerWidth: number = 240;
const NavBar: React.FC<navBar> = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />
            <MenuLeft open = {open} handleDrawerClose = {handleDrawerClose} drawerWidth = {drawerWidth} />
            <Content drawerWidth={drawerWidth} open={open}>
                <DrawerHeader />
                {children}
            </Content>
        </Box>
    );
}
export default NavBar