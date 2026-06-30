"use client";
import ListButton from "@/components/button";
import { Button } from "@heroui/react";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  // 逻辑区-------------------------------------------------------------------------------------------------------------------------------------------------------------
  // 点击出现弹窗
  function atclick() {
    alert("hello");
  }
  const user = {
    name: "xiaoming",
    age: 19,
  };
  // 点击改变颜色
  const [yangShi, setYangShi] = useState("bg-sky-100 ");
  // 列表渲染
  function List({ name, type }: { name: string; type: boolean }) {
    if (type === true) {
      return <div className="List">{name}✅️</div>;
    } else {
      return <div className="List">{name}</div>;
    }
  }
  // 按钮，点击变化
  const [fuJia, setFuJia] = useState(false);
  function hand() {
    setFuJia(!fuJia);
  }
  function classess() {
    if (fuJia === true) {
      return "✅️";
    } else {
      return "❌️";
    }
  }
  // 样式区----------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      {/* 点击出现弹窗 */}
      <div className="flex items-center justify-center">
        <Button
          className="flex items-center justify-center w-1/5 h-20 bg-sky-200"
          onPress={atclick}>
          第一个页面
        </Button>
      </div>
      <div className={`${yangShi} flex items-center justify-center`}>
        <span className="size-0.75 bg-black rounded-full"></span>
        {user.age}
      </div>
      {/* 点击改变颜色 */}
      <Button
        onPress={() => {
          if (yangShi === "bg-red-200") {
            setYangShi("bg-sky-200");
          } else {
            setYangShi("bg-red-200");
          }
        }}>
        改变颜色
      </Button>
      {/* 列表渲染  */}
      <div className="flex flex-col">
        <List name="出门清单" type={true} />
        <List name="衣服" type={false} />
        <List name="牙膏" type={true} />
        <List name="牙刷" type={true} />
      </div>
      {/* 点击变化样式的组件*/}
      <div className="flex flex-col items-center">
        <ListButton>衣服</ListButton>
        <ListButton>牙刷</ListButton>
        <ListButton>牙膏</ListButton>
        <ListButton>暑假作业</ListButton>
      </div>
    </div>
  );
};

export default Home;
