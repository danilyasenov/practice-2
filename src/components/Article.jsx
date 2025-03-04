import React from "react";
import LikeButton from "./LikeButton";

function Article() {
  return (
    <article>
      <h1>Статья про React</h1>
      <p>React — это популярная библиотека для создания пользовательских интерфейсов.</p>
      <LikeButton />
    </article>
  );
}

export default Article;
