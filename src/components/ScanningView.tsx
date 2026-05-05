import { useEffect, useMemo, useState } from 'react'
import {
  Check,
  CircleDollarSign,
  FileText,
  Globe,
  Palette,
  Sparkles,
  Tags,
} from 'lucide-react'

const STEPS = [
  { label: '브랜드 구조를 읽는 중입니다', target: 24 },
  { label: '핵심 키워드를 추출하는 중입니다', target: 48 },
  { label: '메인 컬러와 톤을 잡는 중입니다', target: 72 },
  { label: '결제 가능한 글로벌 브랜드관을 빌딩 중입니다', target: 100 },
] as const

const DISCOVERIES = [
  {
    icon: Tags,
    title: 'Brand Keywords',
    value: 'Pure ingredients · Minimal ritual · Sensitive care',
    reveal: 18,
  },
  {
    icon: Palette,
    title: 'Primary Colors',
    value: 'Soft sage · Clean white · Deep charcoal',
    reveal: 42,
  },
  {
    icon: FileText,
    title: 'Core Value',
    value: '순수한 자연 성분과 미니멀한 사용 경험이 핵심입니다.',
    reveal: 66,
  },
  {
    icon: CircleDollarSign,
    title: 'Commerce Ready',
    value: '해외 고객이 바로 결제할 수 있는 CTA 구조를 준비했습니다.',
    reveal: 86,
  },
] as const

type Props = {
  source: string
  mode: 'store' | 'brand'
  onReset: () => void
  onComplete: () => void
}

export function ScanningView({ source, mode, onReset, onComplete }: Props) {
  const [stepIdx, setStepIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const done = progress >= 100

  useEffect(() => {
    if (stepIdx >= STEPS.length - 1) return
    const timer = window.setTimeout(() => setStepIdx((i) => i + 1), 1550)
    return () => window.clearTimeout(timer)
  }, [stepIdx])

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((current) => {
        const target = STEPS[stepIdx].target
        if (current >= target) return current
        return Math.min(target, current + Math.max(1, (target - current) * 0.09))
      })
    }, 70)
    return () => window.clearInterval(id)
  }, [stepIdx])

  const displaySource = useMemo(() => {
    if (mode === 'store') return source.replace(/^https?:\/\//, '').replace(/\/$/, '')
    return `klow.global/${source.replace(/^klow\.global\//, '').replace(/^@/, '')}`
  }, [mode, source])

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#eff6ff_0,#ffffff_46%)] text-slate-950 antialiased">
      <header className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8">
        <button onClick={onReset} className="text-xl font-bold tracking-[-0.03em]">
          KLOW
        </button>
        <button
          onClick={onReset}
          className="text-[13px] font-semibold text-slate-500 transition hover:text-slate-950"
        >
          처음으로
        </button>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-76px)] max-w-[1120px] items-center px-5 pb-16 sm:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <section>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-100 backdrop-blur">
              <Sparkles className="size-3.5" strokeWidth={2.25} />
              Magic Extraction
            </div>
            <h1 className="mt-5 max-w-[560px] break-keep text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[52px]">
              사장님 브랜드의 핵심을 찾고 있습니다.
            </h1>
            <p className="mt-5 max-w-[520px] break-keep text-[16px] leading-[1.75] text-slate-600">
              직접 타이핑하지 않아도 됩니다. AI가 브랜드 키워드, 메인 컬러,
              핵심 가치를 먼저 뽑아드리고 대표님은 맞는지만 확인하면 됩니다.
            </p>

            <div className="mt-8 max-w-[540px]">
              <div className="flex items-center justify-between text-[12px] font-semibold text-slate-500">
                <span>{STEPS[stepIdx].label}</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-sky-500 transition-[width] duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {done && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onComplete}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-px"
                >
                  맞아요, 초안 확인하기
                  <Check className="size-4" strokeWidth={2.6} />
                </button>
                <button
                  onClick={onReset}
                  className="text-[13px] font-semibold text-slate-500 underline-offset-4 hover:text-slate-950 hover:underline"
                >
                  다시 입력
                </button>
              </div>
            )}
          </section>

          <aside className="relative">
            <div className="rounded-[32px] border border-white/80 bg-white/72 p-5 shadow-[0_34px_90px_-54px_rgba(14,116,144,0.55)] backdrop-blur-xl ring-1 ring-slate-200/70">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <Globe className="size-4 shrink-0 text-slate-400" />
                <span className="truncate text-[13px] font-semibold text-slate-600">
                  {displaySource}
                </span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-700">
                  <span className="size-1.5 animate-pulse rounded-full bg-sky-500" />
                  analyzing
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {DISCOVERIES.map(({ icon: Icon, title, value, reveal }) => {
                  const active = progress >= reveal
                  return (
                    <div
                      key={title}
                      className={`rounded-3xl border p-5 transition-all duration-500 ${
                        active
                          ? 'translate-y-0 border-white bg-white opacity-100 shadow-[0_16px_42px_-32px_rgba(15,23,42,0.45)]'
                          : 'translate-y-2 border-slate-200 bg-white/45 opacity-35'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid size-10 place-items-center rounded-2xl ${
                            active ? 'bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Icon className="size-5" strokeWidth={2.25} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            {title}
                          </p>
                          <p className="mt-1 break-keep text-[15px] font-semibold leading-[1.45] text-slate-900">
                            {active ? value : 'AI가 확인 중입니다...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-[12px] font-semibold text-sky-300">
                  AI Feedback
                </p>
                <p className="mt-2 break-keep text-[22px] font-semibold leading-[1.25] tracking-[-0.03em]">
                  사장님 브랜드는 순수한 자연 성분과 미니멀리즘이 핵심이군요.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
