import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

export class Navbar extends React.Component {
    render() {
        return (
            <AppBar position="sticky">
              <Toolbar>
                <Button color="inherit">Infames</Button><Button color="inherit">Artistas</Button><Button color="inherit">Discos</Button><Button color="inherit">Videos</Button><Button color="inherit">Tienda</Button>
              </Toolbar>
            </AppBar>
        );
    }
}