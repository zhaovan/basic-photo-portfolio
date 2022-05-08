import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Header from "./components/Header/Header.js";
import { photos } from "./photos";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import About from "./components/About/About";

export default function Home() {
  const [page, setPage] = useState("photos");
  return (
    <div>
      <Head>
        <title>Photo Portfolio</title>
        <meta name="description" content="Photo portfolio" />
        <link rel="icon" href="/camera.png" />
      </Head>
      <Header setPage={setPage} />
      {page === "photos" ? <PhotoGallery photos={photos} /> : <About />}
    </div>
  );
}
