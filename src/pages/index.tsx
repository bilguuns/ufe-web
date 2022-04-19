import Head from "next/head";
import Footer from "../components/footer";
// import Header from "../components/headerold";
import Link from "next/link";

import MoreButton from "../components/common/more-button";
import AppHero from "../components/common/hero";
// import VideoApp from "../common/video-list";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Card from "../components/common/card";
import PodcastCard from "../components/podcast";
// import AppNews from "../components/industry-news";
import News from "../components/common/news";
import VideoApp from "../components/video-list";
import CardList from "components/common/card-list";
import YoutubeVideo from "components/common/youtube-video-player";
import Player from "components/common/player-card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <AppHero />
      <CardList />
      {/* <PodcastCard /> */}

      {/* <AppNews /> */}

      <News />
      <Player />
      <YoutubeVideo />
    </div>
  );
}
