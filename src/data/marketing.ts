// Marketing Column units — the 52-week marketing learning roadmap made public.
// Same shape as OmsDoc; units are self-contained HTML under public/projects/marketing/<slug>/.
import type { OmsDoc } from './oneMoreStep';

export const marketingUnits: OmsDoc[] = [
  {
    slug: 'marketing-foundations',
    title: '行銷基礎與 2026 趨勢',
    titleEn: 'Marketing Foundations & Trends',
    description: '漏斗演進三部曲（AIDA→AARRR→Flywheel）、AEO/GEO 與 zero-click 時代的對策，加上 JTBD、StoryBrand、Hook Model 三個必學框架。行銷學習地圖 W1-2。',
    tags: ['行銷', '框架', 'AEO/GEO'],
    date: '2026-07-04',
    url: '/projects/marketing/marketing-foundations/',
  },
  {
    slug: 'social-platforms-2026',
    title: '社交平台 2026 生態',
    titleEn: 'Social Platform Ecosystems 2026',
    description: 'TikTok/Reels/Shorts 演算法差異、LinkedIn dwell time 機制、小紅書種草文化與 Pinterest 長尾流量——八大平台的經營邏輯與選擇框架。行銷學習地圖 W3-5。',
    tags: ['社群經營', '演算法', '短影音'],
    date: '2026-07-04',
    url: '/projects/marketing/social-platforms-2026/',
  },
  {
    slug: 'tech-publishing',
    title: '技術人發文平台：文化與禁忌',
    titleEn: 'Tech Publishing Platforms',
    description: 'Hacker News、Product Hunt、Reddit 的生存規則，canonical 跨發策略、build in public 的透明度取捨，與 GitHub README 行銷。行銷學習地圖 W6-7。',
    tags: ['開發者行銷', 'Launch', 'Build in Public'],
    date: '2026-07-04',
    url: '/projects/marketing/tech-publishing/',
  },
];
