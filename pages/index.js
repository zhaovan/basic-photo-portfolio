import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header.js";
import { photos } from "../components/photos";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import About from "../components/About/About";
import shuffleArray from "../utils/shuffle.js";

export default function Home() {
  const [page, setPage] = useState("photos");
  shuffleArray(photos);

  return (
    <div>
      <Head>
        <title>Photo Portfolio</title>
        <meta name="description" content="Photo portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header setPage={setPage} />
      {page === "photos" ? <PhotoGallery photos={photos} /> : <About />}
    </div>
  );
}
