// 給家人的投資課 — 52 週投資學習地圖的每週教材網頁。
// 單元為自包含 HTML，放在 public/projects/family-investing-course/<slug>/；
// 陣列順序＝課綱順序（W1 在前）；hub 頁依此順序渲染。
// 來源課綱與教材原稿見 repo 的 curriculum/（單元 md 為 curriculum/units/week-NN-slug.md）。
import type { OmsDoc } from './oneMoreStep';

export const familyInvestingCourseUnits: OmsDoc[] = [
  {
    slug: 'week-01-tvm',
    title: 'W1 複利與貨幣時間價值',
    titleEn: 'W1 Time Value of Money',
    description: '所有金融計算的第一塊磚：複利與折現、FV/PV/年金公式、72 法則。附互動複利計算機、猜謎揭曉與費曼學習法分享腳本。',
    tags: ['Q1 共同地基', '互動計算機'],
    date: '2026-07-08',
    url: '/projects/family-investing-course/week-01-tvm/',
  },
];
