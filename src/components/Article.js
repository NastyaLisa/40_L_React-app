import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

const Article = ({children, show, lang, isRead}) =>{
  return (
    <>
      {children}
      <ArticleBody show={show} lang={lang} isRead={isRead} />
      <ArticleAuthor lang={lang} />
    </>
  );
}
export default Article;


