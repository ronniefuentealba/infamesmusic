import React from 'react';
import useSWR from 'swr';
import VisibilitySensor from 'react-visibility-sensor'
import { Parallax } from 'react-scroll-parallax';
import {Infames, IgPics, Intro, YoutubePlaylist, Downloads, Shop} from "../components";
import {infames} from "../config";

import {InfamesProvider, InfamesConsumer} from './../context/infamesProvider';

const StInfames= {
    color: "black",
    fontFamily: 'MonumentExtended-UltraBold, sans-serif',
    fontSize:"3em",
    lineHeight:"33px",
    margin: "0",
    textTransform: "uppercase",
    width: "1000%",
    margin: "160px 0 300px",
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
    const header = document.querySelector('header nav.navWrapper')
    const rrssBars = document.querySelectorAll('footer .rrssBar .rrssItem')
    const subscribeButton = document.querySelector('footer .subscribe .subsButton')
    const subscribeTxt = document.querySelector('footer .subscribe .txt')
    const dividers = document.querySelectorAll('footer .rrssItem.divider svg line')
    if(!isVisible){
      header.style.color =  'white'
      dividers.forEach(divider => divider.attributes.stroke.value = 'white')
      rrssBars.forEach(rrssBar => rrssBar.style.color =  'white')
      subscribeButton.style.color =  'white'
      subscribeTxt.style.color =  'white'
    } else {
      header.style.color = 'black'
      rrssBars.forEach(rrssBar => rrssBar.style.color =  'black')
      dividers.forEach(divider => divider.attributes.stroke.value = 'black')
      subscribeButton.style.color = 'black'
      subscribeTxt.style.color = 'black'
    }
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
    <Intro comments={res}/>

    <VisibilitySensor partialVisibility offset={{top:300, bottom:300}} minTopValue={0} onChange={onChange}>
    <div>

      <Parallax x={[-40, 0]} tagOuter="figure2">
        <p style={StInfames}>INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC INFAMES MUSIC</p>
      </Parallax>

      <Parallax y={[-20,0]}>
        <Infames infames={infames}/>
      </Parallax>
      
      <IgPics igFeed={res} />

      <YoutubePlaylist />
    </div>
    </VisibilitySensor>

        <Shop />

      <VisibilitySensor partialVisibility onChange={onChange}>
        <Downloads />
      </VisibilitySensor>

        
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetcher(BasicIgApiURl)
  return { props: { posts } }
}