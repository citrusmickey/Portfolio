import Sparkles, { type SparkleDef } from '../components/Sparkles'
import ProjectShowcaseCard, { type ShowcaseProject } from '../components/ProjectShowcaseCard'

type SideProject = ShowcaseProject & { images: [string, string] }

// 佔位圖沿用一張現有外部圖，放本地圖後自動取代
const PLACEHOLDER =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85'

const SIDE_PROJECTS: SideProject[] = [
  {
    number: '01',
    name: 'AI 旅遊問答',
    description: [
      '使用 Nuxt 3 與 Vue 3 建置多語系旅遊問答介面，支援繁體中文、英文、日文、韓文。',
      '以 fetch 與 ReadableStream 實作串流聊天，逐步呈現模型回覆；將訊息狀態與 API 邏輯抽離至 composable，降低頁面元件的職責。',
      '建置 Nitro server API，串接 Claude API，並透過 server runtime config 管理金鑰，避免將憑證暴露於前端。',
      '整合觀光署與 OpenStreetMap 資料，整理成旅遊知識庫；以關鍵字、意圖類型與使用者位置進行加權檢索，提供景點、美食與住宿推薦。',
      '實作 IP 小時與每日雙視窗限流，降低單一部署實例上的 API 濫用與成本風險。',
      '使用瀏覽器地理定位搭配距離計算，依使用者位置調整推薦排序；使用者未授權時仍可正常使用問答功能。',
    ],
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Nitro', 'Claude API'],
    liveUrl: 'https://yingge-chat.onrender.com/',
    imageLayout: 'single',
    images: [PLACEHOLDER, PLACEHOLDER],
  },
  {
    number: '02',
    name: '餐廳訂位平台',
    description: [
      '獨立規劃並實作餐廳搜尋、條件篩選、時段選擇、訂位送出與個人訂位查詢，串起完整訂位流程。',
      '依頁面需求設計渲染策略：餐廳列表與詳細頁採 SSR 並提供動態 SEO metadata；訂位等互動流程採 client-side 請求與狀態管理。',
      '使用 Pinia 管理登入狀態與跨頁訂位草稿，透過 Nuxt plugin 在 SSR 階段取得登入者資訊，並以 route middleware 處理受保護頁面的導向。',
      '以 Zod 建立前後端共用的表單與 API 驗證規則，並為時段容量計算、訂位編號和資料驗證撰寫 Vitest 測試。',
      '實作手機與桌機不同版面、時段載入骨架、餐廳輪播與互動動畫，提升主要流程的操作體驗。',
    ],
    tech: [
      'Nuxt 4',
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Nuxt UI',
      'Tailwind CSS',
      'Zod',
      'Nitro',
      'Vitest',
    ],
    liveUrl: 'https://tablemate-7srb.onrender.com/',
    imageLayout: 'single',
    images: [PLACEHOLDER, PLACEHOLDER],
  },
  {
    number: '03',
    name: '垃圾車到站提醒',
    description: [
      '使用 Vue 3、TypeScript、Pinia 建立前端架構，依頁面、業務狀態、API 與 composable 拆分功能，管理城市、定位、清運點及通知訂閱等跨頁狀態。',
      '整合 Leaflet 地圖，呈現附近清運點與新北即時垃圾車；以車牌識別既有 marker，更新車輛位置時避免整批重建標記。',
      '串接瀏覽器定位與地理反查，支援依目前位置查詢，並在定位失敗時退回城市預設位置。',
      '實作 LINE 通知設定流程，包含清運點選擇、訂閱建立、綁定狀態查詢、通知偏好更新與取消訂閱。',
      '採用 Vue 3 + Vite 建置 PWA；依產品目前以動態資料與操作流程為主、SEO 需求較低的情境，選擇 SPA 架構。',
    ],
    tech: ['Vue 3', 'TypeScript', 'Pinia', 'Leaflet', '.NET 9'],
    liveUrl: 'https://garbagego-web.onrender.com/',
    imageLayout: 'single',
    images: [PLACEHOLDER, PLACEHOLDER],
  },
]

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#C6FF3D', top: '8%', left: '12%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✧', color: '#FF3EA5', top: '14%', left: '84%', size: 'clamp(16px, 2.5vw, 34px)' },
]

// 自動載入 src/assets/side-projects/ 底下的本地圖。
// 命名規則：{專案編號}-{序號}.副檔名，例如 01-1.png。放了本地圖就會自動取代佔位圖。
const LOCAL_IMAGES = import.meta.glob(
  '../assets/side-projects/*.{png,jpg,jpeg,webp,avif,svg}',
  { eager: true, import: 'default' },
) as Record<string, string>

function localImages(number: string): string[] {
  return Object.keys(LOCAL_IMAGES)
    .filter((path) => path.includes(`/${number}-`))
    .sort()
    .map((path) => LOCAL_IMAGES[path])
}

export default function SideProjectsSection() {
  return (
    <section
      id="side-projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-28"
      style={{ background: '#E4DBFF' }}
    >
      <Sparkles items={SPARKLES} className="z-[1]" />

      <h2
        className="relative z-10 hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
      >
        Side Projects
      </h2>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col gap-10 md:block md:space-y-[30vh]">
        {SIDE_PROJECTS.map((project) => {
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
