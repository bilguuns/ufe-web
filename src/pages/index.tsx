import Head from "next/head";

import YoutubeVideo from "components/common/youtube-video-player";
import VideoPlayer from "components/common/video-player";
import Widget from "components/widget";
import Poolcast from "components/poolcasts";
import AppCard from "components/common/event-card";
import EventList from "components/event-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />\
      </Head>
      <VideoPlayer />
      <EventList />
      <Widget />
      <Poolcast />
      <YoutubeVideo />
    </>
  );
}
