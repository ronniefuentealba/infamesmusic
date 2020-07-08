import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Rrss} from '../Rrss';
import './Footer.scss';

const Footer = Props => {
  return (
    <React.Fragment>
      <Grid className="footer-container" item xs={12}>
        <footer>
          <Grid container justify="center">
            <Grid item xs={6}>
              <Rrss />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={6}>
              <p>
                Copyright © 2019 Infames Music. Todos los derechos reservados
              </p>
              <p>
                <a href="mailto:contacto@infames.cl">contacto@infames.cl</a>
              </p>
            </Grid>
          </Grid>
        </footer>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
