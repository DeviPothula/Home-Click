import PathLighting from "../../../src/assets/images/Path Lighting.jpeg";
import AccentLight from "../../../src/assets/images/Accent Lighting.jpeg";
import DeckLight from "../../../src/assets/images/Deck Light.png";
import WellLight from "../../../src/assets/images/Well Light.jpeg";
import BollardsPathLight from "../../../src/assets/images/Bollards Path Lights.jpeg";
import FoodLights from "../../../src/assets/images/Flood Lights.jpeg";
import ImageGallery from "../../common-components/image-gallery";

const LampLights = () => {
  const lampsList = [
    { src: PathLighting, name: "Path Lighting" },
    { src: AccentLight, name: "Accent Lighting" },
    { src: DeckLight, name: "Deck Light" },
    { src: WellLight, name: "Well Light" },
    { src: BollardsPathLight, name: "Bollards Path Lights" },
    { src: FoodLights, name: "Food Lights" },
  ];

  return (
    <div className="mt-10">
      <p className="font-bold text-center">
        LANDSCAPE LIGHTING FOR EVERY PURPOSE
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        <ImageGallery
          imagesList={lampsList}
          displayName={true}
          imageShape="square"
        />
      </div>
    </div>
  );
};

export default LampLights;
