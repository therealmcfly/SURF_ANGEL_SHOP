import { useNavigate } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ title, imgUrl }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div className="category-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div onClick={handleClick} className="body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
