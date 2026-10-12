import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '20%', left: '30%', size: 'clamp(18px, 3vw, 40px)' },
  { char: '✧', color: '#00D2FF', top: '24%', left: '68%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✦', color: '#9B5DE5', top: '70%', left: '28%', size: 'clamp(14px, 2vw, 28px)' },
  { char: '✧', color: '#FF3EA5', top: '66%', left: '70%', size: 'clamp(18px, 3vw, 38px)' },
]

const ABOUT_TEXT =
  '具 5 年以上前端開發經驗，長期參與餐飲數位化與線上點餐平台開發，熟悉從顧客端、門市 KIOSK 到後台管理與 BI 報表的完整產品流程，具備獨立開發功能、API 串接及跨系統整合能力。'

type SkillGroup = { title: string; color: string; points: string[] }

const SKILLS: SkillGroup[] = [
  {
    title: '現代化前端架構',
    color: '#FF3EA5',
    points: [
      '熟悉 Vue 3，理解 Composition API、Lifecycle、Vue Router 等核心概念，具備元件化及模組化開發經驗。',
      '熟悉 React，理解 Component、State、Props 及生命週期等核心概念，具備既有系統重構與功能開發經驗。',
      '熟悉 Nuxt.js，理解 SSR、CSR、Routing、Middleware 等架構概念，並持續應用於個人專案與現代化前端開發。',
    ],
  },
  {
    title: '介面與佈局',
    color: '#9B5DE5',
    points: [
      '熟悉 HTML5 / CSS3，能使用語意化 HTML 建構符合 SEO 需求的網站結構。',
      '熟悉 Flexbox / Grid / Responsive Web Design（RWD），具備桌機、平板及行動裝置介面開發經驗。',
      '熟悉 Bootstrap、SCSS / Sass、Tailwind CSS，能依專案需求進行樣式模組化。',
    ],
  },
  {
    title: '程式語言與資料串接',
    color: '#00A8CC',
    points: [
      '熟悉 JavaScript / TypeScript（ES6+），具備 DOM 操作、事件處理、非同步程式設計及模組化開發經驗。',
      '熟悉 jQuery 並使用相關第三方套件。',
      '熟悉 Promise、Async / Await、AJAX、Axios 等非同步資料處理方式。',
      '熟悉 RESTful API，具備前後端 API 規格溝通、資料串接、錯誤處理及狀態同步經驗。',
      '熟悉 localStorage 等瀏覽器端資料儲存機制，具備購物車、暫存訂單及前端狀態處理經驗。',
      '熟悉 Chart.js、ECharts.js，具備 BI 報表、營運資料及互動式圖表開發經驗。',
    ],
  },
  {
    title: '前端工程化與效能優化',
    color: '#FF3EA5',
    points: [
      '具備 Vite、Webpack 等前端建置工具基本使用及配置經驗。',
      '具備資源壓縮、Code Splitting、Lazy Loading 及圖片 WebP 轉換等優化經驗。',
      '熟悉 Git 版本控制及前端開發流程，具備 IIS 等實際網站部署與維運經驗。',
      '熟悉 Lighthouse，具備網站效能、SEO 及網頁載入速度優化經驗。',
      '具備前端資安概念，理解 XSS、CSRF、Cookie 等常見 Web Security 問題及基本防護方式。',
      '具備 Production 問題排查經驗，曾處理 iOS WebView、瀏覽器 Cache、HTTP/2、RWD 及跨裝置相容性等實際上線問題。',
    ],
  },
  {
    title: '系統整合與第三方服務',
    color: '#9B5DE5',
    points: [
      '具備多種第三方支付 API 整合經驗，包含付款流程、交易結果、訂單狀態同步及異常處理。',
      '具備線上點餐、預約、候位、BI、後台管理等餐飲數位平台開發經驗。',
      '具備語音點餐功能開發經驗，整合瀏覽器錄音、語音辨識及訂單解析流程。',
      '熟悉與後端工程師協作 API 規格、資料結構及錯誤處理，具備跨前後端問題排查能力。',
    ],
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#E6F7FF' }}
    >
      {/* Y2K glow + sparkles */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(40% 35% at 30% 30%, rgba(255, 62, 165, 0.22), transparent 70%),' +
            'radial-gradient(40% 35% at 72% 68%, rgba(0, 210, 255, 0.22), transparent 70%)',
        }}
      />
      <Sparkles items={SPARKLES} className="z-[1]" />

      {/* Decorative corner object */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <img src={`${import.meta.env.BASE_URL}laptop-glass.png`} alt="" className="w-[140px] sm:w-[190px] md:w-[240px]" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="relative flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#24004D] font-medium text-justify leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Skills — integrated below the intro text */}
        <div className="relative w-full max-w-6xl">
          {/* cat anchored to the lower-right of the skills block */}
          <FadeIn
            delay={0.25}
            x={80}
            y={0}
            duration={0.9}
            className="pointer-events-none absolute right-0 bottom-0 z-20 translate-x-[60%] translate-y-[20%]"
          >
            <img src={`${import.meta.env.BASE_URL}cat.png`} alt="" className="w-[110px] sm:w-[150px] md:w-[190px]" />
          </FadeIn>

          <FadeIn
            as="h3"
            y={30}
            className="hero-heading text-center font-black tracking-tight mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            技能
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SKILLS.map((group, i) => (
              <FadeIn
                key={group.title}
                delay={i * 0.08}
                className={
                  'p-6 sm:p-8 border-t ' +
                  (i % 2 === 1 && i !== SKILLS.length - 1 ? 'md:border-l ' : '') +
                  (i === SKILLS.length - 1 ? 'md:col-span-2' : '')
                }
                style={{ borderColor: 'rgba(124, 92, 255, 0.3)' }}
              >
                <h4
                  className="flex items-center gap-2.5 font-bold mb-4 sm:mb-5"
                  style={{ color: '#24004D', fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
                >
                  <span style={{ color: group.color }}>◆</span>
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2.5 text-left">
                  {group.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 font-light leading-relaxed"
                      style={{ color: '#24004D', fontSize: 'clamp(0.8rem, 1.05vw, 0.98rem)' }}
                    >
                      <span className="shrink-0 select-none" style={{ color: group.color }}>
                        ▹
                      </span>
                      <span style={{ opacity: 0.82 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
