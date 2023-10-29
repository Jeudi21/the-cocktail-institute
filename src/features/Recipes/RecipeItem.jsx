function RecipeItem({ img, title }) {
  return (
    <article className="recipe-item">
      <img className="recipe-item-img" src={img} />
      <span className="recipe-item-title">{title}</span>
    </article>
  );
}

export default RecipeItem;
