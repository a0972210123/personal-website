// Phase C — enum/category dictionaries for Sheet-driven content.
// Imported by page frontmatter and passed into client <script define:vars> blocks.
// Client helper convention: tr(map, v) returns map[v] when lang==='en' && present, else v (zh fallback).

export const EVENT_TYPE: Record<string, string> = {
  '演講': 'Lecture',
  '工作坊': 'Workshop',
  '分享': 'Sharing',
  '司儀': 'Host / MC',
  '影片製作': 'Video Production',
  '競賽': 'Competition',
  '競賽作品': 'Competition',
  'Podcast': 'Podcast',
  '教學': 'Teaching',
  '課程': 'Course',
  '訪談': 'Interview',
};

export const MODE: Record<string, string> = {
  '線上': 'Online',
  '實體': 'In-person',
  '混合': 'Hybrid',
};

export const LANG: Record<string, string> = {
  '中文': 'Mandarin',
  '英文': 'English',
  '混合': 'Bilingual',
};

export const EDU: Record<string, string> = {
  '國中': 'Junior High',
  '高中': 'High School',
  '學士（大學）': 'Undergraduate',
  '碩士和以上': 'Graduate+',
  '業界': 'Industry',
  '研究': 'Research',
  '學生': 'Students',
  '通識': 'General',
  '混合': 'Mixed',
};

export const ORG_TYPE: Record<string, string> = {
  '學校': 'School',
  '政府單位': 'Government',
  '企業': 'Enterprise',
  '學生社團': 'Student Club',
  '自媒體': 'Self-media',
};

export const AWARD: Record<string, string> = {
  '一等': '1st Prize',
  '二等': '2nd Prize',
  '三等': '3rd Prize',
  '一等獎': '1st Prize',
  '二等獎': '2nd Prize',
  '三等獎': '3rd Prize',
  '社會責任創新獎': 'Social Responsibility Innovation Award',
  '特優': 'Outstanding',
  '優等': 'Excellence',
  '佳作': 'Honorable Mention',
  '冠軍': 'Champion',
  '亞軍': '2nd Place',
  '季軍': '3rd Place',
  '金獎': 'Gold',
  '銀獎': 'Silver',
  '銅獎': 'Bronze',
};
