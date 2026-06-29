"use client";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  // 逻辑区
  function atclick() {
    alert("hello");
  }
  const user = {
    name: "xiaoming",
    age: 19,
  };
  const [yangShi, setYangShi] = useState("bg-sky-100 ");

  // 样式区
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="flex items-center justify-center w-1/5 h-20 bg-sky-200"
          onClick={atclick}>
          第一个页面
        </button>
      </div>
      <li className={`${yangShi} flex items-center justify-center`}>
        <span className="size-0.75 bg-black rounded-full"></span>
        {user.age}
      </li>
      <button
        onClick={() => {
          if (yangShi === "bg-red-200") {
            setYangShi("bg-sky-200");
          } else {
            setYangShi("bg-red-200");
          }
        }}>
        改变颜色
      </button>
    </div>
  );
};

export default Home;
