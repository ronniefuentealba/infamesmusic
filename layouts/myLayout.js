import React, { useState } from "react";
import Head from "next/head";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header, SocialBar, Subscribe, SiteMap} from "./../components";
import socialButtons from "./../config/rrss"
import "./layout.scss";

export default function SiteLayout({ children }) {

  const [counter, setCounter] = useState(0);
  const appTitle = `INFAMES Music`
  const year = new Date().getFullYear()

  return (
      <div className="Layout">
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta charSet="utf-8" />
      
          <meta name="description" content="Sello discográfico independiente"></meta>
          <meta name="keywords" content="delanueve, rap chileno, rap sureño, la tarea, kanitrou, malcriado de zousa, jotaose lagos, perro mordaz, zambakutral, cato, predicto, la mala compañia, 4to Karamazov, infames" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" key="twcard"/>
          <meta name="twitter:site" content="@infameslabel" key="twsite"/>
          <meta name="twitter:creator" content="@leovp17" key="twhandle"/>
          <meta name="twitter:title" content="INFAMES MUSIC –– Sello discográfico independiente" key="twtitle" />
          <meta name="twitter:description" content="Sello discográfico independiente" key="twdesc" />
          <meta name="twitter:image" content="http://infames.cl/assets/img/tw.jpg" key="twimage" />
          <meta name="twitter:image:width" content="1024" key="twimagew" />
          <meta name="twitter:image:height" content="512" key="twimageh" />

          {/* Open Graph */}
          <meta property="og:image" content="http://infames.cl/assets/img/fb.jpg" key="ogimage" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          <meta property="og:locale" content="es_CL" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="INFAMES Music –– Sello discográfico independiente" key="ogtitle"/>
          <meta property="og:description" content="Sello discográfico independiente" key="ogdesc" />
          <meta property="og:url" content="https://infames.cl/" key="ogurl" />
          <meta property="og:site_name" content="INFAMES Music" key="ogsitename" />
          
          <link rel="canonical" href="https://infames.cl/" />

          <title>INFAMES Music - Sello discográfico independiente</title>
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet"/>
        </Head>
          <CssBaseline />

        <Header appTitle={appTitle} />

        {/* <p>      
          <button onClick={() => setCounter(counter + 1)}>
            Clicked {counter} Times
          </button>
        </p> */}

        <div className="Content">{children}</div>
        <footer className="footer">
          <SocialBar socialLinks={socialButtons} />
          <Subscribe />
          <SiteMap/>
          <p className={'manager'} style={{clear:'both'}}>Representación fuera del barrio a: <a href='mailto:ronnie.fuentealba@infames.cl'>ronnie.fuentealba@infames.cl</a></p>
        </footer>
      </div>
  )
}