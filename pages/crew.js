import Link from "next/link";
import SiteTemplate from "../layouts/siteTemplate";
import {Infames} from "../components";
import {infames} from "../config";

export default function Crew() {
  return (
      <>
        <h1>Crew Page!</h1>
        <Infames infames={infames}/>
        <Link href={'/'}>Home</Link>
      </>
  );
}