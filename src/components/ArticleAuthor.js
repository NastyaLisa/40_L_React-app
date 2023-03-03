import React from "react";

function ArticleAuthor(props) {
  return (
    <div className="article__author">
      <p className="article__author--name">{props.lang.author}</p>
      <p className="article__author--date">{props.lang.published}</p>
      <p className="article__author--theme">{props.lang.theme}</p>
    </div>
  );
}
export default ArticleAuthor;
