import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Globe,
  PencilLine,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react'

type Option = 'auto' | 'manual'

const OPTIONS: {
  value: Option
  Icon: typeof Wand2
  title: string
  description: string
  bullets?: string[]
  recommended?: boolean
}[] = [
  {
    value: 'auto',
    Icon: Wand2,
    title: '웹사이트에서 자동 가져오기',
    description: '기존 상세페이지를 분석하여 자동으로 상품을 생성합니다',
    bullets: [
      '평균 30초 이내 자동 등록',
      '이미지 · 가격 · 옵션 자동 추출',
    ],
    recommended: true,
  },
  {
    value: 'manual',
    Icon: PencilLine,
    title: '직접 등록하기',
    description: '상품 정보를 직접 입력하여 등록합니다',
  },
]

type Props = {
  onReset: () => void
  onBack: () => void
  onContinue: (option: Option) => void
}

export function ProductView({ onReset, onBack, onContinue }: Props) {
  const [selected, setSelected] = useState<Option>('auto')

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
            마지막 단계
          </span>
          <button
            onClick={onBack}
            className="text-[13px] font-medium tracking-[-0.005em] text-slate-500 transition hover:text-black"
          >
            이전
          </button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-24 sm:px-10">
        <div className="w-full max-w-[560px]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span>Step 04</span>
              <span className="size-1 rounded-full bg-slate-300" />
              <span className="tracking-[0.12em] text-slate-500">상품 등록</span>
            </div>

            <h1 className="mx-auto mt-5 max-w-[520px] break-keep text-[28px] font-semibold leading-[1.22] tracking-[-0.03em] text-black sm:text-[36px] sm:leading-[1.16] lg:text-[40px]">
              이제 상품만 등록하면 바로 판매를 시작할 수 있습니다
            </h1>

            <p className="mx-auto mt-4 max-w-[440px] break-keep text-[15px] leading-[1.7] tracking-[-0.01em] text-slate-500 sm:text-[16px]">
              AI가 상품 정보를 자동으로 정리해드립니다
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              onContinue(selected)
            }}
            className="mt-10 space-y-3"
          >
            {OPTIONS.map((o) => {
              const active = selected === o.value
              return (
                <button
                  type="button"
                  key={o.value}
                  onClick={() => setSelected(o.value)}
                  aria-pressed={active}
                  className={`group relative w-full rounded-2xl bg-white p-5 text-left transition ${
                    active
                      ? o.recommended
                        ? 'border border-black shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_36px_-16px_rgba(15,23,42,0.22)] ring-1 ring-black'
                        : 'border border-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_28px_-14px_rgba(15,23,42,0.16)] ring-1 ring-slate-900'
                      : o.recommended
                        ? 'border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_24px_-14px_rgba(15,23,42,0.12)] hover:border-slate-300'
                        : 'border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {o.recommended && (
                    <span className="absolute -top-2.5 right-5 inline-flex items-center gap-1 rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold tracking-[-0.005em] text-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.30)]">
                      <Sparkles className="size-3" strokeWidth={2.5} />
                      추천
                    </span>
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`grid size-11 shrink-0 place-items-center rounded-xl transition ${
                        o.recommended
                          ? 'bg-black text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <o.Icon className="size-[18px]" strokeWidth={2} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-slate-900">
                          {o.title}
                        </h3>
                        <div
                          className={`grid size-5 shrink-0 place-items-center rounded-full transition ${
                            active
                              ? 'bg-black text-white'
                              : 'border border-slate-300 text-transparent'
                          }`}
                        >
                          <Check className="size-3" strokeWidth={3.25} />
                        </div>
                      </div>
                      <p className="mt-1 break-keep text-[14px] leading-[1.6] tracking-[-0.005em] text-slate-500">
                        {o.description}
                      </p>

                      {o.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {o.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-center gap-2 text-[13px] tracking-[-0.005em] text-slate-700"
                            >
                              <Zap
                                className="size-3.5 text-sky-500"
                                strokeWidth={2.5}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}

            <div className="pt-6">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-[16px] font-semibold tracking-[-0.015em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_14px_32px_rgba(0,0,0,0.20)] transition hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.22),0_20px_40px_rgba(0,0,0,0.26)] active:translate-y-0"
              >
                상품 등록 시작하기
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
              <p className="mt-3 text-center text-[12px] tracking-[-0.005em] text-slate-400">
                {selected === 'auto' ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Globe
                      className="size-3 text-slate-400"
                      strokeWidth={2}
                    />
                    분석한 자사몰을 기준으로 자동 등록됩니다
                  </span>
                ) : (
                  '등록할 상품 정보를 차례로 입력합니다'
                )}
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
