"use client"

import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" color='default'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PokdedexApp
                    </Typography>

                    <div className='nav-links'>
                        <Link href="/">Pokedex</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;