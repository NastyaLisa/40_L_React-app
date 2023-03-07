import React, { useState } from "react";
import Article from "./components/Article";

const EN = {
  title: "NVIDIA news",
  subtitle: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",

  preview:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  content:
    "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
  author: "Author: Mike",
  published: "Published: 06.12.2022",
  theme: "Theme: Video cards",
  btnMarkRead: "Mark as read",
  btnRead: "Read",
  btnClose: "Close",
  btnMarkUnread: "Mark as unread",
  current_lang: "EN",
};
const UA = {
  title: "НОВИНИ NVIDIA ",
  subtitle: "Прискорений штучний інтелект NVIDIA в Azure",
  description: "Опис статті:",
  preview:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  content:
    "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
  author: "Автор: Майк",
  published: "Опубліковано: 06.12.2022",
  theme: "Тема: відео карти",
  btnMarkRead: "Прочитано",
  btnRead: "Читати",
  btnClose: "Закрити",
  btnMarkUnread: "Не прочитано",
  current_lang: "UA",
};

const App = () => {
  const [isShow, setIsShow] = useState(false);

  const [isRead, setIsRead] = useState(false);
  const markAsRead = () => {
    setIsRead(true);
  };

  const markAsUnread = () => {
    setIsRead(false);
  };

  const toggleArticle = () => {
    setIsShow((prevState) => !prevState);
    setIsRead(isShow === true && !isRead === true ? true : false);
  };
  const [currentLang, setCurrentLang] = useState("EN");
  const lang = currentLang === "EN" ? EN : UA;

  return (
    <div className="wrapper">
      <h1 className="title">{lang.title}</h1>
      <div className="article">
        <Article show={isShow} lang={lang} isRead={isRead}>
          <div className="article__title">
            <h2>{lang.subtitle}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">
            {lang.btnMarkRead}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? lang.btnClose : lang.btnRead}
          </button>
          <button onClick={markAsUnread} className="article__btn">
            {lang.btnMarkUnread}
          </button>
        </div>
      </div>
      <div className="lang">
        <button
          onClick={() => setCurrentLang("UA")}
          className={`${currentLang === "UA" && "active"} lang-btn`}
        >
          UA
        </button>
        <button
          onClick={() => setCurrentLang("EN")}
          className={`${currentLang === "EN" && "active"} lang-btn`}
        >
          EN
        </button>
      </div>
    </div>
  );
};
export default App;
