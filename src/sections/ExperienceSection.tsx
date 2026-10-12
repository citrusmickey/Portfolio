import FadeIn from '../components/FadeIn'
import Sparkles, { type SparkleDef } from '../components/Sparkles'

const SPARKLES: SparkleDef[] = [
  { char: '✦', color: '#FF3EA5', top: '8%', left: '12%', size: 'clamp(18px, 3vw, 42px)' },
  { char: '✧', color: '#9B5DE5', top: '14%', left: '84%', size: 'clamp(16px, 2.5vw, 34px)' },
  { char: '✦', color: '#00A8CC', top: '80%', left: '90%', size: 'clamp(14px, 2vw, 30px)' },
]

type Experience = {
  year: string
  period: string
  role: string
  company: string
  description?: string
  points?: string[]
}

const EXPERIENCES: Experience[] = [
  {
    year: '2021',
    period: '2021.01 - 2026.09',
    role: 'Front-End Developer',
    company: 'Citrus 思圖',
    points: [
      '主導線上點餐核心流程開發，實作商品分類、商品客製化、套餐組合、購物車、數量限制、促銷、售罄檢查及訂單確認等功能，並依內用、外帶等不同服務模式處理複雜商業邏輯',
      '串接國內外多種第三方支付服務，負責付款流程、支付 API 串接、付款結果及訂單狀態同步，處理付款失敗、重試及交易異常等情境，確保支付與訂單流程正常運作',
      '優化點餐系統前端狀態管理，重新整理 localStorage、商品及購物車資料同步流程，處理商品數量、套餐、客製化及外帶拆單等複雜情境，避免資料互相污染及狀態不同步問題',
      '改善前端事件與效能問題，針對重複事件綁定、DOM 操作及大量商品列表進行優化，搭配事件管理及資料處理調整，改善門市與行動裝置操作體驗',
      '處理跨瀏覽器與 WebView 相容性問題，針對 iOS、行動瀏覽器及 WebView 環境進行問題排查，處理 Cache、Overflow、HTTP/2 等上線環境問題，確保點餐服務穩定運作',
      '主導線上點餐系統重構，修改成前後端分離架構，使用 React 作為前端 UI 及 .net9 撰寫後端 webApi 重構，針對既有系統進行架構與程式碼整理，重新拆分共用元件、頁面邏輯及資料處理流程，並優化購物車、商品、訂單等核心模組，提升系統可維護性及後續功能開發效率',
      '負責後台管理系統重構，修改成前後端分離架構，使用 Vue3 及 Bootstrap5 作為前端 UI 及 .net8 撰寫後端 webApi 重構，重新整理商品、門市、分類、促銷及訂單等功能模組，將重複 UI 與業務邏輯進行元件化及模組化，降低功能間的耦合程度，提升後台系統擴充與維護效率',
      '負責 BI 報表、預約及候位系統開發，串接後端 API 整合訂單、門市及營運資料，建立資料查詢、使用 Chart.js 或 ECharts.js 建立可視化圖表及管理介面，支援餐廳營運分析與預約候位流程',
      '優化多專案部署流程，導入自動化流程，透過 GitHub Actions CI/CD 提升部署效率',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#E4DBFF' }}
    >
      <Sparkles items={SPARKLES} className="z-[1]" />

      <h2
        className="relative z-10 font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#24004D', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="relative z-10 mx-auto max-w-5xl">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn
            key={exp.period}
            delay={i * 0.1}
            className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(155, 93, 229, 0.3)' }}
          >
            <span
              className="font-black shrink-0"
              style={{ color: '#FF3EA5', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {exp.year}
            </span>
            <div className="flex flex-col gap-2 pt-1 sm:pt-2">
              <h3
                className="font-medium uppercase"
                style={{ color: '#24004D', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {exp.role}
              </h3>
              <span
                className="font-medium uppercase tracking-wide"
                style={{ color: '#9B5DE5', fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
              >
                {exp.company} · {exp.period}
              </span>
              {exp.description && (
                <p
                  className="font-light leading-relaxed max-w-2xl mt-1"
                  style={{ color: '#24004D', opacity: 0.7, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {exp.description}
                </p>
              )}
              {exp.points && (
                <ul className="mt-3 flex flex-col gap-2.5 max-w-3xl">
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 font-light leading-relaxed"
                      style={{ color: '#24004D', fontSize: 'clamp(0.8rem, 1.3vw, 1.05rem)' }}
                    >
                      <span
                        aria-hidden
                        className="shrink-0 select-none"
                        style={{ color: '#FF3EA5' }}
                      >
                        ▹
                      </span>
                      <span style={{ opacity: 0.8 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
