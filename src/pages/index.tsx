import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

import MoreButton from "../common/more-button";
import AppHero from "../components/hero";
import VideoApp from "../common/video-list";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <VideoApp />
      <AppHero />
      <MoreButton />
      {/* 
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link> */}
    </div>
  );
}
