import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  PackagePlus,
} from 'lucide-react'

const LINK = 'klow.global/dr-oasis-lab'

type Props = {
  onReset: () => void
  onAddMore: () => void
  onViewStore: () => void
}

export function SuccessView({ onReset, onAddMore, onViewStore }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
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
        <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
          <Check className="size-3" strokeWidth={3} />
          등록 완료
        </span>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-20">
        <div className="w-full max-w-[480px] text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_-12px_rgba(16,185,129,0.55)] ring-8 ring-emerald-500/10">
            <Check className="size-7" strokeWidth={3} />
          </div>

          <h1 className="mt-7 break-keep text-[28px] font-semibold leading-[1.18] tracking-[-0.03em] text-black sm:text-[34px] sm:leading-[1.14]">
            상품이 성공적으로 등록되었습니다
          </h1>

          <p className="mx-auto mt-4 max-w-[400px] break-keep text-[15px] leading-[1.7] tracking-[-0.005em] text-slate-500 sm:text-[16px]">
            이제 글로벌 고객이 바로 구매할 수 있습니다
          </p>

          <div className="mt-9 text-left">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Global link
              </span>
              <span className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white py-2 pl-4 pr-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_22px_-12px_rgba(15,23,42,0.10)]">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span className="truncate text-[14px] tracking-[-0.005em] text-slate-700">
                {LINK}
              </span>
              <button
                onClick={copy}
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

          <button
            onClick={onViewStore}
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0"
          >
            스토어 바로 보기
            <ArrowRight
              className="size-4 transition group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </button>

          <div className="mt-5 flex items-center justify-center gap-1 text-[13px] font-medium tracking-[-0.005em]">
            <button
              onClick={onAddMore}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-black"
            >
              <PackagePlus className="size-3.5" strokeWidth={2.25} />
              추가 상품 등록하기
            </button>
            <span className="text-slate-200">·</span>
            <button
              onClick={onViewStore}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-black"
            >
              <ExternalLink className="size-3.5" strokeWidth={2.25} />
              스토어 보기
            </button>
          </div>

          <p className="mt-8 text-[12px] tracking-[-0.005em] text-slate-400">
            첫 판매를 위해 링크를 공유해보세요
          </p>
        </div>
      </main>
    </div>
  )
}
