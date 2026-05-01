import { useEffect, useState } from 'react'
import { Check, Sparkles } from 'lucide-react'

const STEPS = [
  { label: '상품 상세페이지를 읽는 중입니다', target: 32 },
  { label: '핵심 정보를 추출하고 있습니다', target: 68 },
  { label: '글로벌 판매용으로 변환 중입니다', target: 100 },
] as const

const KEYWORDS = [
  { label: 'Hydration', pos: 'left-[8%] top-[2%]' },
  { label: 'Vegan', pos: 'right-[10%] top-[6%]' },
  { label: 'Sensitive Skin', pos: 'left-[14%] bottom-[2%]' },
  { label: '보습', pos: 'right-[18%] bottom-[4%]' },
  { label: '안티에이징', pos: 'right-[-1%] top-[44%]' },
] as const

const EXTRACTED_LEFT = [
  { label: 'TITLE', value: 'Hydra Glow Vitamin Serum', delay: 0.2 },
  { label: 'TYPE', value: 'Vitamin Serum', delay: 1.6 },
] as const

const EXTRACTED_RIGHT = [
  { label: 'PRICE', value: '$32.00', delay: 0.8 },
  { label: 'VOLUME', value: '30 ml', delay: 2.2 },
] as const

type Props = {
  onReset: () => void
  onComplete: () => void
}

export function ProductScanningView({ onReset, onComplete }: Props) {
  const [stepIdx, setStepIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const done = progress >= 100

  useEffect(() => {
    if (stepIdx >= STEPS.length - 1) return
    const t = setTimeout(
      () => setStepIdx((i) => i + 1),
      4400 + Math.random() * 1100,
    )
    return () => clearTimeout(t)
  }, [stepIdx])

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const target = STEPS[stepIdx].target
        if (p >= target) return p
        const diff = target - p
        const step = Math.max(0.2, diff * 0.05 + Math.random() * 0.6)
        return Math.min(target, p + step)
      })
    }, 90)
    return () => clearInterval(id)
  }, [stepIdx])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-white to-slate-50 text-black antialiased">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <button
          onClick={onReset}
          className="text-xl font-bold tracking-[-0.03em]"
        >
          KLOW
        </button>
        <span className="hidden items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[12px] font-medium text-sky-700 ring-1 ring-sky-100 sm:inline-flex">
          <span className="size-1.5 animate-pulse rounded-full bg-sky-500" />
          상품 분석 중
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20">
        <h2 className="mb-12 text-center text-[22px] font-semibold tracking-[-0.025em] text-slate-900 sm:text-[26px]">
          상품 정보를 분석하고 있습니다
        </h2>

        <div className="relative mx-auto w-full max-w-[640px]">
          {KEYWORDS.map((k, i) => (
            <span
              key={k.label}
              className={`absolute z-20 whitespace-nowrap rounded-full border border-sky-100/80 bg-white/95 px-3 py-1.5 text-[12px] font-medium text-sky-700 shadow-[0_6px_18px_-6px_rgba(14,165,233,0.30)] backdrop-blur-sm ${k.pos}`}
              style={{
                animation: `keywordFloat 7s ease-in-out ${i * 1.0}s infinite`,
              }}
            >
              {k.label}
            </span>
          ))}

          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
            <div className="hidden flex-col items-end gap-3 sm:flex">
              {EXTRACTED_LEFT.map((e) => (
                <ExtractedCard key={e.label} {...e} side="left" />
              ))}
            </div>

            <ProductCard />

            <div className="hidden flex-col items-start gap-3 sm:flex">
              {EXTRACTED_RIGHT.map((e) => (
                <ExtractedCard key={e.label} {...e} side="right" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 w-full max-w-md text-center">
          <div className="flex items-center justify-center gap-2 text-sky-600">
            {done ? (
              <Check className="size-4" strokeWidth={2.75} />
            ) : (
              <Sparkles className="size-4 animate-pulse" strokeWidth={2.25} />
            )}
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              {done ? 'Complete' : 'AI Extracting'}
            </span>
          </div>

          <div className="relative mt-4 h-7">
            {STEPS.map((s, i) => (
              <p
                key={s.label}
                className={`absolute inset-0 text-[17px] font-semibold tracking-[-0.015em] text-slate-900 transition-all duration-500 ease-out ${
                  i === stepIdx
                    ? 'translate-y-0 opacity-100'
                    : i < stepIdx
                      ? '-translate-y-2 opacity-0'
                      : 'translate-y-2 opacity-0'
                }`}
              >
                {s.label}
              </p>
            ))}
          </div>

          <div className="relative mt-7 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div
                className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] bg-[length:200%_100%]"
                style={{ animation: 'shimmer 2.4s linear infinite' }}
              />
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[11px] tabular-nums text-slate-400">
            <span>{Math.floor(progress)}%</span>
            <span>{done ? '완료' : '추출 중'}</span>
          </div>

          <p className="mt-8 text-[13px] tracking-[-0.005em] text-slate-400">
            잠시만 기다려주세요 (약 10~20초)
          </p>

          {done && (
            <button
              onClick={onComplete}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.20),0_14px_28px_rgba(0,0,0,0.22)]"
            >
              완료
              <Check className="size-3.5" strokeWidth={2.75} />
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

function ProductCard() {
  return (
    <div className="relative mx-auto h-[300px] w-[210px] overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50 ring-1 ring-black/5 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.30),0_8px_22px_-12px_rgba(15,23,42,0.12)]">
      <div className="absolute left-2.5 top-2.5 z-10 rounded-md bg-white/85 px-1.5 py-0.5 text-[10px] font-semibold text-rose-500 backdrop-blur">
        -25%
      </div>
      <div className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-1.5 py-[2px] text-[9.5px] font-semibold tracking-[-0.005em] text-sky-700 ring-1 ring-sky-100 shadow-[0_2px_6px_-2px_rgba(15,23,42,0.18)] backdrop-blur">
        <span className="size-1 animate-pulse rounded-full bg-sky-500" />
        분석 중
      </div>

      <div className="absolute inset-x-0 top-[26%] mx-auto h-[6%] w-[26%] rounded-md bg-rose-300/70" />
      <div className="absolute inset-x-0 bottom-3 mx-auto h-[64%] w-[44%] rounded-t-[22px] rounded-b-md bg-white shadow-[0_10px_22px_-10px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04]" />

      <div className="absolute inset-x-[28%] bottom-[18%] h-[3px] rounded-full bg-rose-200/80" />
      <div className="absolute inset-x-[32%] bottom-[12%] h-[2px] rounded-full bg-rose-200/60" />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.07)_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{ animation: 'softPulse 4s ease-in-out infinite' }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent via-sky-300/55 to-transparent blur-[1px]"
          style={{ animation: 'scanBeam 2.8s ease-in-out infinite' }}
        />
      </div>
    </div>
  )
}

function ExtractedCard({
  label,
  value,
  delay,
  side,
}: {
  label: string
  value: string
  delay: number
  side: 'left' | 'right'
}) {
  return (
    <div
      className={`relative w-[170px] rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.14),0_2px_6px_-2px_rgba(15,23,42,0.06)] ${
        side === 'left' ? 'text-right' : 'text-left'
      }`}
      style={{ animation: `keywordFloat 6.5s ease-in-out ${delay}s infinite` }}
    >
      <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </div>
      <div className="mt-0.5 truncate text-[13px] font-medium tracking-[-0.01em] text-slate-900">
        {value}
      </div>
      <span
        className={`absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.15)] ${
          side === 'left' ? '-right-1' : '-left-1'
        }`}
      />
    </div>
  )
}
