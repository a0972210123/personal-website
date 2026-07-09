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
  {
    slug: 'week-02-inflation',
    title: 'W2 通膨與實質報酬',
    titleEn: 'W2 Inflation & Real Return',
    description: '通膨是「反向複利」：費雪方程式、購買力半衰期、CPI 怎麼讀，以及通膨對各類資產的影響。附「雙雪球賽跑」互動計算機與費曼學習法分享腳本。',
    tags: ['Q1 共同地基', '互動計算機'],
    date: '2026-07-15',
    url: '/projects/family-investing-course/week-02-inflation/',
  },
  {
    slug: 'week-03-interest-rates',
    title: 'W3 利率與殖利率曲線',
    titleEn: 'W3 Interest Rates & Yield Curve',
    description: '利率是所有資產的地心引力：政策傳導鏈、為什麼利率漲債券跌、存續期間、殖利率曲線倒掛與衰退預測。附「債券蹺蹺板」互動計算機與殖利率曲線切換。',
    tags: ['Q1 共同地基', '互動計算機'],
    date: '2026-07-22',
    url: '/projects/family-investing-course/week-03-interest-rates/',
  },
];
