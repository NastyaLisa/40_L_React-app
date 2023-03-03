import React from "react";

function ArticleBody(props) {
  return (
    <div className={`article__body ${props.isRead ? "read" : "unread"}`}>
      <h3 className="article__description">
        {!props.show && props.lang.description}
      </h3>
      <p className="article__text">
        {props.show ? props.lang.content : props.lang.preview}
      </p>
    </div>
  );
}
export default ArticleBody;
