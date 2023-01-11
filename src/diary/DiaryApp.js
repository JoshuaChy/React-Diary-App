import React, { useState } from "react";
import Home from "./Home";
import DiaryEditor from "./DiaryEditor";

import "./DiaryApp.css";

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "Buku harian nomor 1",
    date: 1671494400000
  },
  {
    id: 2,
    emotion: 2,
    content: "Buku harian nomor 2",
    date: 1671494400000
  },
  {
    id: 3,
    emotion: 3,
    content: "Buku harian nomor 3",
    date: 1671494400000
  },
  {
    id: 4,
    emotion: 4,
    content: "Buku harian nomor 4",
    date: 1671494400000
  },
  {
    id: 5,
    emotion: 5,
    content: "Buku harian nomor 5",
    date: 1671494400000
  }
];

const DiaryApp = () => {
  const [showHome, setShowHome] = useState(true);
  const [showNew, setShowNew] = useState(false);

  const [data, setData] = useState(dummyData);

  const onAddHandler = (item) => {
    setShowHome(false);
    setShowNew(true);
  };
  const onAdd = (item) => {
    console.log(item);

    console.log(data);

    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };

    setData((previtems) => {
      return [newItem, ...previtems];
    });
    setShowHome(true);
    setShowNew(false);
  };

  const onCancel = (item) => {
    setShowHome(true);
    setShowNew(false);
  };

  return (
    <div className="DiaryListApp">
      {showHome && <Home data={data} onAdd={onAddHandler} />}
      {showNew && <DiaryEditor onCancel={onCancel} onAdd={onAdd} />}
    </div>
  );
};
export default DiaryApp;
