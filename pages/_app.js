import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import SiteTemplate from './../layouts/siteTemplate'
import {InfamesProvider} from './../context/infamesProvider';

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
            <InfamesProvider>
      <ParallaxProvider>
        <SiteTemplate>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </SiteTemplate>
      </ParallaxProvider>
            </InfamesProvider>
  )
}