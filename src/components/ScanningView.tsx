import { useEffect, useState } from 'react'
import { Check, Globe, Sparkles } from 'lucide-react'

const STEPS = [
  { label: '웹사이트를 분석하고 있습니다', target: 28 },
  { label: '브랜드 정보를 추출하는 중입니다', target: 56 },
  { label: '제품 데이터를 정리하고 있습니다', target: 82 },
  { label: '글로벌 판매 페이지를 준비 중입니다', target: 100 },
] as const

const KEYWORDS = [
  { label: 'Anti-aging', pos: 'left-[-2%] top-[6%] sm:left-[-10%]' },
  { label: '보습', pos: 'right-[2%] top-[18%] sm:right-[-8%]' },
  { label: '민감성 피부', pos: 'left-[-1%] bottom-[28%] sm:left-[-12%]' },
  { label: '비건', pos: 'right-[0%] bottom-[10%] sm:right-[-6%]' },
  { label: '프리미엄 원료', pos: 'left-1/2 top-[-6%] -translate-x-1/2' },
] as const

type Props = {
  url: string
  onReset: () => void
  onComplete: () => void
}

export function ScanningView({ url, onReset, onComplete }: Props) {
  const [stepIdx, setStepIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const done = progress >= 100

  useEffect(() => {
    if (stepIdx >= STEPS.length - 1) return
    const t = setTimeout(
      () => setStepIdx((i) => i + 1),
      5400 + Math.random() * 1400,
    )
    return () => clearTimeout(t)
  }, [stepIdx])

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const target = STEPS[stepIdx].target
        if (p >= target) return p
        const diff = target - p
        const step = Math.max(0.18, diff * 0.045 + Math.random() * 0.55)
        return Math.min(target, p + step)
      })
    }, 90)
    return () => clearInterval(id)
  }, [stepIdx])

  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'yourbrand.com'

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-white to-slate-50 text-black antialiased">
      <header className="px-6 py-6 sm:px-10">
        <span className="text-xl font-bold tracking-[-0.02em]">KLOW</span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-16">
        <div className="relative w-full max-w-2xl">
          {KEYWORDS.map((k, i) => (
            <span
              key={k.label}
              className={`absolute z-10 whitespace-nowrap rounded-full border border-sky-100/80 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium text-sky-700 shadow-[0_6px_18px_-6px_rgba(14,165,233,0.30)] backdrop-blur-sm ${k.pos}`}
              style={{
                animation: `keywordFloat 7s ease-in-out ${i * 1.1}s infinite`,
              }}
            >
              {k.label}
            </span>
          ))}

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.30),0_8px_24px_-12px_rgba(15,23,42,0.10)]">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/70 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-200" />
                <span className="size-2.5 rounded-full bg-slate-200" />
                <span className="size-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-[12px] text-slate-500 ring-1 ring-slate-200">
                <Globe className="size-3.5 shrink-0 text-slate-400" strokeWidth={2} />
                <span className="truncate">{displayUrl}</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-sky-600">
                  <span className="size-1.5 animate-pulse rounded-full bg-sky-500" />
                  Scanning
                </span>
              </div>
            </div>

            <div className="relative h-[360px] overflow-hidden">
              <div className="px-7 py-7">
                <div className="mb-5 flex items-center justify-between">
                  <Skeleton className="h-3 w-24" />
                  <div className="flex gap-3">
                    <Skeleton className="h-2.5 w-10" />
                    <Skeleton className="h-2.5 w-10" />
                    <Skeleton className="h-2.5 w-10" />
                    <Skeleton className="h-2.5 w-10" />
                  </div>
                </div>

                <div className="mb-6 h-32 w-full rounded-xl bg-gradient-to-br from-sky-50 via-white to-slate-100 ring-1 ring-slate-100" />

                <div className="grid grid-cols-3 gap-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="space-y-2.5">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-100" />
                      <Skeleton className="h-2.5 w-3/4" />
                      <Skeleton className="h-2 w-1/2" />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
                style={{ animation: 'softPulse 4s ease-in-out infinite' }}
              />

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-sky-300/45 to-transparent blur-[1px]"
                  style={{ animation: 'scanBeam 3.4s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md text-center">
          <div className="flex items-center justify-center gap-2 text-sky-600">
            {done ? (
              <Check className="size-4" strokeWidth={2.75} />
            ) : (
              <Sparkles className="size-4 animate-pulse" strokeWidth={2.25} />
            )}
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              {done ? 'Complete' : 'AI Scanning'}
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
            <span>{done ? '완료' : '분석 중'}</span>
          </div>

          <p className="mt-8 text-[13px] text-slate-400">
            보통 30초 이내에 완료됩니다
          </p>

          {done && (
            <div className="mt-6 flex flex-col items-center gap-3">
              <button
                onClick={onComplete}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.20),0_14px_28px_rgba(0,0,0,0.22)]"
              >
                결과 보기
                <Check className="size-3.5" strokeWidth={2.75} />
              </button>
              <button
                onClick={onReset}
                className="text-[12px] text-slate-400 underline-offset-4 transition hover:text-slate-700 hover:underline"
              >
                처음으로
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded bg-slate-200 ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(226,232,240,1) 0%, rgba(241,245,249,1) 40%, rgba(226,232,240,1) 80%)',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat',
        animation: 'skeletonShimmer 1.6s ease-in-out infinite',
      }}
    />
  )
}
