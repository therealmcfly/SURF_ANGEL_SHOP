import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryDir.scss";

const CATAGORIES_LIST = [
  {
    id: 1,
    title: "Hats",
    imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imgUrl: "https://i.ibb.co/px2tCc3/men.png",
  },
  {
    id: 3,
    title: "Mens",
    imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Sneakers",
    imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Womens",
    imgUrl: "https://i.ibb.co/R70vBrQ/jackets.png",
  },
];

const CategoryDir = ({ list }) => {
  return (
    <div className="category-list">
      {CATAGORIES_LIST.map((item) => {
        const { id, title, imgUrl } = item;
        return <CategoryItem key={id} title={title} imgUrl={imgUrl} />;
      })}
    </div>
  );
};

export default CategoryDir;
