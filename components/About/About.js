import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

import profilePic from "../../public/about/about_pic.jpeg";

export default function About() {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={profilePic}
            alt="Personal of myself"
            // Change this to adjust for the image size
            width={1920}
            height={2560}
            layout="responsive"
            className={styles.photo}
          />
        </div>
        <p className={styles.text}>
          Hey I'm Ivan!
          <br />
          <br />
          I'm probably taking a nap or doing something else right now. Here's
          more filler text. Here's some more. I love dogs! Did you know that?
        </p>
      </div>
    </div>
  );
}
