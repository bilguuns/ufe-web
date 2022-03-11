import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

import MoreButton from "../common/more-button";
import AppHero from "../components/hero";
// import VideoApp from "../common/video-list";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Card from "../common/card";
import PodcastCard from "../components/podcast";

const VideoApp = dynamic(() => import("../common/video-list"));

export default function Home() {
  return (
    <div>
      <AppHero />
      <VideoApp />

      <Card />
      <PodcastCard />

      {/* 
      <Link href="/ninjas/">
        <a>See Ninja Listing</a>
      </Link> */}
    </div>
  );
}
