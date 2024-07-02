import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
            </Typography>

            <Button > <Link to={'/r'}
            style={{textDecoration:"none", color:"white"}}
            >Registion</Link> </Button>

            <Button ><Link to={"/t"}
            style={{textDecoration:"none", color:"white"}}
            >Table</Link> </Button>
            <Button color="inherit"> First </Button>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
