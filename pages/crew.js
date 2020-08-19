import Link from "next/link";
import SiteLayout from "../layouts/MyLayout";

export default function Crew() {
  return (
      <>
        <h1>Crew Page!</h1>
        <Link href={'/'}>Home</Link>
      </>
  );
}

Crew.Layout = SiteLayout;