import { layerTemplates } from "@/@types/types";

/**
 * レイヤーのテンプレート
 * id: 識別名
 * commands: 適用するコマンド
 * pos: 初期位置
 * posList: テンプレが対応している位置
 * text: テンプレート名
 * value: 旧識別名
 * areaWidth: 横幅(px)
 * width: 横幅(全角文字数)
 * height: 行数
 * critical: 臨界幅
 * top: 各位置ごとのtop(px)
 * left: left(px)
 * scale: x/yそれぞれ
 * size: [{
 *   font: font-size(px)
 *   line: line-height(px)
 *   lineCount: 行数
 *   height: height(px)
 *   count: 何回繰り返すか
 * }]
 */
const Templates: layerTemplates = {
  be9: {
    id: "be9",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "naka", "shita"],
    text: "big ender 9",
    value: "big_ue_ender_full_gothic_W17_L9",
    areaWidth: 622,
    width: 17,
    height: 9,
    critical: false,
    top: { ue: 3, naka: -10, shita: -23 }, //todo: ue:3?
    left: 9,
    scale: { x: 1, y: 1.009 },
    size: [{ font: 36.53, line: 42, lineCount: 9 }],
  },
  be10_1: {
    id: "be10_1",
    commands: ["big", "ender", "full"],
    pos: "naka",
    posList: ["naka"],
    text: "big ender 10 流",
    value: "big_naka_ender_full_gothic_W17_L10_流",
    areaWidth: 660,
    width: 17,
    height: 10,
    critical: false,
    top: { ue: 0, naka: -31, shita: 0 }, //todo: ue:3?
    left: 9,
    scale: { x: 1, y: 1.01 },
    size: [{ font: 36.55, line: 42, lineCount: 10 }],
  },
  be10_2: {
    id: "be10_2",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 10 臨",
    value: "big_ue_ender_full_gothic_W18_L10_臨",
    areaWidth: 625,
    width: 18,
    height: 10,
    critical: true,
    top: { ue: 3, naka: 0, shita: -46 },
    left: 1,
    scale: { x: 1.02, y: 1.014 },
    size: [{ font: 34, line: 40, lineCount: 10 }],
  },
  be11: {
    id: "be11",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 11 臨",
    value: "big_ue_ender_full_gothic_W20_L11_臨",
    areaWidth: 635,
    width: 20,
    height: 11,
    critical: true,
    top: { ue: 2, naka: 0, shita: -37 },
    left: 0,
    scale: { x: 1.031, y: 1 },
    size: [{ font: 30, line: 36, lineCount: 11 }],
  },
  be12: {
    id: "be12",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 12 臨",
    value: "big_ue_ender_full_gothic_W22_L12_臨",
    areaWidth: 635,
    width: 22,
    height: 12,
    critical: true,
    top: { ue: 2, naka: 0, shita: -34 },
    left: 1,
    scale: { x: 1.004, y: 0.995 },
    size: [{ font: 28, line: 33, lineCount: 12 }],
  },
  be13: {
    id: "be13",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 13 臨",
    value: "big_ue_ender_full_gothic_W25_L13_臨",
    areaWidth: 626,
    width: 25,
    height: 13,
    critical: true,
    top: { ue: 2, naka: 0, shita: -27 },
    left: 3,
    scale: { x: 1.012, y: 0.989 },
    size: [{ font: 25, line: 30, lineCount: 13 }],
  },
  be15: {
    id: "be15",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 15 臨",
    value: "big_ue_ender_full_gothic_W29_L15_臨",
    areaWidth: 610,
    width: 29,
    height: 15,
    critical: true,
    top: { ue: 0, naka: 0, shita: -26 },
    left: 7,
    scale: { x: 1.026, y: 0.987 },
    size: [{ font: 21, line: 26, lineCount: 15 }],
  },
  be16: {
    id: "be16",
    commands: ["big", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big ender 16 臨",
    value: "big_ue_ender_full_gothic_W31_L16_臨",
    areaWidth: 640,
    width: 31,
    height: 16,
    critical: true,
    top: { ue: 1, naka: 0, shita: -24 },
    left: 0,
    scale: { x: 1.03, y: 0.997 },
    size: [{ font: 20, line: 24, lineCount: 16 }],
  },
  b16: {
    id: "b16",
    commands: ["big", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "big 16",
    value: "big_ue_full_gothic_W34_L16",
    areaWidth: 625,
    width: 34,
    height: 16,
    critical: false,
    top: { ue: 2, naka: 0, shita: 2 },
    left: 1,
    scale: { x: 1.019, y: 0.973 },
    size: [{ font: 18.4, line: 23, lineCount: 16 }],
  },
  b17: {
    id: "b17",
    commands: ["big", "full"],
    pos: "naka",
    posList: ["naka"],
    text: "big 17 流",
    value: "big_naka_full_gothic_W34_L17_流",
    areaWidth: 627,
    width: 34,
    height: 17,
    critical: false,
    top: { ue: 0, naka: -10, shita: 0 },
    left: 0,
    scale: { x: 1.019, y: 0.973 },
    size: [{ font: 18.4, line: 23, lineCount: 17 }],
  },
  me14: {
    id: "me14",
    commands: ["medium", "ender", "full"],
    pos: "ue",
    posList: ["ue", "naka", "shita"],
    text: "medium ender 14",
    value: "medium_ue_ender_full_gothic_W25_L14",
    areaWidth: 632,
    width: 25,
    height: 14,
    critical: false,
    top: { ue: 3, naka: -9, shita: -21 }, //todo ue:2?
    left: 3,
    scale: { x: 1.001, y: 1.004 },
    size: [{ font: 25.3, line: 27, lineCount: 14 }],
  },
  me15: {
    id: "me15",
    commands: ["medium", "ender", "full"],
    pos: "naka",
    posList: ["naka"],
    text: "medium ender 15 流",
    value: "medium_naka_ender_full_gothic_W24_L15_流",
    areaWidth: 609,
    width: 24,
    height: 15,
    critical: false,
    top: { ue: 0, naka: -22, shita: 0 },
    left: 16,
    scale: { x: 1, y: 1.003 },
    size: [{ font: 25.3, line: 27, lineCount: 15 }],
  },
  me19: {
    id: "me19",
    commands: ["medium", "ender", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "medium ender 19 臨",
    value: "medium_ue_ender_full_gothic_W34_L19_臨",
    areaWidth: 592,
    width: 34,
    height: 19,
    critical: true,
    top: { ue: 2, naka: 0, shita: -18 },
    left: 11,
    scale: { x: 1.046, y: 0.991 },
    size: [{ font: 17, line: 20, lineCount: 19 }],
  },
  m26: {
    id: "m26",
    commands: ["medium", "full"],
    pos: "ue",
    posList: ["ue", "naka", "shita"],
    text: "medium 26",
    value: "medium_ue_full_gothic_W40_L26",
    areaWidth: 561,
    width: 40,
    height: 26,
    critical: false,
    top: { ue: 1, naka: -3, shita: -7 },
    left: 57,
    scale: { x: 0.938, y: 1.006 },
    size: [{ font: 14, line: 14, lineCount: 26 }],
  },
  m27: {
    id: "m27",
    commands: ["medium", "full"],
    pos: "naka",
    posList: ["naka"],
    text: "medium 27 流",
    value: "medium_naka_full_gothic_W40_L27_流",
    areaWidth: 561,
    width: 40,
    height: 27,
    critical: false,
    top: { ue: 0, naka: -10, shita: 0 },
    left: 57,
    scale: { x: 0.938, y: 1.006 },
    size: [{ font: 14, line: 14, lineCount: 27 }],
  },
  s21: {
    id: "s21",
    commands: ["small", "ender", "full"],
    pos: "ue",
    posList: ["ue"],
    text: "small ender 21",
    value: "small_ue_ender_full_gothic_W37_L21",
    areaWidth: 593,
    width: 37,
    height: 21,
    critical: false,
    top: { ue: 3, naka: 0, shita: 0 },
    left: 8,
    scale: { x: 1.055, y: 1.059 },
    size: [{ font: 16, line: 16, lineCount: 21 }],
  },
  s22: {
    id: "s22",
    commands: ["small", "ender", "full"],
    pos: "naka",
    posList: ["naka"],
    text: "small ender 22 流",
    value: "small_naka_ender_full_gothic_W37_L22_流",
    areaWidth: 593,
    width: 37,
    height: 22,
    critical: false,
    top: { ue: 0, naka: -6, shita: 0 },
    left: 8,
    scale: { x: 1.055, y: 1.06 },
    size: [{ font: 16, line: 16, lineCount: 22 }],
  },
  s38: {
    id: "s38",
    commands: ["small"],
    pos: "ue",
    posList: ["ue"],
    text: "small 38",
    value: "small_ue_gothic_W46_L38",
    areaWidth: 462,
    width: 46,
    height: 38,
    critical: false,
    top: { ue: 2, naka: 0, shita: 0 },
    left: 104,
    scale: { x: 0.938, y: 0.94 },
    size: [{ font: 10, line: 10, lineCount: 38 }],
  },
  s39: {
    id: "s39",
    commands: ["small"],
    pos: "naka",
    posList: ["naka"],
    text: "small 39 流",
    value: "small_naka_gothic_W46_L39_流",
    areaWidth: 480,
    width: 46,
    height: 39,
    critical: false,
    top: { ue: 0, naka: -4, shita: 0 },
    left: 103,
    scale: { x: 0.937, y: 0.942 },
    size: [{ font: 10, line: 10, lineCount: 39 }],
  },
  m22: {
    id: "m22",
    commands: ["medium", "full"],
    pos: "shita",
    posList: ["shita"],
    text: "medium shita W50",
    value: "medium_shita_full_gothic_W50_C22",
    areaWidth: 641,
    width: 50,
    height: 22,
    critical: true,
    top: { ue: 0, naka: 0, shita: 4.8 },
    left: 14,
    scale: { x: 0.952, y: 1 },
    size: [{ font: 12.8, line: 16, lineCount: 1, count: 22, height: 16.2 }],
  },
  s18_1: {
    id: "s18_1",
    commands: ["small", "full"],
    pos: "ue",
    posList: ["ue", "shita"],
    text: "small ue W37 L2",
    value: "small_ue_full_gothic_W37_L2_C9",
    areaWidth: 593,
    width: 37,
    height: 18,
    critical: false,
    top: { ue: 2, naka: 0, shita: -24.3 },
    left: 7,
    scale: { x: 1.055, y: 1.04 },
    size: [{ font: 16, line: 17, lineCount: 2, height: 38.7, count: 9 }],
  },
  s31: {
    id: "s31",
    commands: ["small"],
    pos: "ue",
    posList: ["ue"],
    text: "small ue W54",
    value: "small_ue_gothic_W54_C31",
    areaWidth: 540,
    width: 54,
    height: 31,
    critical: true,
    top: { ue: -1, naka: 0, shita: 0 },
    left: 91,
    scale: { x: 0.826, y: 1 },
    size: [{ font: 10.2, line: 16, lineCount: 1, height: 16, count: 31 }],
  },
  tm26: {
    id: "tm26",
    commands: ["medium", "full"],
    pos: "ue",
    posList: ["ue", "naka", "shita"],
    text: "Tokome medium 26",
    value: "Tokome_medium_ue_full_gothic_W47_L26",
    areaWidth: 652,
    width: 47,
    height: 26,
    critical: false,
    top: { ue: 2, naka: -3, shita: -7 },
    left: 12,
    scale: { x: 0.948, y: 1.007 },
    size: [{ font: 13.85, line: 14, lineCount: 26 }],
  },
  ts38: {
    id: "ts38",
    commands: ["small", "full"],
    pos: "ue",
    posList: ["ue"],
    text: "Tokome small 38",
    value: "Tokome_small_ue_full_gothic_W68_L38",
    areaWidth: 700,
    width: 68,
    height: 38,
    critical: false,
    top: { ue: 2, naka: 0, shita: 0 },
    left: 0,
    scale: { x: 0.937, y: 0.942 },
    size: [{ font: 10, line: 10, lineCount: 38 }],
  },
  ts39: {
    id: "ts39",
    commands: ["small"],
    pos: "naka",
    posList: ["naka"],
    text: "Tokome small 39 流",
    value: "Tokome_small_naka_full_gothic_W68_L39_流",
    areaWidth: 700,
    width: 68,
    height: 39,
    critical: false,
    top: { ue: 0, naka: -4, shita: 0 },
    left: 0,
    scale: { x: 0.937, y: 0.942 },
    size: [{ font: 10, line: 10, lineCount: 39 }],
  },
  s18_3: {
    id: "s18_3",
    commands: ["small"],
    pos: "shita",
    posList: ["shita"],
    text: "small shita W27 L2&L1",
    value: "small_shita_gothic_W27_L2:7_L1:4_C11",
    areaWidth: 515,
    width: 27,
    height: 18,
    critical: false,
    top: { ue: 0, naka: 0, shita: 2 },
    left: 92,
    scale: { x: 0.887, y: 0.978 },
    size: [
      { font: 19, line: 22, lineCount: 1, height: 22.2, count: 4 },
      { font: 19, line: 20, lineCount: 2, height: 39.7, count: 7 },
    ],
  },
  s18_4: {
    id: "s18_4",
    commands: ["small","full"],
    pos: "shita",
    posList: ["shita"],
    text: "small shita W37 L2&L1",
    value: "small_shita_full_gothic_W37_L2:7_L1:4_C11",
    areaWidth: 704,
    width: 37,
    height: 18,
    critical: false,
    top: { ue: 0, naka: 0, shita: 2 },
    left: 7,
    scale: { x: 0.888, y: 0.978 },
    size: [
      { font: 19, line: 22, lineCount: 1, height: 22.2, count: 4 },
      { font: 19, line: 20, lineCount: 2, height: 39.7, count: 7 },
    ],
  },
};
export default Templates;
