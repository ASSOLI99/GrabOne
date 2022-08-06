import AddImage from "../components/UI/Add/AddImage";
import HeaderMenu from "../components/header/HeaderMenu";
import NewsLetter from "../components/UI/newsletter/NewsLetter";
import CategoryMenu from "../components/category/CategoryMenu";
import CategorySlice from "../components/category/CategorySlice";
import SmallCategory from "../components/category/SmallCategory";
const Welcome = () => {
  return (
    <>
      <AddImage />
      <HeaderMenu />
      <NewsLetter />
      <CategoryMenu catName={"Featured Auckland deals"} />
      <CategorySlice catName={"Collections"} />
      <CategoryMenu catName={"Escapes "} />
      <CategoryMenu catName={"Activities, Events & Outdoors "} />
      <CategoryMenu catName={"Restaurants, Bars, Cafes  "} />
      <CategoryMenu catName={"Store"} />
      <SmallCategory catName={"Beauty, Massage & Spa"} />
      <SmallCategory catName={"House & Garden"} />
      <SmallCategory catName={"Fitness & Sports "} />
      <SmallCategory catName={"Automotive "} />
    </>
  );
};
export default Welcome;
