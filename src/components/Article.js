import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  return (
    <>
      {props.children}
      <ArticleBody show={props.show} lang={props.lang} isRead={props.isRead} />
      <ArticleAuthor lang={props.lang} />
    </>
  );
}
export default Article;
