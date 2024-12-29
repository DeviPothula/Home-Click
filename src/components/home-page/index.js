import Navbar from "../Navbar";
import HeadLine from "./head-line";
import AllTypeOfDecor from "../all-typesOf-Decor";
import CreatedStyleCollection from "../created-style-collections";
import ShopByCategory from "../shop-by-category";
import LampLights from "../lamp-lights";
import ShopByRoom from "../shop-by-room";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeadLine />
      <AllTypeOfDecor />
      <CreatedStyleCollection />
      <ShopByCategory />
      <LampLights />
      <ShopByRoom />
    </>
  );
};

export default HomePage;
