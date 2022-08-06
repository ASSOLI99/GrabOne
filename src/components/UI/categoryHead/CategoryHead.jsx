import { Link } from "react-router-dom";
import "./CategoryHead.css";
const CategoryHead = (props) => {
  return (
    <div className=" d-flex align-items-center gap-3 my-4">
      <a className="heading">{props.catName}</a>
      <Link to="category-page" className="btn bg-main border-0">
        View More <i className="bi bi-caret-right-fill"></i>
      </Link>
    </div>
  );
};
export default CategoryHead;
