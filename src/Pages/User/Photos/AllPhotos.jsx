import './allPhotoMasonry.css'
import { useState } from 'react';

const AllPhotos = () => {

  const images = [
    {
      src: "3 (5).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (3).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (4).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (5).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (1).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (6).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (1).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (2).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "3 (1).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (7).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (8).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (9).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (10).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (11).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (12).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (13).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (14).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (15).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (16).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (17).jpeg",
      alt: "gallery-photo"
    }, {
      src: "1 (18).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (19).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (20).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (21).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (4).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (3).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "3 (4).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (5).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "1 (3).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (4).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (6).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (5).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (7).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "2 (8).jpeg",
      alt: "gallery-photo"
    }, {
      src: "3 (3).jpeg",
      alt: "gallery-photo"
    },
    {
      src: "3 (2).jpeg",
      alt: "gallery-photo"
    }
  ];

  const ImageGrid = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };

    const closeModal = () => {
      setSelectedImage(null);
    };

    return (
      <div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-2">
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, colIndex) => (
            <div className="grid gap-4" key={colIndex}>
              {images.slice(colIndex * 3, colIndex * 3 + 3).map((image, index) => (
                <div key={index} onClick={() => handleImageClick(image)}>
                  <img
                    className="h-auto max-w-full rounded-xl m-auto object-cover object-center cursor-pointer"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
            <img
              className="max-w-full max-h-full rounded-lg"
              src={selectedImage.src}
              alt={selectedImage.alt}
            />
          </div>
        )}
      </div>
    );
  };

  return <ImageGrid images={images} />;
};

export default AllPhotos;
