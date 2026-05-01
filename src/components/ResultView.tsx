import { useState } from 'react'
import { ArrowRight, Check, Copy, Sparkles } from 'lucide-react'
import { StorePreview } from './StorePreview'

const TAGS = ['안티에이징', '프리미엄', '민감성 피부', '보습'] as const
const LINK = 'klow.global/dr-oasis-lab'

type Props = {
  onReset: () => void
  onContinue: () => void
}

export function ResultView({ onReset, onContinue }: Props) {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`https://${LINK}`).catch(() => {})
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <button
          onClick={onReset}
          className="text-xl font-bold tracking-[-0.03em] text-black"
        >
          KLOW
        </button>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
            <Check className="size-3" strokeWidth={3} />
            분석 완료
          </span>
          <button
            onClick={onReset}
            className="text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
          >
            처음으로
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 sm:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <section className="lg:col-span-7 lg:pt-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[12px] font-semibold tracking-[-0.005em] text-sky-700 ring-1 ring-sky-100">
              <Sparkles className="size-3" strokeWidth={2.5} />
              AI 분석 완료
            </div>

            <h1 className="mt-5 max-w-[640px] break-keep text-[30px] font-semibold leading-[1.22] tracking-[-0.03em] text-black sm:text-[40px] sm:leading-[1.16] lg:text-[44px]">
              닥터 오아시스 랩, 글로벌 판매 준비가 완료되었습니다
            </h1>

            <p className="mt-5 max-w-[520px] break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
              브랜드 분석을 기반으로 글로벌 판매 페이지가 생성되었습니다
            </p>

            <div className="mt-9 max-w-[560px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_28px_-12px_rgba(15,23,42,0.10)]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Brand insight
                </span>
                <span className="h-px flex-1 bg-slate-100" />
              </div>
              <h2 className="mt-3 text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
                브랜드 분석 결과
              </h2>
              <p className="mt-2 break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-700">
                고기능 안티에이징 중심의 프리미엄 스킨케어 브랜드로 분석되었습니다
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[12px] font-medium tracking-[-0.005em] text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 max-w-[560px]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Global link
                </span>
                <span className="h-px flex-1 bg-slate-100" />
              </div>
              <p className="mt-2 text-[13px] tracking-[-0.005em] text-slate-500">
                글로벌 판매 링크
              </p>
              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white py-2 pl-4 pr-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="truncate text-[14px] tracking-[-0.005em] text-slate-700">
                  {LINK}
                </span>
                <button
                  onClick={copyLink}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-medium tracking-[-0.005em] text-slate-500 transition hover:bg-slate-50 hover:text-black"
                  aria-label="링크 복사"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5" strokeWidth={2.75} />
                      복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" strokeWidth={2} />
                      복사
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-10 max-w-[560px]">
              <button
                onClick={onContinue}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0 sm:w-auto sm:px-9"
              >
                글로벌 판매 페이지 생성하기
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
              <p className="mt-3 text-[12px] tracking-[-0.005em] text-slate-400">
                생성 후 언제든지 수정할 수 있습니다
              </p>
            </div>
          </section>

          <aside className="relative flex flex-col items-center lg:col-span-5 lg:pt-6">
            <div className="pointer-events-none absolute -left-8 top-24 hidden h-px w-12 bg-gradient-to-r from-transparent to-slate-200 lg:block" />

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.005em] text-slate-600 shadow-[0_4px_14px_-6px_rgba(15,23,42,0.10)]">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              실제 고객에게는 이렇게 보여집니다
            </div>

            <StorePreview />

            <p className="mt-5 text-center text-[12px] tracking-[-0.005em] text-slate-400">
              klow.global/dr-oasis-lab · Live preview
            </p>
          </aside>
        </div>
      </main>
    </div>
  )
}
