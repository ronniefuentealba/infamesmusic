import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider, useTheme } from "react-jss";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  
  const theme = {
    background: "#fff",
    color: "#24292e"
  };

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </ParallaxProvider>
  )
}