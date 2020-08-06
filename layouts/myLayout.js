import React, { useState } from "react";
import * as require from 'requirejs';
import Head from "next/head";
import {Header, SocialBar, Subscribe} from "./../components";
import socialButtons from "./../config/rrss"
import "./layout.scss";

export default function SiteLayout({ children }) {
  const [counter, setCounter] = useState(0);
  const appTitle = `INFAMES Music`

  return (
    <div className="Layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

        require.config({
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    'facebook': 'https://connect.facebook.net/en_US/sdk.js'
  }
})
require(['fb']);

      </Head>

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
      </footer>
    </div>
  )
}