import React from 'react';
import useSWR from 'swr';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import SiteLayout from "../layouts/MyLayout";
import {IgFeed, Infames, IgPics} from "./../components";
import {infames} from "../config";

const fetcher = url => fetch(url).then(res => res.json());

const BasicIgApiURl = "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type, username,media_count,permalink,thumbnail,timestamp&access_token="+process.env.INSTRAGRAM_API_KEY;

export default function Index (props) {
  const { data, error } = useSWR(BasicIgApiURl, fetcher, { initialData: props.posts })
  
  const res = data.data.slice(0,10)
  
  const featuredIg = res[0].media_url;

  const styles = {
    backgroundImage: `url(${featuredIg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(5px)",
    height: "100%",
    width: "100%",
    position: "absolute"
  }

  const noFilter = {
    backgroundImage: `url(${featuredIg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "0 auto",
    filter: "blur(0px)",
    width: "60vh",
    height: "60vh",
    
  }

  const intro = {
    margin: "0px",
  }

  const stColectivo = {
    color: "white",
    fontSize:"12em",
    margin: "30vh 0 0",
    textTransform: "uppercase",
  }

  const stInfames = {
    color: "black",
    fontSize:"5em",
    margin: "0",
    textTransform: "uppercase",
    width: "1000%"
  }

  const stFeatureParallax = {
    margin: "0",
    position: "absolute",
    width: "100%"
  }

  const stInfamesParallax = {
    margin: "150px 0",
    display: "block",
  }

  if (!data) return "Loading...";
  if (error) return "Error...";
  return (
    <>
      {/* <h1>Welcome to INFAMES Music!</h1>
      <p>Bacon ipsum dolor amet salami turducken drumstick pork belly bacon kevin, buffalo meatball pork loin. Jowl jerky beef, chuck strip steak venison tenderloin flank burgdoggen chislic hamburger pig chicken cow. Fatback t-bone pancetta cow capicola venison cupim. Ground round boudin tri-tip beef kielbasa.</p> */}
        <div className="grid-container">
          <div className="featuredIg grid-item">
            <div style={styles} />
            
            <Parallax style={intro} x={[10, -10]} styleOuter={stFeatureParallax} tagOuter="figure2">
              <p style={stColectivo}>Colectivo</p>
            </Parallax>
            <Parallax style={intro} y={[80, 0]} styleOuter={stFeatureParallax}  tagOuter="figure">
                  <div style={noFilter}/>
            </Parallax>
            
          </div>
          <div className="igFeed grid-item">
            <IgFeed igFeed={res} />
          </div>
        </div>

        <Parallax style={intro} x={[-20, 0]} styleOuter={stInfamesParallax} tagOuter="figure2">
          <p style={stInfames}>INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC</p>
        </Parallax>

        <Infames infames={infames}/>
        <IgPics igFeed={res} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetcher(BasicIgApiURl)
  return { props: { posts } }
}

Index.Layout = SiteLayout;

