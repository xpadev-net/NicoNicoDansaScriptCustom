import React, { useCallback, useContext, useState } from "react";
import Popup from "@/components/popup/Popup";
import BackgroundImageDisplay from "@/components/backgroundPicker/BackgroundImageDisplay";
import { layerContext } from "@/components/LayerContext";
import Button from "@/components/button/Button";
import Dropdown from "@/components/dropdown/Dropdown";
import { objectFitArgs } from "@/@types/types";
import Tips from "@/components/tips/Tips";
import Styles from "./BackgroundPicker.module.scss";

const BackgroundPicker = () => {
  const { overlayData, setOverlayData } = useContext(layerContext);
  const [urlInputActive, setUrlInputActive] = useState<boolean>(false),
    [urlInputValue, setUrlInputValue] = useState<string>("");
  if (!overlayData || !setOverlayData) return <></>;
  const loadFromFile = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.onchange = () => {
        if (!input.files || !input.files[0]) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            overlayData.images.push(e.target.result);
            setOverlayData({ ...overlayData });
          }
        };
        reader.readAsDataURL(input.files[0]);
      };
      input.click();
    },
    loadFromURL = () => {
      if (
        urlInputValue.match(/^https?:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+$/)
      ) {
        overlayData.images.push(urlInputValue);
        setOverlayData({ ...overlayData });
        setUrlInputValue("");
        setUrlInputActive(false);
      }
    };
  const drawModeOnChange = useCallback(
    (value: string) => {
      overlayData.mode = value as objectFitArgs;
      setOverlayData({ ...overlayData });
    },
    [overlayData]
  );
  return (
    <>
      <Popup
        title={"背景"}
        close={() => setOverlayData({ ...overlayData, editing: false })}
      >
        <BackgroundImageDisplay />
        <div>
          <Button click={loadFromFile} text={"画像をパソコンから読み込む"} />
          <Button
            click={() => setUrlInputActive(true)}
            text={"画像をURLから読み込む"}
          />
        </div>
        <div>
          表示モード：
          <Dropdown
            change={drawModeOnChange}
            value={[
              { text: "contain", value: "contain" },
              { text: "cover", value: "cover" },
              { text: "fill", value: "fill" },
              { text: "none", value: "none" },
              { text: "scale-down", value: "scale-down" },
            ]}
            selected={overlayData.mode}
          />
          <Tips>
            <table className={Styles.tips}>
              <thead>
                <tr>
                  <th>モード名</th>
                  <th>効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>contain</td>
                  <td>
                    画像全体がちょうど収まるように縦横比を維持したまま表示します
                  </td>
                </tr>
                <tr>
                  <td>cover</td>
                  <td>
                    画像が動画全体をちょうど覆い隠すように縦横比を維持したまま表示します
                  </td>
                </tr>
                <tr>
                  <td>fill</td>
                  <td>画像を動画と同じサイズに引き伸ばして表示します</td>
                </tr>
                <tr>
                  <td>none</td>
                  <td>元画像のサイズのまま表示します</td>
                </tr>
                <tr>
                  <td>scale-down</td>
                  <td>
                    元画像が動画より小さければそのまま、そうでなければcontainと同様に縮小して表示します
                  </td>
                </tr>
              </tbody>
            </table>
          </Tips>
        </div>
      </Popup>
      {urlInputActive && (
        <Popup
          title={"URLを入力"}
          close={() => {
            setUrlInputActive(false);
          }}
        >
          <input
            className={Styles.urlInput}
            value={urlInputValue}
            onChange={(e) => setUrlInputValue(e.target.value)}
            pattern={"^https?://[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+$"}
          />
          <Button click={loadFromURL} text={"追加"} />
        </Popup>
      )}
    </>
  );
};
export default BackgroundPicker;
