import React, { useState } from "react";
import MyButton from "./common/MyButton";
import MyHeader from "./common/MyHeader";
import DiaryList from "./DiaryList";

const Home = ({ data, onAdd }) => {
  // const [curDate, setCurDate] = useState(new Date());
  // const headText = `${curDate.getFullYear()} Year ${
  //   curDate.getMonth() + 1
  // } Month`;
  const headText = "Dairy List";

  // const increaseMonth = () => {
  //   setCurDate(
  //     new Date(curDate.getFullYear(), curDate.getMonth() + 1),
  //     curDate.getDate()
  //   );
  // };
  // const decreaseMonth = () => {
  //   setCurDate(
  //     new Date(curDate.getFullYear(), curDate.getMonth() - 1),
  //     curDate.getDate()
  //   );
  // };

  return (
    <div>
      <MyHeader
        headText={headText}
        // leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        // rightChild={<MyButton text={">"} onClick={increaseMonth} />}
        leftChild={null}
        rightChild={null}
      />
      <DiaryList diaryList={data} onAdd={onAdd} />
    </div>
  );
};
export default Home;
