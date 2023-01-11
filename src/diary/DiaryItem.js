import React from "react";
import MyButton from "./../diary/common/MyButton";
import "./DiaryItem.css";

const DiaryItem = ({ id, emotion, content, date }) => {
  //If the image does not appear
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  //console.log(date.getFullYear());
  const strDate = new Date(parseInt(date, 10)).toLocaleDateString();
  const goDetail = () => {
    // navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    // navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      {/* <div className="btn_wrapper">
        <MyButton text={"edit"} onClick={goEdit} />
      </div> */}
    </div>
  );
};

export default DiaryItem;
