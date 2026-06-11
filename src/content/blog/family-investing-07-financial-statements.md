---
title: 財務報表三表——所有投資數字的源頭
description: 損益表、資產負債表、現金流量表的結構與關聯；從第一線的營收、成本，一路計算到 EPS、ROIC、本益比，用公式樹狀圖完整呈現所有投資指標的計算脈絡。
pubDate: 2026-06-28
lang: zh
series: family-investing
tags: [財務報表, 損益表, 資產負債表, 現金流量表, 公式]
draft: false
---

前幾篇用過 EPS、P/E、ROIC 這些詞——你可能注意到，這些數字都是從某處「計算來的」。

這篇把所有公式的血緣關係一次整理清楚：從公司賣產品收到的第一筆錢，到你在看盤軟體上看到的本益比，中間每個環節怎麼連起來。

---

## 三張表，各回答一個問題

上市公司每季必須公開三份財務報表，分別回答三個不同的問題：

<div class="stmt-grid">
  <div class="stmt-card is">
    <div class="stmt-icon">📊</div>
    <div class="stmt-title">損益表</div>
    <div class="stmt-en">Income Statement</div>
    <div class="stmt-q">「這段期間，公司賺了多少錢？」</div>
    <div class="stmt-period">期間報表——一季或一年的累計</div>
  </div>
  <div class="stmt-card bs">
    <div class="stmt-icon">⚖️</div>
    <div class="stmt-title">資產負債表</div>
    <div class="stmt-en">Balance Sheet</div>
    <div class="stmt-q">「這個時間點，公司有什麼、欠什麼？」</div>
    <div class="stmt-period">時間點快照——每季末的靜止畫面</div>
  </div>
  <div class="stmt-card cf">
    <div class="stmt-icon">💧</div>
    <div class="stmt-title">現金流量表</div>
    <div class="stmt-en">Cash Flow Statement</div>
    <div class="stmt-q">「現金實際怎麼流進、流出的？」</div>
    <div class="stmt-period">期間報表——追蹤現金的實際移動</div>
  </div>
</div>

三張表不是獨立的。**損益表的淨利會流入資產負債表的股東權益；現金流量表的期末現金等於資產負債表的現金科目。** 拆開看是三份文件，合在一起是同一家公司的完整財務影像。

---

## 公式樹：從本益比到第一線營收

兩種圖示從不同角度呈現同一套關係——切換查看：

<div class="dtabs">
<div class="dtab-nav">
  <button class="dtab-btn dtab-active" data-panel="panel-tree">📐 公式層級樹</button>
  <button class="dtab-btn" data-panel="panel-flow">🔗 三表關聯圖</button>
</div>

<div class="dtab-panel dtab-active" id="panel-tree">
<p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 0.9rem;">由上往下讀：第一層是估值倍數，往下追溯到最底層第一線營運數字。顏色代表來源報表：</p>

<div class="ftree">
  <div class="ftree-legend">
    <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#3b82f6"></span>損益表</span>
    <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#f59e0b"></span>資產負債表</span>
    <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#10b981"></span>現金流量表</span>
    <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#8b5cf6"></span>市場價格＋財報</span>
    <span class="ftree-legend-item"><span class="ftree-legend-dot" style="background:#64748b"></span>跨表衍生</span>
  </div>

  <!-- Tier 4: Valuation Multiples (top / investor-facing) -->
  <div class="ftree-tier">
    <div class="ftree-tier-header">第一層：估值倍數（投資人直接使用）</div>
    <div class="ftree-nodes">
      <div class="ftree-node mkt">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">本益比</div>
          <div class="ftree-node-en">P/E Ratio</div>
          <div class="ftree-node-formula">= 股價 ÷ EPS</div>
        </div>
      </div>
      <div class="ftree-node mkt">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">股價淨值比</div>
          <div class="ftree-node-en">P/B Ratio</div>
          <div class="ftree-node-formula">= 股價 ÷ 每股淨值</div>
        </div>
      </div>
      <div class="ftree-node mkt">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">EV/EBITDA</div>
          <div class="ftree-node-en">企業價值倍數</div>
          <div class="ftree-node-formula">= (市值+淨負債) ÷ EBITDA</div>
        </div>
      </div>
      <div class="ftree-node mkt">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">殖利率</div>
          <div class="ftree-node-en">Dividend Yield</div>
          <div class="ftree-node-formula">= 每股股息 ÷ 股價</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ftree-arrow">↓ 計算依據</div>

  <!-- Tier 3: Derived / Return Metrics -->
  <div class="ftree-tier">
    <div class="ftree-tier-header">第二層：衍生指標 / 報酬率</div>
    <div class="ftree-nodes">
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">每股盈餘</div>
          <div class="ftree-node-en">EPS</div>
          <div class="ftree-node-formula">= 淨利 ÷ 流通股數</div>
        </div>
      </div>
      <div class="ftree-node bs">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">每股淨值</div>
          <div class="ftree-node-en">Book Value / Share</div>
          <div class="ftree-node-formula">= 股東權益 ÷ 流通股數</div>
        </div>
      </div>
      <div class="ftree-node cross">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">股東權益報酬率</div>
          <div class="ftree-node-en">ROE</div>
          <div class="ftree-node-formula">= 淨利 ÷ 股東權益</div>
        </div>
      </div>
      <div class="ftree-node cross">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">投入資本回報率</div>
          <div class="ftree-node-en">ROIC</div>
          <div class="ftree-node-formula">= NOPAT ÷ 投入資本<br><span style="font-size:0.65rem;opacity:0.8">NOPAT = EBIT×(1−稅率)</span></div>
        </div>
      </div>
      <div class="ftree-node cf">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">自由現金流</div>
          <div class="ftree-node-en">Free Cash Flow</div>
          <div class="ftree-node-formula">= 營業現金流 − CapEx</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ftree-arrow">↓ 計算依據</div>

  <!-- Tier 2: Core Financial Numbers -->
  <div class="ftree-tier">
    <div class="ftree-tier-header">第三層：財報核心數字</div>
    <div class="ftree-nodes">
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">淨利</div>
          <div class="ftree-node-en">Net Income</div>
          <div class="ftree-node-formula">= EBIT − 利息 ± 業外損益 − 所得稅</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">EBIT</div>
          <div class="ftree-node-en">稅前息前盈餘</div>
          <div class="ftree-node-formula">= 毛利 − 營業費用</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">EBITDA</div>
          <div class="ftree-node-en">息稅折舊攤銷前盈餘</div>
          <div class="ftree-node-formula">= EBIT + 折舊攤銷</div>
        </div>
      </div>
      <div class="ftree-node bs">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">股東權益</div>
          <div class="ftree-node-en">Shareholders' Equity</div>
          <div class="ftree-node-formula">= 總資產 − 總負債</div>
        </div>
      </div>
      <div class="ftree-node cf">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">營業現金流</div>
          <div class="ftree-node-en">Operating Cash Flow</div>
          <div class="ftree-node-formula">= 淨利 + 折舊 ± 營運資金變動</div>
        </div>
      </div>
    </div>
  </div>

  <div class="ftree-arrow">↓ 計算依據</div>

  <!-- Tier 1: Operational Foundation (bottom) -->
  <div class="ftree-tier">
    <div class="ftree-tier-header">第四層：第一線營運數字（財報最底層）</div>
    <div class="ftree-nodes">
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">營業收入</div>
          <div class="ftree-node-en">Revenue</div>
          <div class="ftree-node-formula">賣出產品/服務的總金額</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">銷貨成本</div>
          <div class="ftree-node-en">COGS</div>
          <div class="ftree-node-formula">直接生產成本（原料、人工、製費）</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">毛利</div>
          <div class="ftree-node-en">Gross Profit</div>
          <div class="ftree-node-formula">= 營業收入 − 銷貨成本</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">營業費用</div>
          <div class="ftree-node-en">Operating Expenses</div>
          <div class="ftree-node-formula">銷售管理費用 + 研發費用</div>
        </div>
      </div>
      <div class="ftree-node is">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">折舊攤銷</div>
          <div class="ftree-node-en">D&amp;A</div>
          <div class="ftree-node-formula">固定資產 / 無形資產攤提費用<br><span style="font-size:0.65rem;opacity:0.8">費用但非現金支出</span></div>
        </div>
      </div>
      <div class="ftree-node bs">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">總資產</div>
          <div class="ftree-node-en">Total Assets</div>
          <div class="ftree-node-formula">流動資產 + 非流動資產</div>
        </div>
      </div>
      <div class="ftree-node bs">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">總負債</div>
          <div class="ftree-node-en">Total Liabilities</div>
          <div class="ftree-node-formula">流動負債 + 非流動負債</div>
        </div>
      </div>
      <div class="ftree-node cf">
        <div class="ftree-node-inner">
          <div class="ftree-node-name">資本支出</div>
          <div class="ftree-node-en">CapEx</div>
          <div class="ftree-node-formula">購買廠房、設備的現金支出</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div><!-- end panel-tree -->

<div class="dtab-panel" id="panel-flow">
<p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 0.9rem;">三大報表為主節點（藍=損益表、橙=資產負債表、綠=現金流量表），跨表箭頭顯示數字的實際流向，底部為衍生指標。設計概念參考林明樟（MJ Lin）財報圖示化教學法。</p>
<div class="sflow-wrap">
  <div class="sflow-stmts">
    <div class="sflow-stmt is">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">📊</span>
        <span class="sflow-stmt-title">損益表</span>
        <span class="sflow-stmt-en">Income Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">營業收入 <span class="sflow-num">Revenue</span></div>
        <div class="sflow-line sub">− 銷貨成本 COGS</div>
        <div class="sflow-line result">毛利 <span class="sflow-num">Gross Profit</span></div>
        <div class="sflow-line sub">− 營業費用 OpEx</div>
        <div class="sflow-line result">EBIT</div>
        <div class="sflow-line sub">+ 折舊攤銷 D&amp;A</div>
        <div class="sflow-line result">EBITDA</div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">淨利 Net Income →</div>
      </div>
    </div>
    <div class="sflow-stmt bs">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">⚖️</span>
        <span class="sflow-stmt-title">資產負債表</span>
        <span class="sflow-stmt-en">Balance Sheet</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line">總資產 <span class="sflow-num">Assets</span></div>
        <div class="sflow-line sub">流動資產（含現金）</div>
        <div class="sflow-line sub">非流動資產</div>
        <div class="sflow-line">總負債 <span class="sflow-num">Liabilities</span></div>
        <div class="sflow-sep"></div>
        <div class="sflow-line result key">股東權益 Equity</div>
        <div class="sflow-eq">資產 = 負債 + 股東權益</div>
      </div>
    </div>
    <div class="sflow-stmt cf">
      <div class="sflow-stmt-head">
        <span class="sflow-icon">💧</span>
        <span class="sflow-stmt-title">現金流量表</span>
        <span class="sflow-stmt-en">Cash Flow Statement</span>
      </div>
      <div class="sflow-stmt-body">
        <div class="sflow-line sub">± 折舊 ± 營運資金變動</div>
        <div class="sflow-line result key">營業現金流 OCF</div>
        <div class="sflow-line sub">− 資本支出 CapEx</div>
        <div class="sflow-line result">自由現金流 FCF</div>
      </div>
    </div>
  </div>
  <div class="sflow-connections">
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">損益表 · 淨利</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">資產負債表 · 保留盈餘</span>
      <span class="sflow-conn-label">淨利轉入股東權益（每期末累計）</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge is">損益表 · 淨利</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge cf">現金流量表 · OCF</span>
      <span class="sflow-conn-label">間接法：淨利為現金流量表起算點</span>
    </div>
    <div class="sflow-conn">
      <span class="sflow-conn-badge cf">現金流量表 · 期末現金</span>
      <span class="sflow-conn-arrow">→</span>
      <span class="sflow-conn-badge bs">資產負債表 · 現金科目</span>
      <span class="sflow-conn-label">期末現金餘額恆等於資產負債表現金（三表勾稽）</span>
    </div>
  </div>
  <div class="sflow-derived-section">
    <div class="sflow-derived-title">↓ 衍生指標與估值倍數</div>
    <div class="sflow-derived-grid">
      <span class="sflow-chip is">EPS</span>
      <span class="sflow-chip is">P/E</span>
      <span class="sflow-chip is">ROE</span>
      <span class="sflow-chip bs">每股淨值 BVPS</span>
      <span class="sflow-chip bs">P/B</span>
      <span class="sflow-chip cf">FCF</span>
      <span class="sflow-chip cf">DCF 估值</span>
      <span class="sflow-chip cross">ROIC</span>
      <span class="sflow-chip cross">EV/EBITDA</span>
    </div>
  </div>
</div>
</div><!-- end panel-flow -->

</div><!-- end .dtabs -->

---

## 走一遍樹狀圖：每一層在說什麼

### 第四層：第一線營運數字

這是損益表的起點，和公司每天的業務直接掛鉤。

**毛利率（Gross Margin）** 是第一個關鍵指標：

<div class="formula">
毛利率 = 毛利 ÷ 營業收入 = (營業收入 − 銷貨成本) ÷ 營業收入
</div>

毛利率反映定價能力和生產效率。台積電長年毛利率超過 50%，代表每賣 100 元只需花不到 50 元的直接生產成本——護城河的財務信號之一。一般製造業毛利率可能只有 15–25%。

**折舊攤銷（D&A）** 是財報最容易被忽略的項目：工廠設備買的時候付了現金，但費用是分幾十年「攤提」在損益表上。**折舊是費用，但不是現金支出。** 這就是為什麼損益表的淨利和現金流量表的現金不一樣。

### 第三層：財報核心數字

**EBIT（稅前息前盈餘）** 把「借了多少錢（利息）」和「稅率」剔除，讓不同資本結構的公司更可比較。財報上常見的「營業利益（Operating Income）」在絕大多數情況下與 EBIT 相當接近，但 EBIT 嚴格上還包含業外損益，兩者可能有小差異——閱讀台灣上市公司財報時，看「營業利益」即可。

**EBITDA** 再加回折舊攤銷，常用於 M&A（企業併購）的估值，因為不同公司的折舊政策不同，加回後更可比。但 **EBITDA 不等於現金流**——因為公司仍需要真實的 CapEx 來維修和更新設備。

### 第二層：衍生指標

<div class="callout">
  <strong>ROE 的 DuPont 拆解（三因子）</strong><br><br>
  <code>ROE = 淨利率 × 資產周轉率 × 財務槓桿</code><br>
  <code style="font-size:0.8rem;">= (淨利÷營收) × (營收÷總資產) × (總資產÷股東權益)</code><br><br>
  高 ROE 可以來自三條完全不同的路：(1) 高利潤率（台積電、奢侈品牌），(2) 高資產周轉率（零售商、快消品），(3) 高財務槓桿（銀行、高負債公司）。同樣的 ROE 數字，風險性質截然不同。
</div>

**ROIC（投入資本回報率）** 比 ROE 更精準：ROE 可以用借錢（槓桿）人為拉高，ROIC 計算的是真正「投入的資本」賺了多少：

<div class="formula">
NOPAT = EBIT × (1 − 稅率)　　←剔除利息，只看本業回報<br>
投入資本 = 股東權益 + 有息負債（銀行借款＋公司債）<br>
ROIC = NOPAT ÷ 投入資本<br><br>
（分析師通常用「期初+期末投入資本 ÷ 2」的平均值作為分母，以反映全年平均水準）
</div>

ROIC 長期超過 15%，通常代表護城河存在（上一篇的核心論點）。

**自由現金流（FCF）** 是很多職業投資人最重視的指標，因為它代表公司在維持現有業務後真正「剩下」的現金：

<div class="formula">
FCF = 營業現金流（OCF）− 資本支出（CapEx）
</div>

護城河寬的公司不需要大量 CapEx 就能維持競爭地位，FCF 因此更高。FCF 也比淨利難以用會計手段美化——這就是為什麼它被稱為「最誠實的指標」。

### 第一層：估值倍數

這層需要**市場股價**加入計算，是財務分析和市場情緒的交界點：

- **P/E（本益比）**：市場願意為每 1 元獲利付多少倍？（我們在第四篇已詳細討論）
- **P/B（股價淨值比）**：市場對公司資產的評價是帳面價值的幾倍？P/B < 1 通常表示市場預期該公司的 ROE 將低於資金成本，或資產存在減損疑慮——並非單純「公司資產不值帳面數字」。
- **EV/EBITDA**：常用於跨公司比較，因為剔除了資本結構差異。EV = 市值 + 有息負債（銀行借款＋公司債）− 現金及約當現金。注意：淨負債不是「總負債 − 現金」，而是「**有息負債** − 現金」，兩者差距可能很大。
- **殖利率**：每年發放的股息相對股價的比例，強調現金回報。

---

## 為什麼「有獲利的公司」也可能倒閉？

這是財報最反直覺的地方，也是現金流量表存在的核心原因。

<div class="callout">
  <strong>應計制（Accrual Accounting）vs. 現金制</strong><br><br>
  損益表遵循「應計制」：收入在<strong>交貨或提供服務時</strong>認列，不管有沒有收到錢。<br><br>
  例：你在 12 月出貨給大客戶，發了 800 萬元的發票，但客戶 90 天後才付款——損益表上 12 月就認列了 800 萬收入，但現金要到隔年 3 月才進帳。<br><br>
  一家快速成長的公司，可能帳面獲利漂亮，但應收帳款暴增、庫存積壓、CapEx 過重，導致現金持續流出。公司倒閉不是因為「帳面虧損」，而是因為「付不出薪水」。
</div>

這就是為什麼要同時看淨利和 FCF。**淨利和 FCF 長期嚴重背離，是財報品質的警訊。**

---

## 台積電 2023 年的數字對照

用公式樹對照台積電 2023 年的實際數字：

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">2.16 兆</div>
    <div class="stat-label">營業收入<br>Revenue（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">54.4%</div>
    <div class="stat-label">毛利率<br>Gross Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">42.6%</div>
    <div class="stat-label">營業利益率<br>Operating Margin</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">8,385 億</div>
    <div class="stat-label">淨利<br>Net Income（TWD）</div>
  </div>
</div>

<div class="stat-row">
  <div class="stat-box">
    <div class="stat-number">32.34 元</div>
    <div class="stat-label">EPS（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~24%</div>
    <div class="stat-label">ROIC</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">約 3,600 億</div>
    <div class="stat-label">自由現金流 FCF<br>（TWD）</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">~18 倍</div>
    <div class="stat-label">P/E<br>（2023 年底）</div>
  </div>
</div>

注意 FCF（約 3,600 億）遠低於淨利（8,385 億）——這不是壞事，而是台積電正在大規模擴廠（每年 CapEx 超過 7,000 億元），把大量現金投入未來的生產能力。判斷「FCF 低是好事還是壞事」，需要結合公司的成長計劃來看。

*資料來源：台積電 2023 年年報*

---

## 小結

- 三張表是同一個故事的不同切面：損益表看賺不賺、資產負債表看健不健康、現金流量表看有沒有真錢
- 所有投資指標都能追溯到最底層的營收和成本數字——公式樹是你的導航地圖
- **損益表的獲利 ≠ 現金流量表的現金**——長期背離是財報品質的警訊
- ROIC 長期 > 15%，護城河通常存在；FCF 高且穩定，護城河最可靠
- EV/EBITDA 和 P/B 是 P/E 以外的常用估值角度，各有適用場景

下一篇，我們進入**選股實戰的初步健檢**：有了公式樹，如何在 20 分鐘內對一家公司做基本的財報診斷？

---

## 參考資料

1. Aswath Damodaran, *"A Primer on Financial Statements"*, NYU Stern — https://pages.stern.nyu.edu/~adamodar/New_Home_Page/AccPrimer/accstate.htm
2. CFA Institute, *CFA Level I Curriculum: Financial Reporting and Analysis*, CFA Institute, 2024
3. Richard A. Brealey, Stewart C. Myers, Franklin Allen, Alex Edmans, *Principles of Corporate Finance*, 14th ed., McGraw-Hill, 2025
4. Aswath Damodaran, *Investment Valuation: Tools and Techniques for Determining the Value of Any Asset*, 4th ed., Wiley Finance, 2024
5. 台積電 2023 年年報（Annual Report 2023）— https://ir.tsmc.com
6. 林明樟（MJ Lin），《財報就像一本故事書》，天下雜誌，財務報表視覺化教學法——三表關聯圖的設計概念參考其圖示化框架
