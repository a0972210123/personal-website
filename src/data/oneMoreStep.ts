// One More Step long-form pieces — shared between /projects/one-more-step and /writing.
// `date` drives sort/display on the unified Writing hub (ISO yyyy-mm-dd). Adjust as needed.
export interface OmsDoc {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  tags: string[];
  date: string;       // publish date for the Writing hub
  url?: string;       // explicit path for static-HTML subpages; omit to use slug routing
}

export const oneMoreStep: OmsDoc[] = [
  {
    slug: 'symbolic-reminder',
    title: '我的符號：一份個人宣言',
    titleEn: 'My Symbol: A Personal Declaration',
    description: '從一個污點出發，疊建出十二層符號——這不是 LOGO 設計，這是我對「何謂能力」的哲學宣言。中英雙語。',
    tags: ['個人哲學', 'Personal Brand'],
    date: '2026-06-25',
    url: '/writing/symbolic-reminder',
  },
  {
    slug: 'quantum-photonics-investing',
    title: '矽光子 × 量子電腦 × PQC 投資地圖',
    titleEn: 'Silicon Photonics, Quantum & PQC Investing Map',
    description: '從 AppWorks AW#32 / AW#33 的 PQC 與矽光子趨勢出發，整理矽光子、量子電腦五大硬體路線、光子 EDA / 光運算的觀念地圖，附台股、美股對應投資標的總覽表。',
    tags: ['矽光子', '量子電腦', 'PQC', '投資'],
    date: '2026-06-25',
    url: '/projects/one-more-step/quantum-photonics-investing/',
  },
  {
    slug: 'aw32',
    title: 'AW#32 創投現場：19 家新創與下一個創業風向',
    titleEn: 'AW#32 Demo Day: 19 Startups & the Next Big Bet',
    description: 'AppWorks AW#32 × 緯創 Demo Day 完整解析：19 家新創、AW#33 四大 RFS（製造 AI／國防／鏈上金融／後量子密碼）、創辦人可信度與護城河矩陣，以及「下一個創業風向」分析。',
    tags: ['創投', '深科技', '趨勢'],
    date: '2026-06-17',
    url: '/projects/one-more-step/aw32/',
  },
  {
    slug: 'investment-notes',
    title: '台股 × 美股投資知識庫',
    titleEn: 'TW & US Stock Investment Notes',
    description: '從台股籌碼、法人解讀、可轉債、處置股，到美股三大指數、公司估值（P/E、EV/EBITDA、DCF）、財報深度解讀與 SaaS 績效指標，72 張互動知識卡片一次掌握。',
    tags: ['投資', '美股', '台股', '財報'],
    date: '2026-06-19',
    url: '/projects/one-more-step/investment-notes/',
  },
  {
    slug: 'boppps',
    title: 'BOPPPS × ISW 教學設計手冊',
    titleEn: 'BOPPPS Teaching Design Manual',
    description: '基於 ISW 框架的學習者中心教學設計：六大模組詳解、時間配置建議、線上工具對應，附 40 分鐘國小 AI Agent 課程完整範例與 10 篇關鍵文獻。',
    tags: ['教學設計', 'BOPPPS', 'ISW', '工作坊'],
    date: '2026-06-13',
    url: '/projects/one-more-step/boppps/',
  },
  {
    slug: 'ga4-guide',
    title: 'GA4 分析全攻略',
    titleEn: 'GA4 Complete Guide',
    description: '涵蓋漏斗分析、使用者行為、行銷歸因、爬蟲偵測到 BigQuery 進階功能，附 24 個術語速查與 30+ 官方及社群連結。中英雙語並列。',
    tags: ['GA4', '數據分析', '行銷'],
    date: '2026-06-05',
    url: '/projects/one-more-step/ga4-guide/',
  },
  {
    slug: 'lemon-squeezy',
    title: 'Lemon Squeezy 數位創業指南',
    titleEn: "Lemon Squeezy Creator's Guide",
    description: '從創作者經濟到開第一間網路商店：數位產品類型、平台功能全覽、結帳設定，以及讓你快速上手的互動測驗與行動清單。',
    tags: ['電商', '數位產品', '創業'],
    date: '2026-06-01',
    url: '/projects/one-more-step/lemon-squeezy/',
  },
  {
    slug: 'ip-governance-ai',
    title: 'IP 治理與 AI',
    titleEn: 'IP Governance & AI',
    description: '探討人工智慧時代的智慧財產權治理架構，涵蓋著作權、專利、開源授權等核心議題。',
    tags: ['IP 治理', 'AI', '法律'],
    date: '2026-06-06',
  },
  {
    slug: 'daniels-talk',
    title: '職涯四公式：才幹、人脈、領導與傳承',
    titleEn: 'Competence · Networking · Leadership · Legacy',
    description: '整理康寧科技大中華區總裁 曾崇凱 Daniel 的演講精華：四條職涯公式、Boss vs Leader、北極星思維、英雄之旅，以及三個實用演講技巧。',
    tags: ['職涯', 'Soft Skills', '領導力'],
    date: '2026-06-07',
    url: '/projects/one-more-step/daniels-talk/',
  },
];
