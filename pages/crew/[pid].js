import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from "next/link";
import ArtistTemplate from "../../layouts/artistTemplate";
import useSWR from 'swr';
import {infames} from "../../config";
import {CrewCard} from './../../components'
import {PlayCircleOutlineOutlined, Facebook, YouTube}  from '@material-ui/icons'
import { InfamesProvider, InfamesConsumer } from '../../context/infamesProvider';
import firestore from './../../firebase/index';

const title = {
  fontFamily: 'MonumentExtended-UltraBold, sans-serif',
  textTransform: 'uppercase',
}

export default function Crew(props) {
  const router = useRouter()
  const { pid } = router.query

  return (
    <React.Fragment>
        <>
          {
              <React.Fragment>
                {props.results
                ?<CrewCard infame={props.result} slug={pid}/>
                : "Loading..."}
                <button onClick={() => setInfame(infame + 1)}>
        Click me
      </button>
              </React.Fragment>
          }
        </>
      {/*  */}
    </React.Fragment>
  )
}

export async function getStaticProps() {
    let docsList = new Array();
    let citiesRef = firestore.collection('infames');
    let allCities = await citiesRef.get();
    console.log(allCities)
    console.log('got data')
    for(const doc of allCities.docs){
      docsList.push(doc.data())
    }
    return {props: {docsList}}
}

export async function getStaticPaths() {
  return {
    paths: [
      // Object variant:
      { params: { pid: 'second-post' } },
    ],
    fallback: true,
  }
}


Crew.Layout = ArtistTemplate;