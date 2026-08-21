"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { handleLightboxKeyboard, getImageCounter, type GalleryImage } from "./logic";
import "./styles.css";

export interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setImageLoading(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentIndex(index);
    setImageLoading(true);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigateToImage(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      navigateToImage(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyboard = (event: KeyboardEvent) => {
      handleLightboxKeyboard(event, currentIndex, images.length, navigateToImage, closeLightbox);
    };

    document.addEventListener("keydown", handleKeyboard);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, currentIndex, images.length]);

  const currentImage = images[currentIndex];

  return (
    <>
      <div
        className="image-gallery"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            className="gallery-thumbnail"
            onClick={() => openLightbox(index)}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="gallery-thumbnail-image"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} weight="bold" />
            </button>

            {currentIndex > 0 && (
              <button
                className="lightbox-nav lightbox-nav-prev"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ArrowLeft size={32} weight="bold" />
              </button>
            )}

            {currentIndex < images.length - 1 && (
              <button
                className="lightbox-nav lightbox-nav-next"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ArrowRight size={32} weight="bold" />
              </button>
            )}

            <div className="lightbox-content">
              <div className="lightbox-image-container">
                {imageLoading && (
                  <div className="lightbox-loading">
                    <LoadingSpinner size="large" />
                  </div>
                )}
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={currentImage.width || 1200}
                  height={currentImage.height || 900}
                  className="lightbox-image"
                  onLoadingComplete={() => setImageLoading(false)}
                  priority
                />
              </div>
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">{currentImage.alt}</p>
              <p className="lightbox-counter">
                {getImageCounter(currentIndex, images.length)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
