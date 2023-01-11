import React, { useCallback, useEffect, useRef, useState } from "react";

import { getStringDate } from "./../diary/util/date.js";
import { emotionList } from "./../diary/util/emotion";

import MyButton from "./../diary/common/MyButton";
import MyHeader from "./../diary/common/MyHeader";
import EmotionItem from "./EmotionItem";
import "./DiaryEditor.css";

const DiaryEditor = ({ isEdit, originData, onCancel, onAdd }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  // const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);
  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  // const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit
          ? "Would you like to edit your diary?"
          : "Would you like to start a new diary?"
      )
    ) {
      const newdate = parseInt(new Date(date).getTime(), 10);

      onAdd({ content, emotion, date: newdate });
    }
  };

  const handleRemove = () => {
    // if (window.confirm("Are you sure you want to delete?")) {
    //   onRemove(originData.id);
    // }
    // navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date, 10))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "Edit Diary" : "Create New Diary"}
        leftChild={null}
        rightChild={
          isEdit && (
            <MyButton
              text={"to delete"}
              type={"nagative"}
              onClick={handleRemove}
            />
          )
        }
      />
      <div>
        <section>
          <h4>When is it today?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>feelings of the day</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>today's diary</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="how was your day"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"Cancel"} onClick={onCancel} />
            <MyButton
              type={"positive"}
              text={"Completed"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
