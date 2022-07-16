# NextJS Photo Portfolio

![Screenshot](/public/site_ss.png)

This is a Next.js project!

If you're here, you're either adam (hi adam!) or you've found this through the interwebs and want to learn more! Cool! You've come to the right place

# Project Structure

The project is pretty simple, it uses built in global module styles (which should be changed to tailwind at some point for CSS). This was mainly done because the author had not used tailwind at this point

- if you are familiar with this syntactic naming of CSS, this should fit within your preexisting paradigm / knowledge of CSS

- the main other component we use is [react-photo-gallery](https://www.npmjs.com/package/react-photo-gallery) which honestly... I should learn to build one day but for now we'll take what we can get. the main version is that it uses Knuth line breaking algorithm / has low lift on setup for photos / renderings

# Setting this up for yourself!

Honestly I should be using this for my own photos. But I digress.

To set this up for yourself, you probably want to do a couple main things:

1. Change the name in the `components/Header.js` file to your name!
2. Upload the photos that you want to use into the `public/images` folder. From here, you want to then change the imports in `components/PhotoGallery/Photogallery.js` file. React photo gallery has good documentation, which I use below:

```js
const photos = [
  {
    src: "http://example.com/example/img1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "http://example.com/example/img2.jpg",
    width: 1,
    height: 1,
  },
];
```

Additionally, for each image, you can provide a caption and an alt like so:

```js

const image = {
  caption: "An image caption as a string, React Node, or a rendered HTML string",
  alt: "A plain string to serve as the image's alt tag",
  source: {
    download: "A URL to serve a perfect quality image download from",
    fullscreen: "A URL to load a very high quality image from",
    regular: "A URL to load a high quality image from",
    thumbnail: "A URL to load a low quality image from"
  };
}

```

which you'll need to change the js on like 91-94 of the file in `components/PhotoGallery/PhotoGallery.js`

3. For filtering, there's an array defined in `components/FilterOptions.js` which is literally just all filter options. To handle this, you need to associate each photo with a `type`. super easy
4. Last but not least, change the `components/About` page so it's about you and upload a photo of you in `public/about` so we can see your face!

and with that, all of that should work!

# Dev work

If for some reason, you want to develop more on this, there's no real guidelines atm!

The only thing is run with `yarn dev` after installing all the node modules.
