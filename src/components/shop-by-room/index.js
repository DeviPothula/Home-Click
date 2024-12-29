import DiningRoom from "../../../src/assets/images/Dining Room.jpg";
import KitchenRoom from "../../../src/assets/images/Kitchen Room.jpg";
import BedRoom from "../../../src/assets/images/Bed Room.jpg";
import LivingRoom from "../../../src/assets/images/Living Room.jpg";
import EntryRoom from "../../../src/assets/images/Entry Room.jpg";
import OfficeRoom from "../../../src/assets/images/Office Room.jpeg";
import ImageGallery from "../../common-components/image-gallery";

const ShopByRoom = () => {
  const roomsList = [
    { src: DiningRoom, name: "Dining Room" },
    { src: KitchenRoom, name: "Kitchen Room" },
    { src: BedRoom, name: "Bed Room" },
    { src: LivingRoom, name: "Living Room" },
    { src: EntryRoom, name: "Entry Room" },
    { src: OfficeRoom, name: "Office Room" },
  ];
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center mt-8">
        <p className="text-center  mb-4 font-bold">
          TIME FOR A NEW LOOK: SHOP BY ROOM
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <ImageGallery
          imagesList={roomsList}
          displayName={true}
          imageShape="circle"
        />
      </div>
    </div>
  );
};

export default ShopByRoom;
