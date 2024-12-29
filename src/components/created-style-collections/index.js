import { useEffect, useState } from "react";
import BohemianDecor from "../../../src/assets/images/Bohemian Decor.jpeg";
import FarmHouse from "../../../src/assets/images/Farm House.jpg";
import FallDecor from "../../../src/assets/images/Fall Decor.jpg";
import CoastalDecor from "../../../src/assets/images/Coastal Decor.jpg";
import RugTwo from "../../../src/assets/images/Rug.jpg";
import OutDoorLight from "../../../src/assets/images/OutDoorLighting.jpg";
import { getImageDimensions } from "../../utils/getImageDimensions";
import Gallery from "react-photo-gallery";
import "./style-collections.css";
import CustomGalleryItem from "./custom-gallery-item";
import ImageGallery from "../../common-components/image-gallery";

const CreatedStyleCollection = () => {
  const decorImagesList = [
    { src: BohemianDecor, name: "Bohemian Decor" },
    { src: FarmHouse, name: "Farm House" },
    { src: FallDecor, name: "Fall Decor" },
    { src: CoastalDecor, name: "Coastal Decor" },
  ];

  const postsThumbnailList = [RugTwo, OutDoorLight];
  const [photos, setPhotos] = useState([]);

  const getImageData = async () => {
    const data = await getImageDimensions(postsThumbnailList);
    if (data?.length) {
      setPhotos([...data]);
    }
  };

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center mt-8">
        <p className="text-center  mb-4 font-bold">CURATED STYLE COLLECTIONS</p>
        <p className="text-center  mb-4 italic">
          Products individually selected by our style experts.
        </p>
      </div>
      <div className="grid mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ImageGallery
            imagesList={decorImagesList}
            displayName={true}
            imageShape="circle"
          />
        </div>
      </div>

      {postsThumbnailList?.length >= 1 && (
        <div className="mt-10 gap-4">
          {photos?.length >= 1 ? (
            <Gallery
              photos={photos}
              direction="row"
              renderImage={CustomGalleryItem}
            />
          ) : (
            <p>Images Are Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedStyleCollection;
