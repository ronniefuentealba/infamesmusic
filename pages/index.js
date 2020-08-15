import React from 'react';
import useSWR from 'swr';
import { Parallax } from 'react-scroll-parallax';
import SiteLayout from "../layouts/MyLayout";
import {IgFeed, Infames, IgPics, Intro} from "./../components";
import {infames} from "../config";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const useStyles = createUseStyles({
  stInfames: {
    color: "black",
    fontSize:"5em",
    margin: "0",
    textTransform: "uppercase",
    width: "1000%"
  }
});

const fetcher = url => fetch(url).then(res => res.json());
const BasicIgApiURl = "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type, username,media_count,permalink,thumbnail,timestamp&access_token="+process.env.INSTRAGRAM_API_KEY;

export default function Index (props) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { data, error } = useSWR(BasicIgApiURl, fetcher, { initialData: props.posts })
  const res = data.data.slice(0,10)
  
  const intro = {
    margin: "0px",
  }

  const stInfamesParallax = {
    margin: "150px 0",
    display: "block",
  }

  if (!data) return "LOADING LOADING LOADING";
  if (error) return "Error...";
  return (
    <>
      <Intro theme={theme} comments={res}/>

      <Parallax style={intro} x={[-40, 0]} styleOuter={stInfamesParallax} tagOuter="figure2">
        <p className={classes.stInfames}>INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC</p>
      </Parallax>

        <Infames infames={infames}/>

        <Parallax y={[-20,0]}  tagOuter="figure3">
          <IgPics igFeed={res} />
        </Parallax>
        
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetcher(BasicIgApiURl)
  return { props: { posts } }
}

Index.Layout = SiteLayout;

