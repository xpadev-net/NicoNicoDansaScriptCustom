import React, { ChangeEvent, useContext, useState } from "react";
import Styles from "./LayerSelector.module.scss";
import { ReactSortable } from "react-sortablejs";
import layerUtil from "@/libraries/layerUtil";
import icons from "@/assets/icons";
import { layerContext } from "@/components/LayerContext";
import styled from "styled-components";

type colorProps = {
  bgColor: string;
};

const ColorDisplay = styled.label<colorProps>`
  background-color: ${(props) => props.bgColor};
`;

/**
 * レイヤー選択・並べ替え・色変更他
 * @constructor
 */
const LayerSelector = () => {
  const { layerData, setLayerData } = useContext(layerContext),
    [editingLayer, setEditingLayer] = useState<number>(-1),
    [editingLayerName, setEditingLayerName] = useState<string>("");
  if (!layerData || !setLayerData) return <></>;
  const onColorChange = (event: ChangeEvent<HTMLInputElement>, key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      layer.color = event.target.value;
      setLayerData([...layerData]);
    },
    onLayerNameChange = (key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      layer.text = editingLayerName;
      setLayerData([...layerData]);
      setEditingLayer(-1);
    },
    togglePos = (key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      layer.pos = layerUtil.togglePos(layer);
      setLayerData([...layerData]);
    },
    toggleFont = (key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      layer.font = layerUtil.toggleFont(layer.font);
      setLayerData([...layerData]);
    },
    toggleVisible = (key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      layer.visible = !layer.visible;
      setLayerData([...layerData]);
    },
    toggleSelected = (e: React.MouseEvent<HTMLDivElement>, key: number) => {
      const layer = layerData[key];
      if (!layer) return;
      if (e.ctrlKey || e.metaKey) {
        layer.selected = !layer.selected;
        if (
          layerData.reduce(
            (count, item) => count + Number(item.selected),
            0
          ) === 0
        )
          layer.selected = true;
      } else {
        for (const item of layerData) {
          item.selected = false;
        }

        layer.selected = true;
      }
      setLayerData([...layerData]);
    },
    remove = (key: number) => {
      if (!confirm(`削除してよろしいですか？`)) return;
      const layer = layerData,
        deletedLayer = layer.splice(key, 1),
        beforeLayer = layer[key - 1];
      if (
        layer.length > 0 &&
        deletedLayer[0]?.selected === true &&
        layer.reduce((count, item) => count + Number(item.selected), 0) === 0
      ) {
        if (beforeLayer) {
          beforeLayer.selected = true;
        } else {
          if (layer[0]) layer[0].selected = true;
        }
      }
      setLayerData([...layer]);
    };
  return (
    <div className={Styles.wrapper}>
      <table className={Styles.table}>
        <ReactSortable
          tag={"tbody"}
          list={layerData}
          setList={setLayerData}
          disabled={editingLayer !== -1}
        >
          {layerData.map((item, key) => (
            <tr
              className={`${Styles.tr} ${
                item.posList.includes(item.pos) ? "" : Styles.invalid
              } ${item.selected ? Styles.selected : ""}`}
              key={`${item.text}${key}`}
            >
              <td className={Styles.id}>{key + 1}</td>
              <td className={Styles.visible} onClick={() => toggleVisible(key)}>
                {item.visible ? icons.eye : icons.eyeClosed}
              </td>
              <td className={Styles.color}>
                <ColorDisplay
                  className={Styles.colorLabel}
                  bgColor={item.color}
                  htmlFor={`${Styles.tr}-${key}`}
                />
                <input
                  className={Styles.colorInput}
                  type="color"
                  id={`${Styles.tr}-${key}`}
                  onChange={(e) => onColorChange(e, key)}
                />
              </td>
              <th
                className={Styles.name}
                onClick={(e) => toggleSelected(e, key)}
                onDoubleClick={() => {
                  setEditingLayer(key);
                  setEditingLayerName(item.text);
                }}
              >
                {editingLayer === key ? (
                  <input
                    autoFocus
                    className={Styles.input}
                    value={editingLayerName}
                    onChange={(e) => setEditingLayerName(e.target.value)}
                    onBlur={() => onLayerNameChange(key)}
                  />
                ) : (
                  item.text
                )}
              </th>
              <td className={Styles.pos} onClick={() => togglePos(key)}>
                {item.pos}
              </td>
              <td className={Styles.font} onClick={() => toggleFont(key)}>
                {item.font}
              </td>
              <td className={Styles.delete} onClick={() => remove(key)}>
                {icons.delete}
              </td>
            </tr>
          ))}
        </ReactSortable>
      </table>
    </div>
  );
};
export default LayerSelector;
