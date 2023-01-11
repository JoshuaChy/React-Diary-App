import React, { useState } from "react";
import DiaryItem from "./DiaryItem";
import MyButton from "./common/MyButton";
import "./DiaryList.css";

const sortOptionList = [
  { value: "latest", name: "newest" },
  { value: "oldest", name: "oldest" }
];

const filterOptionList = [
  { value: "all", name: "all" },
  { value: "good", name: "good" },
  { value: "bad", name: "bad" }
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList, onAdd }) => {
  // const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion, 10) <= 3;
      } else {
        return parseInt(item.emotion, 10) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date, 10) - parseInt(a.date, 10);
      } else {
        return parseInt(a.date, 10) - parseInt(b.date, 10);
      }
      /* if(filter < 3){
        return parseInt(b.date, 10) - parseInt(a.date, 10);
      } */
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };
  const goNew = () => {
    // navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"write a new diary"}
            onClick={onAdd}
          />
        </div>
      </div>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
