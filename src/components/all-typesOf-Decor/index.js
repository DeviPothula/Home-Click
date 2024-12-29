import FlowerVase from "../../assets/images/FlowerVase.jpg";
import LampSet from "../../assets/images/LampSet.jpg";
import NightLamp from "../../assets/images/NightLamp.jpg";
import ImageGallery from "../../common-components/image-gallery";
const AllTypeOfDecor = () => {
  const imagesList = [
    { src: FlowerVase, name: "Flower Vase" },
    { src: LampSet, name: "Lamp Set" },
    { src: NightLamp, name: "Night Lamp" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <ImageGallery
          imagesList={imagesList}
          imageContainerClassName={"aspect-w-4 aspect-h-3"}
          imageShape="square"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <p className="text-center  mb-4 italic">
          Online Variety Meets Showroom Confidence
        </p>
        <div className="flex space-x-4 text-center">
          <a href="/" className="underline  hover:text-blue-500">
            Lifetime Warranty
          </a>
          <span>|</span>
          <a href="/" className="underline   hover:text-blue-500">
            Easy Returns
          </a>
          <span>|</span>
          <a href="/" className="underline  hover:text-blue-500">
            In-Stock Guarantee
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllTypeOfDecor;
