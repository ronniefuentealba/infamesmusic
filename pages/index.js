import Link from "next/link";
import SiteLayout from "../layouts/MyLayout";
import {IgFeed} from "./../components";
import igFeed from "../config/igFeed";

export default function Index() {
    return (
        <>
          <h1>Welcome to INFAMES Music!</h1>
          <IgFeed igFeed={igFeed} />
        </>
    );
}

Index.Layout = SiteLayout;
