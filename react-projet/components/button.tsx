import { NextPage } from "next";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
/**
 * 点击改变后缀icon
 * @param children 内容物
 * @returns
 */
const ListButton: NextPage<Props> = ({ children }) => {
  const [icon, setIcon] = useState(false);
  function addAOne() {
    setIcon(!icon);
  }
  function addIcon() {
    if (icon === true) {
      return "✅️";
    } else {
      return "❌️";
    }
  }
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={addAOne}
        className=" bg-gray-200 rounded-full px-3 m-0.5 flex justify-center items-center">
        {children}
        {addIcon()}
      </button>
    </div>
  );
};

export default ListButton;
