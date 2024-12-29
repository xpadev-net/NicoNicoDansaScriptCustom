import type { ChangeEvent, FC } from "react";
import { useState } from "react";

import { Spoiler } from "@/components/spoiler/Spoiler";
import { getFont } from "@/libraries/font";
import { Storage } from "@/libraries/localStorage";

import Styles from "./Memo.module.scss";

/**
 * メモブロック(プレイヤー内)
 * @constructor
 */
const Memo: FC = () => {
  const [value, setValue] = useState<string>(Storage.get("memo"));
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    onBlur = () => {
      Storage.set("memo", value);
    };
  return (
    <Spoiler text={"Memo"}>
      <textarea
        cols={30}
        rows={5}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={Styles.textarea}
        spellCheck={false}
        style={{
          fontFamily: getFont("gothic").font
        }}
      ></textarea>
    </Spoiler>
  );
};
export { Memo };
