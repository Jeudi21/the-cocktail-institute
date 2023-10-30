import { Link } from "react-router-dom";

function RecipeItem({ img, title, id }) {
  return (
    <Link className="recipe-item-link" to={`${id}`}>
      <article className="recipe-item">
        <img className="recipe-item-img" src={img} />
        <span className="recipe-item-title">{title}</span>
      </article>
    </Link>
  );
}

export default RecipeItem;
