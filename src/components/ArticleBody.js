// import React from "react";
import '../scss/style.scss'
import React, { useState } from 'react';

function ArticleBody(props) {

 
return (
        <div className={`article__body ${props.isRead ? 'read' : 'unread'}`}>
          <h3 className="article__description">
            {!props.show && props.text.description }
          </h3>
          <p className="article__text">
            {props.show ? props.text.content : props.text.preview }
          </p>
        </div>)}
export default ArticleBody;