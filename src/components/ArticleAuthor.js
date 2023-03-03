import React from "react";

const ArticleAuthor = ({lang}) => {
  return (
    <div className="article__author">
      <p className="article__author--name">{lang.author}</p>
      <p className="article__author--date">{lang.published}</p>
      <p className="article__author--theme">{lang.theme}</p>
    </div>
  );
}
export default ArticleAuthor;
