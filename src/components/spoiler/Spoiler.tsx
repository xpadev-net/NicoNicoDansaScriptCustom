import React, { useState } from "react";
import Styles from "./Spoiler.module.scss";
import SpoilerButton from "@/components/spoiler/SpoilerButton";
import localStorage from "@/libraries/localStorage";
import typeGuard from "@/libraries/typeGuard";

type propType = {
  text: string;
  message?: string;
  children: React.ReactNode;
};
/**
 * スポイラー
 * text: ブロックのタイトル
 * message: タイトルの右に表示されるテキスト
 * @param props
 * @constructor
 */
const Spoiler: React.FC<propType> = (props) => {
  const [spoilerOpen, setSpoilerOpen] = useState<boolean>(true);
  const localStorageKey = "display_" + props.text.toLowerCase();
  if (!typeGuard.localStorage.isKey(localStorageKey)) return <></>;
  setSpoilerOpen(localStorage.get(localStorageKey) == "true");
  const changeSpoilerVisibility = (visiblity: boolean) => {
    setSpoilerOpen(visiblity);
    localStorage.set(localStorageKey, visiblity ? "true" : "false");
  };
  return (
    <div className={Styles.wrapper}>
      <SpoilerButton
        open={spoilerOpen}
        text={props.text}
        message={props.message}
        click={() => changeSpoilerVisibility(!spoilerOpen)}
      />
      {spoilerOpen ? <div>{props.children}</div> : ""}
    </div>
  );
};
export default Spoiler;
