import Sparkles, { type SparkleDef } from '../components/Sparkles'
import ProjectShowcaseCard from '../components/ProjectShowcaseCard'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#00D2FF', top: '6%', left: '14%', size: 'clamp(20px, 3.5vw, 46px)' },
  { char: '✧', color: '#C6FF3D', top: '10%', left: '82%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✦', color: '#FF3EA5', top: '18%', left: '46%', size: 'clamp(14px, 2vw, 30px)' },
]

type Project = {
  number: string
  category: string
  name: string
  description: string[]
  tech: string[]
  imageLayout?: 'stack' | 'side' | 'single' // 左欄圖片：上下疊（預設）/ 左右並排 / 單張
  liveUrl?: string // Live Project 按鈕連結；未設定則維持 '#'
  images: [string, string, string] // 版面使用前兩張
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: '後台管理系統',
    description: [
      '參與 ASP.NET WebForms 舊系統重構，使用 Vue 3 建置餐飲集團中央後台 SPA，涵蓋權限、人事、商品、進銷存、會員、外送與銷售報表等營運模組。',
      '設計並整合以功能代碼為核心的動態選單與 RBAC 前端權限機制，將角色可用功能及新增／編輯／刪除／查詢／匯出操作統一封裝為共用狀態與 composable，降低跨模組重複實作。',
      '建立共用 API 請求層，統一處理 JWT Bearer Token、登入逾時、401 導頁、全域 loading、錯誤提示及檔案上傳，提升前端串接的一致性與可維護性。',
      '建置多語系機制，支援繁中、簡中、英文，並整合表單驗證與共用 UI 元件，確保跨國家／分店後台操作體驗一致。',
      '開發營運 Dashboard 與多種銷售報表，整合 ECharts、日期區間驗證、排序、前端分頁與 CSV／Excel 匯出；與後端協作，透過 SQL 聚合降低報表明細傳輸與前端計算負擔，改善大量資料情境下的畫面渲染負擔。',
      '部署流程自動化，降低手動發佈造成版本不一致與回滾困難的風險，具備 smoke test 與 blue-green 回滾機制。',
    ],
    tech: [
      'Vue 3',
      'JavaScript',
      'Vite',
      'Pinia',
      'Vue Router',
      'Axios',
      'ECharts',
      'Vue I18n',
      'VeeValidate',
      'Vitest',
      'RESTful API',
      'GitHub Actions',
    ],
    liveUrl: 'https://lab2.citrus.tw/cms/login',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    category: 'Personal',
    name: '點餐系統',
    description: [
      '開發餐飲 BYOD 點餐前端，涵蓋 QR／短網址進店、菜單瀏覽、商品客製化、購物車、結帳、訂單查詢與電子收據等完整訂購流程。',
      '設計可支援套餐、規格、加料與口味的購物車資料模型；以商品群組、商品 ID 與選項組合建立識別規則，避免相同商品不同客製內容被錯誤合併。',
      '以 React Context 拆分店鋪、菜單、服務類型與購物車狀態；利用 localStorage 保存購物車續用狀態，並以 sessionStorage 處理外部付款回跳所需的短期資料。',
      '串接 Stripe、Omise 與 2C2P 多金流；處理 redirect、QR iframe、付款結果輪詢、取消付款回結帳等使用者流程。',
      '與後端 API 協作，將最終價格、稅金、服務費、包裝費與商品供應狀態交由伺服器驗證，確保前端呈現與交易資料一致。',
      '建立多語系介面（繁中／簡中／英文），並處理商品名稱、購物車選項與付款結果的語系呈現。',
      '針對行動裝置點餐場景實作響應式 UI、載入 skeleton、錯誤提示與基本 ARIA 標示。',
      '部署流程自動化，降低手動發佈造成版本不一致與回滾困難的風險，具備 smoke test 與 blue-green 回滾機制。',
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'i18next',
      'CSS Modules',
      'ASP.NET Core API',
    ],
    imageLayout: 'single',
    liveUrl: 'https://lab2.citrus.tw/compassDev/WebPos?K=A5251',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    category: 'Client',
    name: 'BI 報表系統',
    description: [
      '重構零售營運 BI 前端，建置營業總覽、即時銷售、KPI、期間比較與損耗分析等報表，支援瀏覽器與 Flutter App WebView 使用情境。',
      '設計商圈、區域、門市三級篩選流程，串接後端門市權限資料；以前端改善篩選體驗、後端權限控制確保使用者僅能查閱授權門市。',
      '整合 Chart.js 呈現營收、商品排行、時段銷售、損耗與客群分析，並處理日期區間、篩選條件與多份報表間的資料一致性。',
      '與後端共同定義有效訂單、營業額、來客數、KPI 達成率與鏡片加購率等計算口徑，降低新舊 BI 報表數字不一致的風險。',
      '導入繁中、簡中、英文 i18n，整合 Ant Design locale 與後端多語資料欄位。',
      '實作 Flutter InAppWebView bridge，支援網頁通知原生端更新導覽列標題，並保持一般瀏覽器環境可正常運作。',
      '部署流程自動化，降低手動發佈造成版本不一致與回滾困難的風險，具備 smoke test 與 blue-green 回滾機制。',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Ant Design',
      'Chart.js',
      'i18next',
      'Flutter WebView',
      'ASP.NET Core API',
      'SQL Server',
    ],
    imageLayout: 'single',
    liveUrl:
      'https://lab2.citrus.tw/jinslab/Report/Home/Index?employeeId=admin&language=zh-TW&sessionId=52511101',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

// 自動載入 src/assets/projects/ 底下的本地專案圖。
// 命名規則：{專案編號}-{序號}.副檔名，例如 01-1.png（左欄上圖）、01-2.png（左欄下圖）。
// 放了本地圖就會自動取代該專案的外部圖；沒放的沿用 PROJECTS 裡的外部連結。
const LOCAL_IMAGES = import.meta.glob(
  '../assets/projects/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, import: 'default' },
) as Record<string, string>

function localImages(number: string): string[] {
  return Object.keys(LOCAL_IMAGES)
    .filter((path) => path.includes(`/${number}-`))
    .sort()
    .map((path) => LOCAL_IMAGES[path])
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ background: '#E6F7FF' }}
    >
      <Sparkles items={SPARKLES} className="z-[1]" />

      <h2
        className="relative z-10 hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col gap-10 md:block md:space-y-[30vh]">
        {PROJECTS.map((project) => {
          const local = localImages(project.number)
          return (
            <ProjectShowcaseCard
              key={project.number}
              project={project}
              img1={local[0] ?? project.images[0]}
              img2={local[1] ?? project.images[1]}
            />
          )
        })}
      </div>
    </section>
  )
}
