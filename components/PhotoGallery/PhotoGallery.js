import React from "react";
import Gallery from "react-photo-gallery";
import { useState, useCallback, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { filterOptions } from "../FilterOptions";
import styles from "../../styles/PhotoGallery.module.css";

function convertTitleCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export default function PhotoGallery({ photos }) {
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [filters, setFilters] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    const newPhotos = [];

    // checks if photo is in the list of tags currently selected
    for (const photo of photos) {
      for (const currFilter of filters) {
        if (photo.tag.includes(currFilter)) {
          if (!newPhotos.includes(photo)) {
            newPhotos.push(photo);
          }
          continue;
        }
      }
    }

    setFilteredPhotos(newPhotos);
  }, [filters, photos]);

  const filter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((currTag) => currTag !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  };

  return (
    <div className="container">
      <div>
        <h3 className={styles.filterTag}>Filter:</h3>
        <div className={styles.filterContainer}>
          {filterOptions.map((currFilter, i) => {
            return (
              <button
                key={i}
                className={
                  filters.includes(currFilter)
                    ? styles.filterButtonActive
                    : styles.filterButton
                }
                onClick={() => {
                  filter(currFilter);
                }}
              >
                {convertTitleCase(currFilter)}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {filters.length === 0 ? (
          <>
            <Gallery
              photos={photos}
              direction="column"
              onClick={openLightbox}
            />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </>
        ) : filteredPhotos.length === 0 ? (
          <div>No photos found :(</div>
        ) : (
          <>
            <Gallery
              photos={filteredPhotos}
              direction="column"
              onClick={openLightbox}
            />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={filteredPhotos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </>
        )}
      </div>
    </div>
  );
}
