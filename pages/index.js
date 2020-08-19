import React from 'react';
import useSWR from 'swr';
import SiteLayout from "../layouts/MyLayout";
import VisibilitySensor from 'react-visibility-sensor'
import { Parallax } from 'react-scroll-parallax';
import {Infames, IgPics, Intro, YoutubePlaylist, Downloads, Shop} from "../components";
import {infames} from "../config";

const StInfames= {
    color: "black",
    fontFamily: 'MonumentExtended-UltraBold, sans-serif',
    fontSize:"3em",
    lineHeight:"33px",
    margin: "0",
    textTransform: "uppercase",
    width: "1000%",
    margin: "160px 0",
    display: "block",
  }

const fetcher = (...args) => fetch(...args).then(res => res.json())
const BasicIgApiURl = "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type, username,media_count,permalink,thumbnail,timestamp&access_token="+process.env.INSTRAGRAM_API_KEY;

export default function Index (props) {
  const { data, error } = useSWR(BasicIgApiURl, fetcher, { 
    initialData: props.posts, 
    revalidateOnFocus: false })

  const res = data.data.slice(0,10)

  function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <Intro comments={res}/>

      <Parallax x={[-40, 0]} tagOuter="figure2">
        <p style={StInfames}>INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC</p>
      </Parallax>

      <Parallax y={[-20,0]}  tagOuter="figure3">
        <Infames infames={infames}/>
      </Parallax>
        
        <VisibilitySensor partialVisibility onChange={onChange}>
            <IgPics igFeed={res} />
      </VisibilitySensor>
      <YoutubePlaylist />
      <Shop />
      <Downloads />
        
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetcher(BasicIgApiURl)
  return { props: { posts } }
}

Index.Layout = SiteLayout;

