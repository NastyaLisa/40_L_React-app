import React from "react";

const  ArticleBody = ({show, isRead, lang}) => {
  return (
    <div className={`article__body ${isRead ? "read" : "unread"}`}>
      <h3 className="article__description">
        {!show && lang.description}
      </h3>
      <p className="article__text">
        {show ? lang.content : lang.preview}
      </p>
    </div>
  );
}
export default ArticleBody;

