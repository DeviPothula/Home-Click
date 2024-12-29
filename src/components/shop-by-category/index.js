import Furniture from "../../../src/assets/images/Furniture.jpeg";
import Decor from "../../../src/assets/images/Decor.jpg";
import Rugs from "../../../src/assets/images/Rugs.jpg";
import Lighting from "../../../src/assets/images/Lighting.jpeg";
import OutdoorProduct from "../../../src/assets/images/Outdoor Products.jpg";
import CeilingFans from "../../../src/assets/images/Ceiling Fans.jpeg";
import ImageGallery from "../../common-components/image-gallery";

const ShopByCategory = () => {
  const imagesList = [
    { src: Furniture, name: "Furniture" },
    { src: Decor, name: "Decor" },
    { src: Rugs, name: "Rugs" },
    { src: Lighting, name: "Lighting" },
    { src: OutdoorProduct, name: "Outdoor Product" },
    { src: CeilingFans, name: "Ceiling Fans" },
  ];

  return (
    <div className="mt-10">
      <p className="font-bold text-center">
        START HERE FOR STYLE: SHOP BY CATEGORY...
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <ImageGallery
          imagesList={imagesList}
          displayName={true}
          imageShape="square"
        />
      </div>
    </div>
  );
};

export default ShopByCategory;
